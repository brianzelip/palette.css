# palette css

## higher order css categories

- white space
  - margin, padding
- typography
  - font family
  - heading
- layout
  - position
  - display
  - flex
    - flex
    - flex-column
    - flex-wrap
  - grid
- lengths
  - widths
  - heights
  - line heights
  - ?
- color
- chrome (maybe?)
  - border
  - bg-color
- elements/reset
  - a
  - img
  - svg
  - html, body
  - inputs
  - ?
- media queries

## What this library should do and be

- installable via npm
- configurable per project, via js
- provide default base set of finite css styles
- provide optional default set of variable value css styles (theme-like)
- provide optional configd set of variable value css styles (theme-like)

This lib should site underneath the project needs, ie: import order should be:

```css
@import 'palette.css';
@import './project.css';
```

## User scenarios

- can end up with a build with an actual css file that is linked in some html

- can end up with css injected into the `<head>` or a `<style>`

### Basic use case

- Start a new project
- npm i palette.css
- s

---

FUCK IT! I'm just going to go with porting Basscss@7.1.1 into palette.css, and use palette.css just like how I've been using Basscss for a while.

This will start the ball rolling with figuring out how I want to change and enhance the project.

**The rull for this first stage of basscss forking**: EACH CSS FILE SHOULD CONTAIN ALL THE VAR DEFINITIONS FOR ALL OF THE VARIABLES REFERENCED WITHIN

**EXCEPTION TO ABOVE RULE**: When you find obvious duplicates like color and shading, etc., create a var file in src/vars/!
