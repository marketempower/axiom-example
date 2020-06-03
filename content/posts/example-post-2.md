+++
date = "2020-01-01T17:30:00Z"
lastmod = "2020-01-01T17:30:00Z"
author = "axiom"
title = "Example Post 2"
subtitle = "Example Post 2. Lorem est tota propiore conpellat pectoribus de pectora summo."
feature = "image/page-default.webp"
tags = ["axiom", "hugo", "jamstack"]
categories = ["axiom", "hugo", "jamstack"]
+++

This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

Headings `<h3>`-`<h6>` are all sized the same.

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur?

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

Blockquote without attribution:

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

Blockquote with attribution:

> You can trade hours for dollars or ideas for millions.<br>
> — <cite>Cactus Jack[^1]</cite>

[^1]: [The Shark Tank](https://www.example.com/).

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports them.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

Using Markdown inside table cells:

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Code Blocks

Hugo's built-in Chroma syntax highlighting with Axiom's custom colors:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Title</title>
</head>
<body>
  <p>Lorem...</p>
</body>
</html>
```

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* Item with paragraph:

  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

### Nested Lists

* ul > ul
    * First Sub-item
    * Second Sub-item

1. ol > ol
    1. First Sub-item
    1. Second Sub-item

* ul > ol
    1. First Sub-item
    1. Second Sub-item

1. ol > ul
    * First Sub-item
    * Second Sub-item

* ul > ul > ul
    * First Sub-item
    * Second Sub-item
        * Third Sub-Sub-item

1. ol > ol > ol
    1. First Sub-item
    1. Second Sub-item
        1. Third Sub-Sub-item

## Other Elements - abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
