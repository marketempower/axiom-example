+++
weight = 2
title = "Features"
subtitle = "Axiom includes unique and powerful Features that set it apart from other Hugo Themes."
tags = ["features"]
categories = ["docs"]
+++

SEO and Social Media features include Article sharing via Facebook and Twitter (without heavy Javascript libraries), Google Structured Data `ld+json` with a full Schema.org `Article` fieldset, Open-Graph tags, Serverless CDN support (Netlify, Vercel), Asset CDN support (Cloudinary) with image transformations for responsive images, ATOM feed Syndication XML format, asset preloading, third-party prefetching, SVG icons, syntax highlighting with Chroma, custom 404 error page, custom CSS/JS support, and a full Multilingual implementation. Built with Tailwind CSS, Alpine JS, and an NPM Scripts (task-runner-free) build process, the Axiom Hugo theme is feature packed.

## Modularity (DRY-er Content)

Axiom leverages Hugo's [Headless Resource](https://gohugo.io/content-management/page-bundles/#headless-bundle) feature which allows you to separate pieces of Content into Snippets or Components (essentially "Content Partials"). Combined with Axiom's Shortcodes, a high degree of modularity is possible.

The Home (`/content/home/`) and Snippets (`/content/snippets/`) Content directories are examples of this modular approach. Any type of Content can be pulled into your Pages and Posts using this pattern. See the Homepage build for an example (link in _Homepage_ section below).

## Extendable

Axiom is customizable in almost every way including Custom CSS, Javascript, and Syntax Highlighting. Visit the [Extending]({{< relref "docs/extending" >}}) page to learn more.

## Shortcodes

Axiom comes with several powerful Shortcodes which allow you to add complex HTML elements to your Content files. Visit the [Shortcodes]({{< relref "docs/shortcodes" >}}) page to learn more.

## Homepage

Axiom's Homepage is a modular design without any layout applied, in essence, it's a blank slate. This allows you to build up a bespoke Homepage. Shortcodes make it easy to construct a Homepage with blocks and widgets.

The Example website [Homepage](https://github.com/marketempower/axiom-example/blob/master/content/_index.html) shows a common configuration and can be used as a starting point.

## CDNs, Serverless

Axiom has support for [Cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/rjndspxhgeglpwn0hwzv) CDN built in, and is serverless ready ([Netlify](https://www.netlify.com/), [Vercel](https://www.vercel.com/)).

## Disqus Comments

Disqus commenting is available on all Section's Single page view. Comments are on by default if you set a [Configuration]({{< relref "docs/configuration" >}}) Services `disqusShortname` value. Comments can be turned off an a post-by-post basis by using the [Frontmatter]({{< relref "docs/frontmatter" >}}) `comments` variable and setting it to `false`.

## Archetypes

Axiom includes helpful Content generators to quickly create new Section entries. Visit the [Archetypes]({{< relref "docs/archetypes" >}}) page to learn more.

## Frontmatter

Fine tune individual Content entries with Axiom's custom Frontmatter fields. Visit the [Frontmatter]({{< relref "docs/frontmatter" >}}) page to learn more.

## Markdown Styling

Axiom has a very advanced [CDATA CSS](https://github.com/marketempower/axiom/blob/master/src/cdata.css) file. It has high specificity and only affects the direct children of the parent element with the `class="cdata"` attribute.

All Markdown content in the Content directory automatically gets styled with the `cdata` styles. When using Shortcodes or building out the Homepage, you can use the `cdata` class to style content using those rules.

Why `cdata`? CDATA means "character data" in SGML. Many themes use a class name like "markdown" or "mdown" for this purpose, but we feel it's too limiting and doesn't consider other future syntax that may serve the same use as Markdown does now. CDATA is just a way for us to know it's unstyled bare HTML, that needs CSS styles based on element names instead of class names.

## Syntax Highlighting

Axiom uses Hugo's built-in syntax highlighting powered by Chroma. You can choose between Axiom's built-in dark and light color schemes, or provide your own bespoke color scheme. Highlighting CSS is inlined for performance. Additionally, you can turn it off completely, such as when you want to use a third-party Javascript library.

## Authors

Axiom supports Authors for your Content pieces. You can set individual Author contact data and profile images. To configure Authors, edit the _Authors_ data file (`/data/author.toml`) and output and Author profile image locally or on a CDN. Recommended size is `256x256` pixels.

See the Hugo Data File Documentation for more information.

## Typography

Rich typography is one of the best ways to distinguish your website apart from the crowd. Axiom's Custom Typography feature allows you to specify as many font families and files as desired. Each file will be preloaded to speed up website performance. Visit the [Extending]({{< relref "docs/extending" >}}) page to learn more.

## Sharing

Axiom is configured to allow users to share your content via Facebook and Twitter. The implementation uses non-Javascript library techniques, so your website speed won't be slowed down.

For Twitter sharing, set the Author's Twitter username in the Author's Data file. For Facebook sharing, set the website's Facebook App Id in the _Services_ Config (`params.services` `facebookApp`) option.

## ATOM Feed

Axiom uses an ATOM syndication feed format which includes full post content in each entry.

If set in the _Image_ Config (`params.image` `icon1To1` and `icon2To1`), an icon and logo element will be added to the Feed output.

## Services

__Google Analytics__: Collect data with Google Analytics.

__Google Ads__: Collect data and track conversions with Google Ads.

__Google Adsense__: Axiom is ready for Ads if you choose to serve them. There is a single responsive Ad Slot at the bottom of all Section Content.

If you set an Adsense Id in the _Services_ Config (`params.services` `adsenseId`), Ads will be activated, otherwise all Ads related Javascript and code will not be output. Be sure to also set your `adsenseAdSlotId`.

Setting the `adsenseLazy` to true will delay the loading of the Javascript slightly to enhance page speed.

__Facebook__: Collect data, and share Content with Facebook.

If you set a Facebook Pixel Id in the _Services_ Config (`params.services` `facebookPixel`), a lightweight pixel tracker will be activated, otherwise all related Javascript and code will not be output. If you set a Facebook App Id in the _Services_ Config (`params.services` `facebookApp`) it will be used for Open-Graph tags and in Content Sharing.
