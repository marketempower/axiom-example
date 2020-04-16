+++
weight = 7
title = "Extending"
subtitle = "Extend Axiom with Custom CSS, Javascript, Typography, Layouts, and more."
tags = ["extending"]
categories = ["docs"]
+++

## Custom CSS / JS

Axiom is setup so you can add your own custom CSS and JS code to extend the theme base css / js files. To take advantage of this feature, add a file named `custom.css` and/or `custom.js` to the  _Assets_ directory (`/assets/`). Axiom will bundle the custom files with the base Theme files, minify the custom code, and preload the bundles to enhance performance.

The Example site Assets directory contains a pair of empty custom CSS and JS files to get you started.

If you're not using the Custom CSS and JS features, you can delete the corresponding files (`/assets/custom.css` and `/assets/custom.js`).

{{< alert "Axiom's Theme CSS file is _purged_ for production." "alert" >}}

__Alert!__: Regarding Tailwind CSS Classes. Axiom's Theme CSS file is _purged_ for production and will only include the Tailwind CSS class names used by the Theme and Example website. If you find that a class name is not taking effect, most likely you are using one that has been purged. To remedy this, choose one of the following options:

- Use the Custom CSS feature described here to create the necessary class definitions.
- Run the Theme's [NPM production script](https://github.com/marketempower/axiom/blob/master/package.json) to generate a fresh Theme CSS file. The script will scan both the Theme's __AND__ your Project's directories for class names _before_ purging. To use this option run these commands:

```shell
# assuming currently in Project root, cd to Theme root
cd themes/axiom/
npm install
npm run prd
```

Wait for the task to complete, kill and restart Hugo server, and your class should now have a definition in the Theme CSS file.

## Custom Typography

See the Example website's [EXAMPLE-TYPE.css](https://github.com/marketempower/axiom-example/blob/master/assets/EXAMPLE-TYPE.css) file and the [Configuration]({{< relref "configuration" >}}) `params.font` section to get started.

> Note: In `type.css` begin each URL with the `{{ .host }}` variable so that proper paths/URLs are substituted on build.

## Custom Layouts

Axiom Theme layouts can be overridden with your own, or you can add additional layouts not included with Axiom. Simply create a Project Layouts directory (`/layouts/`) and add your files.

Layouts which you override, will automatically show for any Content which Hugo maps to that layout. If you added additional layouts which are custom and don't automatically map, you can use Hugo's predefined [layout](https://gohugo.io/content-management/front-matter#predefined) Frontmatter field to specify which layout to use. The Example website Documentation section uses a custom layouts directory (`/layouts/docs/`) using the "automatic" technique.
