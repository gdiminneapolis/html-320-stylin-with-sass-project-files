# Finding Objects and Components

Going though the overrides file, extract out the style information for
the various page objects and components.

To differentiate between objects and components, consider that objects
are generally composed of components, but components may appear in
many objects. Objects are typically the big-ticket items on your page,
including things like your template, grids, etc.

For small sites, such as this one, it's perfectly fine to put all the
objects in the `sass/_objects.scss` file, and all the components in
the `sass/_components.scss` file.

However, when you're projects get larger, it's often better to keep
the objects and components in their own files. Create an `objects`
subfolder and put each object in it's own file:
`sass/objects/_site-header.scss` for example.

Objects and components are typically named classes. Sometimes,
however, elements have been used as page objects and components.
You should convert these to proper classes.

In the `index.html` file, several page objects have been given IDs. 
It's fine to leave the ID as it is, but add a class to make it an object.
Then move the corresponding id selector in the overrides file and make it
a class in the corresponding objects subdirectory.

Example:

``` html
    <div id="main">
      <section id="famous">
```

The first `<div>` element should be renamed to `<main>` (don't forget the closing tag, too),
and the get the attribute `role="main"`, and a class of `main`.

The `<section>` element should get a class of `famous`.

It should look like this when you're done:

``` html
    <main id="main" class="main" role="main">
      <section id="famouse" class="famous">
```

If you haven't, create a directory `sass/objects/_main.scss` and `sass/objects/_famous.scss`.

Cut the selectors for `#main` from the overrides file and move them to the `sass/objects/_main.scss` file,
and change the selectors from `#main` to `.main`. Do likewise for `#famous`.

Make sure you import the `main` and `famous` files in the objects file, like so:

``` scss
@import "main";
@import "famous";
```


