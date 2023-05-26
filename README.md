[![Qworum's Netlify Build Plugin](Qworum-plus-Netlify.svg)](https://app.netlify.com/plugins/@qworum/netlify-plugin-qworum/install)

# Qworum's Netlify Build Plugin

## What Qworum is

[Qworum](https://qworum.net):

- is a frontend-platform-as-a-service.
- provides advanced web browser capabilities to web applications.
- enables modular and distributed web applications.

## When to use this build plugin

It is recommended that you [add this plugin to your Netlify build process](https://app.netlify.com/plugins/@qworum/netlify-plugin-qworum/install) if:

- your website relies on Qworum, and
- you are deploying your website on Netlify.

## What this build plugin does

This Netlify build plugin:

- checks whether the website that is being deployed on Netlify is entitled to use Qworum.
- works toward preventing runtime errors in production websites that rely on Qworum; if this plugin aborts a build process, then your website would certainly have shown faulty behaviour when deployed.

## Installing this build plugin

### Installing manually from Netlify's Integration Hub (Recommended)

This build plugin is available on [Netlify's Integrations Hub](https://app.netlify.com/plugins).

Follow this [direct link for adding the Qworum plugin to your website's build process](https://app.netlify.com/plugins/@qworum/netlify-plugin-qworum/install).

### Installing from NPM

```shell
npm install -D @qworum/netlify-plugin-qworum
```

...then add the following to your `netlify.toml` file:

```toml
[[plugins]]
  package = "@qworum/netlify-plugin-qworum"
```

Use this method if you wish to pin the Next.js Runtime to a specific version.

## Configuring this build plugin

You do not need to set any environment variables or otherwise configure this build plugin. This plugin only uses the environment variables that Netlify's build process provides by default, such as `URL`.

## Demo website

Details of a website that uses this build plugin for Netlify deployments:

- Live site: [netlify.template.qworum.net](https://netlify.template.qworum.net/).
- [Deployment logs](https://app.netlify.com/sites/qworum-template/deploys/647045122e5f930008a22b43#L62-L101).
- [GitHub repository](https://github.com/doga/qworum-netlify-template).

## License

This software is released under the terms of the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

∎
