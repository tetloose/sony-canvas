[![forthebadge](http://forthebadge.com/images/badges/contains-cat-gifs.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-club-penguin.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

# CANVAS

## Requirements

- node v16.17.0
- yarn v1.22.19

## Install

`yarn` - install dependencies

## Commands

- `yarn dev` Dev mode with live re-load
- `yarn dev --rtl rtl` Dev mode in Right To Left
- `yarn images` Minify images
- `yarn build` Builds /dist/index.html

## VSCode Recommended Plugins (optional)

- `shift cmd p recommended`
- install recommended extensions

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

## Workflow

### Search Replace

- `proj-name` with the name of the project i.e `sb` **(sound bar)**. This will ensure your css won't override Sony Styles.

### Javascript

Javascript is a single file, Canvas, can't handle import's, has to be basic... SOZ, but you still have access to es6^, the build process converts it to old js.

Write js in `src/javascript/app.js`.

The whole project is wrapped in a js class `js-proj-name`, this provides an eventListner for click, you can then target elements via class name. See lines 3 - 13.

Tracking is set up for CTA button clicks, see line 8, and line 39. Use this as a template for the tracking.


### SCSS

- Create new components in `src/scss/components` and import into `components.scss`. These are the building blocks of the project.
- Add utility classes to `src/scss/utilities` and import into `utilities.scss`.

### Layout

- Containers, row and col classes -> `src/layout/*.scss`

### Nunjucks

Handle the templating. Work in `src/nunjucks/pages/index.nj`. Include partials + macros here.

#### Macros

Handle elements see `src/nunjucks/macros/elements.nj`, in conjunction with `src/nunjucks/data/data.json`, you can pass data to each element.

**src/nunjucks/pages/index.nj**

`{{ elements.type(heading) }}`

This will pull the **type** element from the **elements macro**, you then pass the **data json** name **heading** to it.

**src/nunjucks/data/data.json**

```
{
  "heading": {
    "type": "h1",
    "class": "t1",
    "text": "Title",
    "label": "Title"
  },
}
```

This will generate an **h1** tag, with the class **h1**, the text **Title** and the Canvas label **Title**

# Seriously

- ALL THE BEST
