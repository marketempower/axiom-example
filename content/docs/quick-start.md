+++
weight = 1
layout = "docs"
title = "Quick Start"
subtitle = "Get up and running quickly with Axiom in just one step."
tags = ["quickstart"]
categories = ["docs"]
+++

To get started with Axiom, choose one of the installation options below.

> Prerequisite: Hugo must be installed locally and be available via the `hugo` command.

## Clone the Example Project

The fastest and easiest way to experience Axiom is to __clone__ the Example project (this very website). When you clone the Example project the Theme comes pre-installed and configured. When the clone completes you can run the Example project locally without any further steps:

```shell
git clone --recurse-submodules https://github.com/marketempower/axiom-example.git
cd axiom-example
hugo server
```

## Submodule to an Existing Project

If you already have an existing project, you can add the Theme as a submodule in the `themes` directory alongside any existing themes:

```shell
# cd into project root
cd example.com

# only if not already a git repository
git init

# add Axiom to the 'themes' directory
git submodule add https://github.com/marketempower/axiom.git themes/axiom
```

{{< alert "Don't forget to copy or sync the Axiom Config file!" "alert" >}}

__Alert__: When you add Axiom to an existing project, the _Config_ file (`config.toml`) needs to contain Axiom's custom parameters and sections. The recommended way to do this is to remove/backup your existing Config file and replace it with Axiom's Example project [config.toml](https://github.com/marketempower/axiom-example/blob/master/config.toml). Afterwards, you can add into Axiom's Config file options from your backup as needed.

WGET can be used to quickly bring Axiom's Example project Config file into your project:

```shell
wget https://github.com/marketempower/axiom-example/raw/master/config.toml
```

## Updating the Theme

As new versions of Axiom are released, you may consider updating your project's version to the latest release.

If you followed one of the steps above, the Theme is installed as a submodule:

```shell
# cd into project root
git submodule update --remote themes/axiom
```

Submodules have the advantage of being much easier to update and keep in sync.

## Local Development

A pre-configured [package.json](https://github.com/marketempower/axiom-example/blob/master/package.json) file is provided which contains a set of `npm scripts` you can use locally.

```shell
# install dependencies
npm install

# development build
npm run hugo:dev
# production build
npm run hugo:prd
# development build, server, and watch
npm run hugo:srv
```

Additional scripts are includes for building `CSS` and `JS` assets.

{{< alert "Axiom's Tailwind CSS is *purged* for production." "alert" >}}

See the [Extending]({{< relref "docs/extending" >}}) section of the documentation for information on developing Custom `CSS`, and `JS`.
