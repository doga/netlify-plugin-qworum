import test from 'ava';

// Unit tests are using the AVA test runner: https://github.com/avajs/ava
// A local build is performed using the following command:
//   netlify-build --config ../netlify.toml
// Please see this netlify.toml configuration file. It simply runs the
// Build plugin.
// This is a smoke test. You will probably want to write more elaborate unit
// tests to cover your plugin's logic.


const domainEntitlements = {
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
};


test('Qworum test passes', async (t) => {
  

  // Check that build succeeded
  t.true(true);
});
