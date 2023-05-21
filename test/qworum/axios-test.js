import test from 'ava';

// Unit tests are using the AVA test runner: https://github.com/avajs/ava
// A local build is performed using the following command:
//   netlify-build --config ../netlify.toml
// Please see this netlify.toml configuration file. It simply runs the
// Build plugin.
// This is a smoke test. You will probably want to write more elaborate unit
// tests to cover your plugin's logic.


import axios from 'axios';


test('Can download domain entitlements', async (t) => {
  const response = await axios.get('https://qworum.net/semantic/domain-entitlements.jsonld');
  t.is(response.status, 200);
  // console.debug('domain entitlements:', response.data);
  t.false(response.data instanceof Array);
  t.is(response.data['@context'], 'https://qworum.net/semantic/contexts/business.jsonld');

  // t.true(true);

});
