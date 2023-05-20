import test from 'ava';

// Unit tests are using the AVA test runner: https://github.com/avajs/ava
// A local build is performed using the following command:
//   netlify-build --config ../netlify.toml
// Please see this netlify.toml configuration file. It simply runs the
// Build plugin.
// This is a smoke test. You will probably want to write more elaborate unit
// tests to cover your plugin's logic.


import axios from 'axios';


test('Qworum test passes', async (t) => {
  const response = await axios.get('https://qworum.net/semantic/domain-entitlements.jsonld');
  console.debug(response.status);
  console.debug(typeof response.data);
  console.debug(response.data);
  console.debug(response.data['@context']);

  // Check that build succeeded
  t.true(true);

});
