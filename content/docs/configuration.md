+++
weight = 3
title = "Configuration"
subtitle = "Configure Axiom and it's many custom Features and Options."
tags = ["config"]
categories = ["docs"]
+++

Options to customize Axiom, starting from the top of the _Config_ file ([config.toml](https://github.com/marketempower/axiom-example/blob/master/config.toml)).

If you started with the [Quick Start]({{< relref "quick-start" >}}) step, the Config file will be located at `/axiom-example/config.toml`. Open this file now and change/add/remove options as we work down the list of options.

## Paths

When entering paths in the Config file or in Content files, the most portable and robust option is to use a __relative__ path:

- Don't use a beginning forward slash: NO:`/images/example.png`, YES:`images/example.png`
- Local file paths are relative to the `publishDir` Config option (default: `public`)
- CDN file paths are relative to the `params.cdn.provider` constructed URL
- Local file URLs will be output as absolute or root-relative based on the `canonifyURLs` Config setting
- CDN file URLs are always absolute

Examples of where relative paths are recommended:

- In the `params.logo` Config section
- In the `params.images` Config section
- In a Page or Post's Frontmatter when setting the Feature image
- In a Page or Post's Content when linking to a PDF, or using the Figure shortcode to display an image
- Anywhere else an asset path is entered, excepting links to third-party websites/assets

## Core

Options related to Hugo's Core build settings:

```toml
# Change to your website's URL (NO trailing slash)
# For local dev, change to: http://localhost:1313
baseURL = "https://example.com"

# Change to your Brand or Website Title
title = "Axiom A Hugo Theme"
# Language codes (lowercase)
languageCode = "en-us"
defaultContentLanguage = "en-us"

# Which theme to use
theme = "axiom"

# Pagination
paginate = 2
# Canonify relative URLs using baseURL
canonifyURLs = false
# Length of snippet on post index and structured data
summaryLength = 40
# Max posts to show in atom feed
rssLimit = 100
# Enable Emoji's in posts
enableEmoji = true
# Output a robots.txt file (see the 'Frontmatter' section below)
enableRobotsTXT = true
# Don't automatically mangle titles
pluralizelisttitles = false
```

> If you change the `defaultContentLanguage` you must add the new language in the Config `[languages]` table, and an i18n language file in `/i18n/lang-code.toml`.

There are many more Core options that can be added to suit your needs. See the Hugo Configuration Documentation for more information.

## Permalinks

Axiom is configured to use the file name slug as the publicly accessible URL:

```toml
[permalinks]
posts = "/:filename"
```

The `post` variable name refers to individual files in the `post` content Section.

## Params

Options related to Hugo's Param settings:

```toml
[params]
# Sections to include in lists and indexes
mainSections = ["posts"]
# Footer copyright start year, prepended to current year, e.g., 2000-2020
copyrightYear = 2019
# Posts Date format
# Go Reference time: Mon Jan 2 15:04:05 MST 2006
dateFormat = "Jan 2, 2006 3:04PM"
# Chroma Syntax Highlighting
# Options: dark, light, false
highlight = "dark"
omitThemeAttribution = false
```

To enable Axiom's Syntax Highlighting color schemes to take effect, you will need to enable Markup Highlight Classes:

```toml
[markup]
[markup.highlight]
codeFences = true
noClasses = false

# Optional line numbers:
# lineNos = true
# lineNumbersInTable = false
```

Note about `[markup.highlight] -> codeFences`. The Hugo default for this is `true`. Hugo code fence style syntax highlighting will NOT work if it's set to `false`. This config variable doesn't need to be in your Config file unless you want to turn OFF Hugo syntax highlighting completely.

Axiom does not support line numbers in a table. If line numbers is on, make sure `lineNumbersInTable = false`.

There are many more Param options that can be added to suit your needs. See the Hugo Configuration Documentation for more information.

## Branding

Config options related to your brand or website:

```toml
[params.brand]
# Just domain name, no www
domain = "example.com"
# Contact email address
email = "info@example.com"
```

Mainly used for Contact options.

## Social

Settings relating to social networks:

```toml
[params.social]
# Replace USERNAME with your own
facebook = "https://www.facebook.com/USERNAME"
github = "https://github.com/USERNAME"
instagram = "https://instagram.com/USERNAME"
linkedin = "https://www.linkedin.com/in/USERNAME"
pinterest = "https://www.pinterest.com/USERNAME"
stackoverflow = "https://stackoverflow.com/users/USERNAME"
twitter = "https://twitter.com/USERNAME"
youtube = "https://www.youtube.com/USERNAME"

# Show these linked icons in the footer
footer = ["twitter", "github", "instagram"]
```

The `footer` option allows you to show specific social network icons with links in the footer of the website. Each entry must match one of the network names defined.

## Services

Options for third party services, such as analytics, tracking, ads, and APIs:

```toml
[params.services]
# Google Analytics Id
analyticsId = "UA-DEV"
# Google Adwords Id, provided when you setup a Conversion
adwordsId = "AW-DEV"
# Google Adsense Id
adsenseId = "CA-PUB-DEV"
# Google Adsense Ad Slot Id, for ad unit shown below Posts
adsenseAdSlotId = "ID-DEV"
# Google Adsense Lazy Load
adsenseLazy = false
# Google Adwords Conversion Id
adwordsConversionId = "ID-DEV"
# Google Adwords Conversion value (integer, no quotes, 00.00)
adwordsConversionValue = 0
# Facebook App Id
facebookApp = "FB-DEV"
# Facebook Pixel Id
facebookPixel = "FB-DEV"
# Disqus Comments
disqusShortname = ""
```

Comments are on by default when you set a `disqusShortname` value. Comments can be turned off an a post-by-post basis by using the [Frontmatter]({{< relref "docs/frontmatter" >}}) `comments` variable and setting it to `false`.

> Tip: create a `config.dev.toml` file with test values for each service to prevent false positives on trackers.

## Logo

The logo in the website's Header can be shown as 1) styled text, 2) an image, or 3) an inline svg.

1\. TEXT: Show the website's Title (`.Site.Title` param) in styled text instead of a logo:

```toml
[params.logo]
inline = false
path = ""
```

2\. IMAGE: Display the logo as an image (`<img>`):

```toml
[params.logo]
inline = false
path = "image/brand/logo.png"
```

> Note: any file type (extension) may be used, i.e., .jpg, .gif, .svg, etc.

3\. INLINE SVG: Display the logo as an inline svg (`<svg>`):

> Note: Axiom uses Hugo's `readFile` function to get the contents of the SVG as a string. The `path` must be relative to the _Static_ directory (`/static/`) A CDN URL cannot be used with `readFile`.

```toml
[params.logo]
inline = true
path = "image/brand/logo.svg"
```

Advantages with this option include the ability to manipulate the SVG with styles, such as changing the color or adding a hover effect. Also, it reduces HTTP requests by one.

## Images

General image config options:

```toml
[params.image]
# Dimensions of the 'Feature' image (pixels)
width = "2048"
height = "1024"
# Favicons (suggest to store .ico at root of website or CDN)
faviconIco = "favicon.ico"
faviconAlt = "image/brand/favicon.png"
# High-res square version of your Icon or Logo (recommended 2048x2048 px)
icon1To1 = "image/brand/icon-1-1.png"
# High-res rectangular version of your Icon or Logo (recommended 2048x1024 px)
icon2To1 = "image/brand/icon-2-1.png"
# Default 'Feature' image
default = "image/page-default.webp"
```

Further detail on some of the options in the Images section:

`default`: Choose a default image that represents the overall theme of the brand or website. This will be used for Structured Data and Open-Graph for Pages/Posts without a Feature image. It should be size to match the settings entered for `width` and `height`.

## Fonts

The Font section controls if the  _Type CSS_ (`/assets/type.css`) stylesheet is used, and if font files are preloaded:

> See also the [Extending]({{< relref "extending" >}}) Typography documentation.

```toml
[params.font]
# MIME type of font files
type = ""
# Path to font files
path = ""
# List of font files from 'type.css' to preload (setting to empty, disables)
files = []
```

If the `files` array is populated, Axiom will preload the list of font files, and link the Type CSS stylesheet in the website's `<head>` section. You'll need to have the font files either stored locally in a `/static/font/` directory or hosted on a CDN supported by Axiom. You can set the directory where the font files are located with the `path` option.

Example settings to load fonts:

```toml
type = "font/woff"
path = "font/"
files = ["title-400.woff", "sans-400.woff", "serif-italic-400.woff"]
```

If you have many font files added in the Type CSS file, you don't have to preload all of them. You can list a subset of the most important ones in the Config, and let the others load normally. As long as at least one font file is in the `files` array, the Type CSS features will be enabled.

If the `files` array is empty, Axiom will use the Tailwind CSS font-family fallback settings. Either way, the display will look very similar, unless your eye is trained to typography.

## CDNs

Axiom supports CDNs or local file storage. Currently [Cloudinary](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/rjndspxhgeglpwn0hwzv) is the only CDN implemented.

```toml
[params.cdn]
# Asset delivery provider (values: local, cloudinary)
provider = "local"
# Default asset type (values: image, video, raw)
type = "image"

# Cloudinary CDN
[params.cloudinary]
# Base URL for your account (replace CLOUD_NAME, note: add trailing slash)
host = "https://res.cloudinary.com/CLOUD_NAME/"
# URL versioning, e.g., "v12345/"
version = ""
# Cloudinary Internal paths. DON'T EDIT!
image = "image/upload/"
raw = "raw/upload/"
video = "video/upload/"

# Cloudinary asset transformation presets
# Applied internally by Axiom or when using Shortcodes in Content
[params.cloudinary.presets]
# Image: general use, all-around
base = "f_auto,q_auto/"
# Image: content body
page = "w_auto,dpr_auto,c_scale,f_auto,q_auto/"
# Image: content feature
feature = "w_auto,dpr_auto,c_scale,f_auto,q_auto/"
# Image: content summary
summary = "w_auto,dpr_auto,c_scale,f_auto,q_auto/"
```

When `provider` is set to one of the supported CDN values, all paths will be output as absolute URLs. The URL structure will be assembled based on each CDN's design. See the `/axiom/layouts/partials/cdn-src.html` file for details.

> Alert: All config paths/URLs must end with a trailing slash `/`!

## Menus

Axiom comes with two configurable menus. Refer to the Hugo Menus Documentation to learn how to add or remove links:

```toml
[menu]
[[menu.main]]
[[menu.foot]]
```

> NOTE: Be careful adding too many items to the menus, as this could degrade mobile user experience.

## Languages

Axiom is multi-language ready:

```toml
[languages]
[languages."en-us"]
weight = 1
languageName = "US English"
```

> NOTE: If additional languages are added, be sure to create the corresponding lang file in the `i18n` directory, and menus in the Config file.

Refer to the Hugo Multilingual Documentation to learn how to add additional language support.
