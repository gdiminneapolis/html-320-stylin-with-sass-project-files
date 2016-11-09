# Finding Objects and Components

Going though the overrides file, extract out the style information for
the various page objects and components.

Hint: objects and components are typically named classes. Sometimes,
however, elements have been used as page objects. You should convert
these to proper classes.

To differentiate between objects and components, consider that objects
are generally composed of components, but components may appear in
many objects.

For small sites, such as this one, it's perfectly fine to put all the
objects in the `sass/_objects.scss` file, and all the components in
the `sass/_components.scss` file.

However, when you're projects get larger, it's often better to keep
the objects and components in their own files. Create an `objects`
subfolder and put each object in it's own file:
`sass/objects/_site-header.scss` for example.
