# Exercise 6, Nesting and Refactoring

Sass allows us to use nesting to organize and control the descent of our classes.

In this exercise, use nesting for the already created page header and footer.

## Refactoring

We've seen some repetition in the page header and footer. By refactoring some of these
elements out into tools, we can use mixins and extending to clean up our design.

### Clearfix

This is an obvious refactoring. The clearfix is a common term for dealing with
an element that contains floated items. We want to clear the floats, so our containing
element does not leave things scattered for the the start of the next element.

In both the page header and footer, we see this construction:

```scss
.page-header:after {
  /* clearfix hack */
  content: "";
  display: table;
  clear: both;
}
```

Let's take this and turn it into a reusable tool.

Cut the above out of both the page header and footer.

Paste one of them into the `sass/_tools.scss` file. (You can also create a partial explicitly for clearfix, such as `sass/_tools.clearfix.scss` if you want.
This is another way of organizing your sass files.)

In this case, we're going to create an extension. We could make it a mixin, too, but
this will allow us to *also* use it as a class.

```scss
.clearfix, .cf {
    &:before, &:after {
        content: '';
        display: table;
    }
    &:after {
        clear: both;
    }
}
```

Now go back to the page header file, and modify it:

```scss
.site-header {
    @extend .clearfix;
    
    // ... rest as is
}
```

Do the same for page footer.

There is another use of clearfix; see if you can find it and use the above tool again.

