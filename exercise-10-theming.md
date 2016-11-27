# Exercise 10: Theming

Components are where the majority of theming will go on.
We'll be refactoring a bit more to make these theme components
as well, since they tend to fall into the Modifier category.

We're first going to extract the current theme of the page, 
and call that our "light" theme. Then we'll change a few 
variables in order to get a nice "dark" theme.

As we want to easily swap the dark and light themes, we're going
to create two root themes.

Create two files:

1. `sass/_light.scss` (**with** underscore)
2. `sass/dark.scss` (**without** underscore)

Import the `_light` file into your `_settings` file.

Search through the various scss files looking for `color`, `background-color`, 
and `gradient` settings. 

When you encounter a color, copy the value, and substitute in a
meaningful variable name for it, then put the variable name and its
value in the `light` theme file.

When you've collected them all, start to look at the `light` colors and
start to pull them together into some sort of scheme.

Some suggestions for variables include:

- `$baseTextColor`
- `$contrastTextColor`
- `$linkColor`
- `$linkHoverColor`
- `$linkBackgroundColor`
- `$linkHoverBackgroundColor`
- `$primaryColor`
- `$scondaryColor`
- `$accentColor`

You don't have to use `camelCase` for variables names;
`snake_case`, `dash-case`, or even `SCREAMING_SNAKE_CASE` can be used.

You might want to try some of the [147 color names](http://www.colors.commutercreative.com/grid/)
instead of the current hex or rgb colours.

Also look at things like the gradient(s) and use the `darken()` or `lighten()`
methods.

Since the `light` theme is our default, give all the variables a `!default` option.

```scss
$baseTextColor: #000 !default;
```

## Create a dark theme

Copy over the variables in the `light` theme to the `dark` theme, and
comment them all out.

Looking at the `light` colours, try to come up with a good set that will
make the site have a dark theme, just by changing the variable values.

For each variable you change, put it below the light variable line (that is commented out).
This makes it clear what's changing, and makes it nicer than switching back
and forth.

You might find that some variables won't change.

## Create Modifiers for Color Components

Extract the color settings in the various elements, objects, and components,
and turn them into a set of theming components. Create a file
`sass/components/_theme.scss` and put the Modifiers in it.

For example, `body` in `_elements` would become:

```scss
body {
  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2em;
  margin: 0px auto;
  width: 100%;
}
```

A new modifier in `_theme` would be:

```scss
.page-body--base-color {
  color: $baseTextColor;
  background-color: $baseBackgroundColor;
}
```

and add the modifer to the html:

```html
<body class="page-body--base-color"
```

And assuming `_light` contains:

```scss
$baseTextColor: #000 !default;
$baseBackgroundColor: rgb(261, 261, 261);
```

In your `dark` theme, you may want to change to:

```scss
$baseTextColor: rgb(261, 261, 261);
$baseBackgroundColor: #000;
```

(Just swap them.)

It's best to start with the generic and move to the explicit in redefining
a theme.

## Extra credit: fonts

Fonts are often something else that can be themed, although it's a bit
less often seen. You can perform the same survey through the existing scss files
and pull out the font families, sizes, weights, and so on. Don't bother when
sizes are listed in percentages, *em*s, or *rem*s, since those are all relative
sizes. Stick to absolute sizes such as *px*, *pt*, and the like.

Convert the webfont load from `index.html` to an import in `light`.

Create font-stack variables that are appropriate to use
for each font, things like `$baseFontStack`, `$headingFontStack` and the like.

