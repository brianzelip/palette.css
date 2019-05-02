just published v0.1.0, and am trying to use palette in a quick parcel built project to test it out.

the first pain point is, how to get it into the html doc? the answer seems to be that I have to make a local css file which imports from node_modules, ie:

```css
/* main.css */
@import 'palette.css';
```

It works though, beautifully! Now I need to re-order the imports to mimic basscss to ensure compatibility so that I can swap out basscss for palette.css!

Also, parcel installs cssnano on `parcel build index.html`-- that's the _only_ thing it installed; didn't install anything on `parcel index.html`.
