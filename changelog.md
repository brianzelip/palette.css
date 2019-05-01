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
