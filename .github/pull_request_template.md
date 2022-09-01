# netlify-plugin-qworum

New build plugin for Netlify.

## Problem description

New build plugin for Netlify! [Qworum](https://qworum.net) provides advanced web browser functionality that websites can use, but Qworum must be explicity enabled for websites that wish to use it. If Qworum is unavailable to a website that wishes to use it, then the website may not function properly, or may be unable to provide some of its functionality to its users.

## Issues and pull requests related to this problem

None.

## Solution description

This build plugin verifies that the website being built is entitled to use Qworum, so that the website will work correctly when deployed. If the website isn't entitled, then this plugin will abort the build process and remind the user to enable Qworum for that website.

## Alternative solutions

There is no alternative. Without this plugin, some deployed websites may not work correctly if they are using Qworum.

## Checklist

Please add a `x` inside each checkbox:

- [x] I have read the [contribution guidelines](../blob/master/CONTRIBUTING.md).
- [x] I have added tests (we are enforcing 100% test coverage).
- [x] I have added documentation in the `README.md`, the `docs` directory (if
      any) and the `examples` directory (if any).
- [x] The status checks are successful (continuous integration). Those can be
      seen below.
