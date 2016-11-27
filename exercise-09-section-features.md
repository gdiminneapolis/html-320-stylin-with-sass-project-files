# Exercise 9: Section Features

If we look at what's left in the `_overrides` file, there are two things
that seem to stand out:

1. `#organizations`
2. `#facts`

Notice there are a lot of things in common between these two.

Also look at `main` in `_elements`, which is doing too much for a single
element, dipping deeper in the section below it.

Also, looking at each of the sections themselves, there's further commonality
in the section title specified by the `h2` element which we want to turn into
a class.

For this exercise, do the following refactorings:

1. create a component for the sections which are features of the page
2. create a component for the fancy lists
3. create a mixin function that will give nice icons for the list bullets.
   Maybe you can use the opacity for the hearts with the gold stars, too,
   instead of changing the colour?
4. make sure to deal with the media query that turns off the images in
   the organizations section. Should the images be another component?

This exercise should complete our restructuring, and leave us with 
the right specificity defined for each part of the page.

