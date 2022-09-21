[![forthebadge](http://forthebadge.com/images/badges/contains-cat-gifs.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-club-penguin.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

# CANVAS

## Setup

In dev mode, canvas css is applied either rtl or ltr. These val's can be found in `.env`.

## Find replace

Find and replace `canvas-search-replace-selector` with project name i.e. `project-name`.

`yarn`

## VSCode

- `shift cmd p recommended`
- install recommended extensions

## Commands

- `yarn dev` Dev mode
- `yarn rtl` Dev mode in Right To Left
- `yarn images` Minify images
- `yarn build` Builds /dist/index.html

## DEV

**Tasks**

- images
- nunjucks:dev
- browserSync
- scripts:dev
- styles:dev
- notification:ready
- watch:dev

## RTL

**Tasks**

- images
- nunjucks:rtl
- browserSync
- scripts:dev
- styles:dev
- notification:ready
- watch:dev

## Images

**Tasks**

- image:clean
- image:min
- notification:images

## Build

1. Generates `dist/index.html`
2. Inlines + Minify CSS into head
3. Inlines + bablefy JS into foot
4. Beatify HTML markup + removes js + css includes

Some times you have to run this 2 times.

**Tasks**

- images
- nunjucks:build
- scripts:build
- styles:build
- inline:js
- inline:css
- beautify:build

## SCSS

Create new component in `src/scss/components` and import into `components.scss`.

- `src/scss/app.scss`
- `src/scss/settings/colors.scss`
- `src/scss/settings/variables.scss`

## Nunjucks

Nunjucks handle the templating, work in pages, import partials + macros. If you need to add a new block, add it to the layout.

- Layout `src/nunjucks/templates/layout.nj`
- Partials `src/nunjucks/partials/*.nj`
- Macros `src/nunjucks/macros/*t.nj`
- Pages `src/nunjucks/pages/*layout*.nj`
