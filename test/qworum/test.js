import test from 'ava';

// Unit tests are using the AVA test runner: https://github.com/avajs/ava
// A local build is performed using the following command:
//   netlify-build --config ../netlify.toml
// Please see this netlify.toml configuration file. It simply runs the
// Build plugin.
// This is a smoke test. You will probably want to write more elaborate unit
// tests to cover your plugin's logic.

import { Qworum, QworumEntitlements, QworumEntitlementError } from '../../src/modules/qworum.mjs';

const
domainEntitlementsObject = {
  "@context"         : "https://qworum.net/semantic/contexts/business.jsonld",
  "@type"            : "PaaS",
  "domainEntitlement": [
    {
      "@type"          : "DomainEntitlement",
      "domain"         : "domain.example",
      "subdomainsCount": 0
    },
    {
      "@type"          : "DomainEntitlement",
      "domain"         : "domain2.example",
      "subdomainsCount": 2
    }
  ]
},
domainEntitlements = new QworumEntitlements(domainEntitlementsObject);


test('Bogus URL passes', async (t) => {
  t.true(domainEntitlements.domainIsEntitled());
	await t.notThrowsAsync(async () => {
		await Qworum.onPreBuild(undefined, domainEntitlements);
	});
});

test('Unknown domain has no entitlement', async (t) => {
	await t.throwsAsync(async () => {
		await Qworum.onPreBuild('https://unknown.example', domainEntitlements);
	}, {instanceOf: QworumEntitlementError});
});

test('Subscribed domain has entitlement', async (t) => {
  // console.debug('should be true:',domainEntitlements.domainIsEntitled('domain.example'))
  t.true(domainEntitlements.domainIsEntitled('domain.example'));
	await t.notThrowsAsync(async () => {
		await Qworum.onPreBuild('https://domain.example', domainEntitlements);
	});
});

test('Subdomain of subscribed domain may have entitlement', async (t) => {
  t.true(domainEntitlements.domainIsEntitled('subdomain.domain2.example'))
  // console.debug('should be true:',domainEntitlements.domainIsEntitled('subdomain.domain2.example'))
  await t.notThrowsAsync(async () => {
    await Qworum.onPreBuild('https://subdomain.domain2.example', domainEntitlements);
  });

  t.false(domainEntitlements.domainIsEntitled('subdomain.domain.example'));
  // console.debug('should be false:',domainEntitlements.domainIsEntitled('subdomain.domain.example'))
  await t.throwsAsync(async () => {
    await Qworum.onPreBuild('https://subdomain.domain.example', domainEntitlements);
  }, {instanceOf: QworumEntitlementError});


});
