# Structuring your Sass

## Inverted Triangle

* Most generic to most specific (going down)

```

______________
\            /   settings
 \          /    tools
  \        /     general
   \      /      elements
    \    /       objects
     \  /        components
      \/         overrides


```

Create the following files in the `sass` folder:

- `_settings.scss`
- `_tools.scss`
- `_general.scss`
- `_elements.scss`
- `_objects.scss`
- `_components.scss`

Rename `sass/styles.scss` to `sass/_overrides.scss`

Create a new `sass/styles.scss` with the following:

```scss
@import "settings";
@import "tools";
@import "general";
@import "elements";
@import "objects";
@import "components";
@import "overrides";
```
