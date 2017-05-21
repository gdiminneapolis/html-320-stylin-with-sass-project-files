# Using a single CSS file

Using the Sass `@import` feature, combine the `reset.scss` file in
with the `styles.scss` file.

1. convert `reset.scss` into a partial
2. edit `styles.scss` and import the reset partial at the beginning of
   the file.
3. Change `index.html` to remove the `reset.css` stylesheet link.
