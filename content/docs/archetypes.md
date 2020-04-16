+++
weight = 6
title = "Archetypes"
subtitle = "Axiom includes helpful Archetype generators to quickly create new content."
tags = ["archetypes"]
categories = ["docs"]
+++

Axiom includes helpful Archetype generators to quickly create new content.

Axiom's Permalink setting is to use the `filename` as the URL, and the Archetype will also use this for the content's `Title`, name the new file with this in mind.

__New Post__: Create a new entry in the "Posts" section.

```shell
hugo new posts/new-post-title.md
```

__New Page__: Create a new static page.

```shell
hugo new about.md
```

The Archetype generators don't include all of the _Frontmatter_ options. Refer to the [Frontmatter]({{< relref "frontmatter" >}}) section for more details.
