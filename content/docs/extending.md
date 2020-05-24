+++
weight = 7
title = "Extending"
subtitle = "Extend Axiom with Custom CSS, Javascript, Typography, Layouts, and more."
tags = ["extending"]
categories = ["docs"]
+++

## Custom CSS / JS

Axiom is setup so you can add your own custom CSS and JS code to extend the base files. To take advantage of this feature, add a file named `custom.css` and/or `custom.js` to your website's project root  _Assets_ directory (`/assets/`). Axiom will bundle the custom files with the base Theme asset files, minify the custom code, and preload the bundles to enhance performance.

The Example website Assets directory contains a pair of empty custom CSS and JS files to get you started.

If you're not using the Custom CSS and JS features, you can delete the corresponding files (`/assets/custom.css` and `/assets/custom.js`).

### Custom CSS

Adding custom CSS to Axiom is as easy as writing a definition and hitting *Save*. If you'd like a more powerful option, a full build pipeline is available.

{{< alert "Axiom's Tailwind CSS is *purged* for production." "alert" >}}

**Alert!**: Axiom's Tailwind CSS is _purged_ for production and will only include the CSS used by the Theme and Example website. If you find that a class name or style is not taking effect, most likely you are using one that has been purged.

To add your own Custom CSS use one of the options below:

1\. **Vanilla CSS**: Add any needed style definitions to the **Assets** Custom CSS file (`/assets/custom.css`). Any CSS added to this file will automatically get minified and bundled with the Theme's CSS. No additional steps are needed.

NOTE on Tailwind CSS: Because this is the Vanilla CSS (non-build) option, you'll need to manually add Tailwind CSS definitions that aren't already included in Axiom's purged CSS.

2\. **Build CSS**: Add **PostCSS** style CSS using the **Source** Custom CSS file (`/src/custom.css`). Using this method you have access to all Tailwind CSS features, the `@import` function, and more.

NOTE on Tailwind CSS: Because this is the Build CSS option, Tailwind CSS is imported at the build entry point (`/src/index.css`). You don't need to manually write any Tailwind CSS definitions as long as the class names are used in your Hugo files. During the build step, the ENTIRE Tailwind CSS library is imported, then PurgeCSS scans your Hugo files, and keeps only the definitions that are needed.

After you've written your CSS definitions, you'll need to **output** a compiled version to the Assets directory. This will overwrite the `/assets/custom.css` file with the compiled version.

The Example website includes an [NPM scripts](https://github.com/marketempower/axiom-example/blob/master/package.json) build pipeline (task runner free) which will handle the process for you. Included are `PostCSS`, `tailwindcss`, `postcss-import`, `postcss-nesting`, `purgecss`, `autoprefixer`, and `cssnano`. Both `production` and `development` options are available.

```shell
# assuming currently in Project root
npm install

# choose one of the following:
# production script
npm run assets:prd
# development script
npm run assets:dev
# watch CSS and JS
npm run watch
```

When the build task completes, the Assets Custom CSS file (`/assets/custom.css`) will now contain your compiled Custom CSS. The output will vary depending on whether a production or development script was run.

You can customize the CSS build pipeline further, by editing the included `postcss.config.js` and `tailwind.config.js` configuration files.

## Custom JS

Use the same methods as described above for Custom CSS. Choose either the Vanilla JS or Build JS route. The same NPM scripts can be used to compile Custom JS.

## Custom Typography

See the Example website's [EXAMPLE-TYPE.css](https://github.com/marketempower/axiom-example/blob/master/src/EXAMPLE-TYPE.css) file and the [Configuration]({{< relref "configuration" >}}) `params.font` section to get started.

> Note: Unless you're using absolute URLS, begin each URL with the `{{ .host }}` variable so that proper paths/URLs are substituted on build.

## Custom Syntax Highlighting CSS

To add your own Custom Syntax Highlighting CSS use one of the options below:

1\. **Vanilla CSS**: Create one or both **Assets** Custom Syntax Highlighting CSS files (`/assets/syntax-dark.css`) and/or (`/assets/syntax-light.css`). Either duplicate and edit Axiom's version or use one of the freely available color schemes available in the Chroma Gallery (you will need to prepend some CSS from Axiom's version to the top of the third-party schemes).

2\. **Build CSS**: Add **PostCSS** style CSS using the **Source** Custom Syntax Highlighting CSS files (`/src/syntax-dark.css`) and/or (`/src/syntax-light.css`). Using this method you have access to all Tailwind CSS features, the `@import` function, and more.

## Custom Layouts

Axiom Theme layouts can be overridden with your own, or you can add additional layouts not included with Axiom. Simply create a Project Layouts directory (`/layouts/`) and add your files.

Layouts which you override, will automatically show for any Content which Hugo maps to that layout. If you added additional layouts which are custom and don't automatically map, you can use Hugo's predefined [layout](https://gohugo.io/content-management/front-matter#predefined) Frontmatter field to specify which layout to use. The Example website Documentation section uses a custom layouts directory (`/layouts/docs/`) using the "automatic" technique.
