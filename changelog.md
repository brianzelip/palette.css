# Changelog

## 1. renew project!

- starting point: v0.0.1 via palette.css.git
- ending point: v0.0.2 via palette.css.git as parent to palette-css.git

I walked away from this project for over a year. Recently I started back into it, but under a separete repo named palette-css because I wanted to start with a fresh slate. Once I felt confident I would continue with the project, I wanted to combine the two git histories in order to create One True Repo.

[This !SO answer](https://stackoverflow.com/a/55914186/2145103) provided the git workflow solution (using `rebase` instead of `replace --graft` and `filter-branch`)!

The answer copied below:

```bash
git remote add b https://github.com/your-username/your-b-repo.git
git fetch b
git checkout -b b-master b/master
git rebase master
# fix conflicts if any
git checkout master
git merge b-master
git branch -d b-master
```

> Explanation
>
> 1. Add your secondary remote repository called b to the local primary repository
> 2. Fetch everything from it
> 3. Create a new local branch that matches the b/master called b-master and checkout to it
> 4. Place everything you did in the B repository after everything you did in the A repository using the rebase command
>
> - Fix the conflits during the rebase
>
> 5. Checkout your master branch (on A)
> 6. merge the master branch (A) to the b-master branch (B)
> 7. Delete the now useless b-master branch

palette-css.git had the basic steps taken:

1. Manually fork Basscss@7.1.1 by copying over the main styles and variables from each of its modules

Not all of the above forking is complete. However, while in mid-fork, I merged the two repos, and then cleaned up the old files that I don't need hanging around the project. The next branch will be about continuing to port basscss@7.1.1 into the project.

## 2. Basscss addons

- starting point: v0.0.2
- ending point: v0.1.0
- steps:
  - copy over remaining basscss modules via [addons](https://github.com/basscss/addons):
    - background-images.css
    - forms.css
    - highlight.css
    - highlight-dark.css
    - input-range.css
    - input-range.css
    - flexbox.css (via addons/legacy/flex-object)
    - responsive margins added to margin.css (from addons/modules/responsive-margins, NOT from addons/modules/legacy/responsive-white-space)
    - responsive paddings added to padding.css (from addons/modules/responsive-paddings, NOT from addons/modules/legacy/responsive-white-space)
    - responsive headings added to headings.css
    - media-object - I'm deciding to NOT use this higher order flexbox module since i NEVER use it
    - responsive-layout, added to layout.css
    - responsive-typography, added to typography.css - ALL OF THE BASE TYPOGRAPHY STYLES ARE NOT INCLUDED IN THE RESPONSIVE MEDIA QUERIES

## 3. Fix import bug

- starting point: v0.1.0
- ending point: v0.1.1
- steps:
  - remove the importing of a basscss module that I forgot to delete earlier
  - patch v bump for npm

## 4. Fix import path

- starting point: v0.1.1
- ending point: v0.1.2
- steps:
  - add 's' to var file name in import of base-forms.css
  - patch v bump

## 5. Order src imports

- starting point: v0.1.2
- ending point: v0.1.3
- branch: better-ordered-imports
- steps:
  - rename headings.css as type-scale.css, because the properties are not headings, but rather font-size, so it makes more sense to name it as such
  - reorder the imports in palette.css like basscss:

```css
/* basscss/src/basscss.css */
@import 'basscss-base-reset';
@import 'basscss-base-forms';
@import 'basscss-base-tables';
@import 'basscss-base-typography';
@import 'basscss-color-base';
@import 'basscss-color-forms';
@import 'basscss-color-tables';

@import 'basscss-btn';
@import 'basscss-btn-primary';
@import 'basscss-btn-outline';

@import 'basscss-type-scale';
@import 'basscss-typography';
@import 'basscss-layout';
@import 'basscss-align';
@import 'basscss-margin';
@import 'basscss-padding';
@import 'basscss-position';
@import 'basscss-responsive-states';
@import 'basscss-grid';
@import 'flex-object';
@import 'basscss-border';

@import 'basscss-colors';
@import 'basscss-background-colors';

@import 'basscss-defaults';
```

## 6. Update README for public consumption

- starting point: v0.1.3
- ending point: v0.2.0
- branch: master
- steps:
  - move readme text to notes.md
  - update readme to explain a bit about the project to the public

## 6. Add postcss output file to module so projects that depened on palette.css don't have to also have to depend on postcss and plugins

- starting point: v0.2.0
- ending point: v0.3.0
- branch: postcss-build

Reasoning behind this work

My first real attempt at using this package was in my homepage. **It didn't work!** I realized the reason is because parcel does **not** take care of installing the necessary postcss plugins like custom-media, etc. The proof was that custom media query variables were still found in the parcel built css file (dist/\*.css). The basscss file I was importing in that project was not src/basscss.css (which had all the imports of files which contained postcss features like custom media variables), but rather css/basscss.css (which is the postcss generated output of src/basscss.css). While I like not keeping generated files around in a repo, I prefer the user-centric approach where, the library package itself bears the brunt of the build dependencies, and provides the built file to users (along with the source files too).

My approach will differ slightly from basscss, in that the directory structure will have `src/` and `dist/`, and the main property in package.json will point to `dist/palette.css`.

- steps:
  - move palette.css in current root dir to src
  - move all current style modules to src/components/
  - add all necessary postcss plugins and build scripts
    - install plugins
    - create postcss.config.js
    - create build script
      - see [this postcss-custom-properties issue](https://github.com/postcss/postcss-custom-properties/issues/177) I raised that helped me get my postcss workflow working
      - create build scripts for unminified and minified versions
        - the main diff between the two is [normalizeWhitespace](https://cssnano.co/optimisations/normalizewhitespace)
        - other normal cssnano optimizations that are disabled are `mergeLonghand` and `mergeRules`, so that all rules are completely functionaly similar to their sources

## 7. Remove `main` field in package.json to fix bug when installing palette.css

- starting point: v0.3.0
- ending point: v0.3.1
- branch: remove-package-main

I got a postcss error after installing v0.3.0 in zelip.me. I thought the problem might be [`browser` vs `main` fields](https://parceljs.org/module_resolution.html#package.json-%60browser%60-field). But no - the same problem existed when using [`browser` field](https://docs.npmjs.com/files/package.json#browser). Basscss v7.1.1 did not have a `main` or `browser` field. I think this is the key.

- steps:
  - remove the `main` field entirely from package.json
