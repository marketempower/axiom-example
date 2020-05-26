+++
weight = 5
title = "Shortcodes"
subtitle = "Easily enhance Content Pages with extra Features using custom Axiom Shortcodes."
tags = ["shortcodes"]
categories = ["docs"]
+++

Axiom's powerful custom Shortcodes allow you to add complex HTML components to your Content using simple Shortcode declarations.

## Things to Know

- Axiom's Shortcodes can be declared using [Named or Positional](https://gohugo.io/templates/shortcode-templates/#positional-vs-named-parameters) Parameters (except for _Figure_).
- When using CSS class names in Shortcodes, be aware that not all Tailwind CSS classes are available. Axiom's CSS file is _purged_ for production and will only include the class names used by the Theme and Example website. See the [Extending]({{< relref "docs/extending" >}}) section to learn how to use Custom CSS with Axiom.

## Alert

Alert your Users about a key piece of information or something important.

```yaml
# options
message: "string, short message" # REQUIRED
# determines color, default "default"
type: ['default', 'info', 'warn', 'alert']
# word shown in badge, default "info"
badge: "Yikes"
```

```plaintext
<!-- examples -->
{{</* alert "An important piece of information." */>}}
{{</* alert "An important piece of information." "info" */>}}
{{</* alert message="An important piece of information." type="alert" badge="Yikes" */>}}
```

{{< alert "An important piece of information." >}}
{{< alert "An important piece of information." "info" >}}
{{< alert message="An important piece of information." type="alert" badge="Yikes" >}}

## Blockquote

A simpler and cleaner API than using native Markdown Blockquote syntax.

```yaml
# options
quote: "string" # REQUIRED
attr: "attribution for quote"
cite: "citation for quote"
link: "link for citation"
```

```plaintext
<!-- examples -->
{{</* blockquote "Tip: You can also use standard Markdown Blockquote syntax if you prefer." */>}}
{{</* blockquote quote="You can trade hours for dollars or ideas for millions." attr="Cactus Jack on" cite="The Shark Tank" link="https://www.example.com/" */>}}
```

{{< blockquote "Tip: You can also use standard Markdown Blockquote syntax if you prefer." >}}

{{< blockquote quote="You can trade hours for dollars or ideas for millions." attr="Cactus Jack" cite="The Shark Tank" link="https://www.example.com/" >}}

## Button

A UI Button element with optional SVG icon and/or link.

> Note: The `icon` parameter value must match one of the filenames at `/layouts/partials/svg/`. You can add more files by creating the same directory structure in project root. Be sure to add the same markup to the opening `<svg>` tag in each file.

```yaml
# options
text: "string" # REQUIRED
# determines color, default "default"
type: ['default', 'info', 'warn', 'alert']
icon: "SVG icon name"
href: "URL"
```

```plaintext
<!-- examples -->
{{</* button text="Button" */>}}
{{</* button text="Download PDF" type="info" icon="download" href="pdf/file.pdf" */>}}
```

{{< blocks/justify class="mt-8" >}}
{{< button text="Button" >}}&nbsp;&nbsp;
{{< button text="Download PDF" type="info" icon="download" href="docs/shortcodes/#button" >}}
{{< /blocks/justify >}}

## CDN URL

Generate a CDN aware URL.

If `params.cdn.provider=local`, CDN is skipped and URL is passed through `relURL`.

```yaml
# options
src: "file path plus name, or uuid" # REQUIRED
preset: "preset name from `params.cloudinary.presets`"
# file type according to CDN, default "image"
type: ["image", "video", "raw"]
```

```plaintext
<!-- examples -->
{{</* cdn-url "image/file.jpg" */>}}
{{</* cdn-url src="image/file.jpg" preset="base" */>}}
{{</* cdn-url src="font/file.woff" type="raw" */>}}
```

```plaintext
<!-- outputs -->
<!-- 1st example, with 'params.cdn.provider=local' -->
/image/file.jpg

<!-- 1st example, with 'params.cdn.provider=cloudinary' -->
https://res.cloudinary.com/CLOUD_NAME/image/upload/image/file.jpg

<!-- 2nd example, with 'preset=base' -->
https://res.cloudinary.com/CLOUD_NAME/image/upload/f_auto,q_auto/image/file.jpg

<!-- 3rd example, with 'type=raw' -->
https://res.cloudinary.com/CLOUD_NAME/raw/upload/font/file.woff
```

## Snippet (Headless Resource)

Add a Snippet from a [Headless Resource](https://gohugo.io/content-management/page-bundles/#headless-bundle) in the Content directory.

```yaml
# options
page: "page bundle path and filename excluding extension"
```

```plaintext
<!-- examples -->
{{</* headless-resource "/home/welcome" */>}}
{{</* headless-resource "/components/javascript-template" */>}}
```

```html
<!-- outputs -->
<!-- 1st example -->
<h1>Welcome</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<!-- 2nd example -->
<div x-data="">
  <button type="submit" @click="">Submit</button>
  <template x-if="">
    <pre x-html=""></pre>
  </template>
</div>
<script>
function init() {
  return {};
}
</script>
```

## Recent Pages Widget

Show a number of Recent Pages from the Config file `params.mainSections` array. Pages will be displayed using the `/layouts/_default/summary.html` view.

```yaml
# options
# default 7
limit: "maximum number of pages to return"
class: "class names" # default "mt-8"
style: "style definitions"
```

```plaintext
<!-- examples -->
{{</* recent-pages */>}}
{{</* recent-pages 5 */>}}
{{</* recent-pages limit=5 class="mt-3" */>}}
```

Skipping example outputs, to avoid confusion with regular page content.

## Inline SVG (Icon)

Output an inline SVG file.

> Note: The `name` parameter value must match one of the filenames at `/layouts/partials/svg/`. You can add more files by creating the same directory structure in project root. Be sure to add the same markup to the opening `<svg>` tag in each file.

```yaml
# options
name: "filename excluding extension" # REQUIRED
class: "CSS class names"
style: "CSS style definitions"
viewbox: "override viewbox settings"
```

```plaintext
<!-- examples -->
{{</* svg name="download" class="h-8 w-auto text-red-500 fill-current" */>}}
{{</* svg name="instagram" style="width: 2rem; height: 2rem; color: royalblue;" */>}}
```

{{< blocks/justify class="mt-8" >}}
{{< svg name="download" class="h-8 w-auto text-red-500 fill-current" >}}&nbsp;&nbsp;{{< svg name="instagram" style="width: 2rem; height: 2rem; color: royalblue;" >}}
{{< /blocks/justify >}}

## Term Cloud Widget

Output a Term cloud with optional count.

```yaml
# options
term: "term name" # default "tags"
count: "show count" # default false
```

```plaintext
<!-- examples -->
{{</* term-cloud count=true */>}}
{{</* term-cloud "categories" */>}}
```

{{< term-cloud count=true >}}
{{< term-cloud "categories" >}}

## Figure

Add a Figure image in the flow of Content.

Axiom has its own custom Figure image Shortcode which uses the same API as the built in Hugo Shortcode. Axiom's Shortcode has been enhanced to support CDN images and transformations. Just pass it an image name (e.g., `path/filename.ext`, `public_id` [uuid]) with or without extension and Axiom will do the rest - no need to copy/paste complicated URLs in your Markdown files.

```yaml
# options
src: "img name, uuid, path, or URL"
link: "img hyperlink"
target: "img hyperlink target"
rel: "img hyperlink relation"
alt: "img alternate text"
width: "img width attribute"
height: "img height attribute"

title: "figure title (h4)"
caption: "figure caption (Markdown supported)"
attr: "attribution text (Markdown within the value of attr supported)"
attrlink: "attribution hyperlink"

class: "figure html class attribute"
imgclass: "img html class attribute"
captionclass: "figcaption html class attribute"

preset: "cdn transform preset used in partial 'cdn-src'"
```

```plaintext
<!-- examples -->
{{</* figure src="image/data-chart.webp" */>}}
{{</* figure src="5e39e315-c06c-4d81-9b4a-35fca661621c" */>}}
{{</* figure src="image/data-chart.webp" alt="Data Chart" caption="Data Chart" attr="Big Data" attrlink="https://www.example.com/" */>}}
```

{{< figure src="image/page-default.webp" alt="Data Chart" caption="Data Chart" attr="Big Data" attrlink="https://www.example.com/" >}}

## Blocks: Section

Output a Section block.

```yaml
# options
class: "override wrapper class names"
width: "override inner width class name"
style: "add custom style declarations"
mdown: "toggle markdownify on Inner Content" # default on
```

```plaintext
<!-- example -->
{{</* blocks/section width="max-w-2xl" */>}}
{{</* headless-resource "/home/welcome" */>}}
{{</* /blocks/section */>}}
```

```html
<!-- output -->
<div class="section flex justify-center">
  <div class="section-inner flex-grow min-w-0 mx-4 sm:mx-8 mt-8 max-w-2xl cdata">
    <!-- SNIP: headless-resource Shortcode HTML output -->
  </div>
</div>
```

## Blocks: Justify

Output a Flex Justified block.

```yaml
# options
# default "center"
justify: ["start", "center", "end", "between", "around"]
class: "optional class names to add"
```

```
<!-- example -->
{{</* blocks/justify class="mt-8" */>}}
{{</* button text="Download PDF" type="info" icon="download" href="pdf/file.pdf" */>}}
{{</* /blocks/justify */>}}
```

```html
<!-- output -->
<div class="flex justify-center mt-8">
  <!-- SNIP: button Shortcode SVG output -->
</div>
```

## Readfile and Partial

The Readfile and Partial shortcodes provide a way to include more complex content into your website.

{{< alert "Use Caution: Prevent Dangerous Content" "alert" >}}

The Readfile shortcode accepts one parameter which is required and must be a valid file location according to Hugo.

The Partial shortcode accepts one parameter which is required and must be a valid partial file according to Hugo.

See the Hugo docs on the `readFile` function, and Partials for more details.

```plaintext
<!-- example -->
{{</* readfile "/static/movies.csv" */>}}
{{</* partial "vcard" */>}}
```
