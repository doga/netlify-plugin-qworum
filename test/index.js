import test from 'ava'
import { fileURLToPath } from 'url'

import netlifyBuild from '@netlify/build'

const NETLIFY_CONFIG = fileURLToPath(
  new URL('../netlify.toml', import.meta.url),
);

import { verifyWebsiteEntitlement } from "../src/modules/website-entitlement-verifier.mjs";

const entitledWebsites = [
  "http://127.0.0.1:8080/*",

  "https://e-commerce.demo.qworum.com/*",
  // "https://cart.demo.qworum.com/*",
  // "https://payment.demo.qworum.com/*"
];


test('entitled site passes the test', async (t) => {
  const
  websiteIsEntitled = await verifyWebsiteEntitlement('https://e-commerce.demo.qworum.com');
  t.true(websiteIsEntitled);
});

test('unentitled site does not pass the test', async (t) => {
  const
  websiteIsEntitled = await verifyWebsiteEntitlement('https://example.com');
  t.false(websiteIsEntitled);
});

// Unit tests are using the AVA test runner: https://github.com/avajs/ava
// A local build is performed using the following command:
//   netlify-build --config ../netlify.toml
// Please see this netlify.toml configuration file. It simply runs the
// Build plugin.
// This is a smoke test. You will probably want to write more elaborate unit
// tests to cover your plugin's logic.
// test('Netlify Build should not fail', async (t) => {
//   const { success, logs } = await netlifyBuild({
//     config: NETLIFY_CONFIG,
//     buffer: true,
//   })

//   // Netlify Build output
//   console.log(
//     [logs.stdout.join('\n'), logs.stderr.join('\n')]
//       .filter(Boolean)
//       .join('\n\n'),
//   )

//   // Check that build succeeded
//   t.true(success)
// })
