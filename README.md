# Exercise 8: The Jump Component

Let's shift gears a bit and work on our first component.

Remember the definition of a component is a reusable UI stylable item.

The `.jump` class is a great one to use for this.

Move the `.jump` section *and* the `Entypo` font definition to a new file `sass/_components.jump.scss`
and import that file in `_components`.

Wrap each of the jump links in each section with a `<nav>` element, and 
give it the class of `.jump-nav`. This will be our block. Change the class
for each original jump link to the element class `.jump-nav__link` and
the behavioural classes `.jump-nav--up` and
`.jump-nave--down` as appropriate; leave the href links and inner text as is.

```html
<nav class="jump-nav">
  <a class="jump-nav__link jump-nav--up" href="...">&igrave;</a>
  <a class="jump-nav__link jump-nav--down" href="...".>&iacute;</a>
</nav>
```

Create the `.jump-nav` object in the `_components.jump.scss` file so they
match the BEM classes above.

*Hint:* the `.jump` class should become the `.jump-nav__link` and the `.up` and
`.down` classes change to the respective behavioural classes.

Make sure the `Entypo` definitions are first in the jump component file, 
before the classes. We are putting this together because the only place
the Entypo font is used is in the jump component.

