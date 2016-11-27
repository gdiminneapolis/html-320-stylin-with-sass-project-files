# Exercise 7: Famous Person Card

In scanning over the page, the most obviously repeated object
is probably the cards that show the famous women.

Each of the cards has been given the element of `<article>` which seems to
be appropriate. The definition in the w3c for the `<article>` element is:

> The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

If we look where the `woman` article is defined, however, we see another hodge-podge 
of things.

* `#famous article.women` defines some aspects of the style and behaviour
* `#famous h2` is defining a bare element that is only used in this class,
  while `h2` is defined in `_elements` as well affecting this article.
* `#famouse article` and it's `hover` variant create new behaviour, 
  regardless of the `.women` class.
* and so on.

The exercise is to create a single, reusable object for the `.woman-card` class
(note also the change from plural to singular) as each article describes
one woman, and the addition of `-card` to clearly define what this block is.

Each `.woman-card` block contains various elements, and some modifiers.

Remember that blocks and elements define *what* and modifiers define
style and behaviour.

*hint:* that swing thing is a behaviour.

Remember also the rule that our CSS selectors are *only* classes, no id's or elements allowed.

