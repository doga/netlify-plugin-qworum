// This module verifies that a website is entitled to use Qworum.

// http client
import got from 'got';

// url of the list of the entitled websites
const entitledWebsitesUrl = new URL('https://qworum.net/entitled-websites.json');

// private
function arrayContainsStrings(array) {
  return (
    array instanceof Array && 
    !array.find(element => typeof element !== 'string')
  );
}

// exported
/**
 * Verifies that a website is entitled to use Qworum.
 * The 2nd argument is undefined when called in production.
 * The 2nd argument contains the list of entitled urls when testing.
 * Throws an error if an argument is not valid.
 * Returns a boolean.
 */
async function verifyWebsiteEntitlement(websiteUrlStr, entitledWebsitesTestFixtures) {
  // check call parameters
  if (typeof websiteUrlStr !== 'string') {
    throw new Error('missing websiteUrlStr argument');
  }
  if (entitledWebsitesTestFixtures && !arrayContainsStrings(entitledWebsitesTestFixtures)) {
    throw new Error('wrong entitledWebsitesTestFixtures argument');
  }

  let siteIsEntitled = false;

  try {
    const
    // get the list of entitled websites
    entitledWebsites = (
      entitledWebsitesTestFixtures ?
      /* use the fixture list */ entitledWebsitesTestFixtures :
      /* get the actual list from the web */ await got(`${entitledWebsitesUrl}`).json()
    );

    // verify the website entitlement
    siteIsEntitled = 
    !!entitledWebsites.find(enabledSiteUrlString => enabledSiteUrlString.startsWith(websiteUrlStr));
  } catch (e) {
    console.log(`error: ${e}`);
  }
  return siteIsEntitled;
}

export {verifyWebsiteEntitlement};
