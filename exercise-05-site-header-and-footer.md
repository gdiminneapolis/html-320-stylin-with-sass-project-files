# Site Header and Footer

For this exercise, we're going to create our first objects: the page header and footer.

These would be considered objects because they are part of what would be page template.
In a multi-page site, you might have site header and footer instead that is reused on 
every page.

Create a subdirectory under `sass/` called `objects` and then create two files:

* `sass/objects/_page-header.scss`
* `sass/objects/_page-footer.scss`

Move the following element definitions to the appropriate new files:

* `header` to `sass/objects/_page-header.scss`
* `footer` to `sass/objects/_page-footer.scss`

Move the `nav` element definitions and copy them into each of the two files (we'll be reducing redundancy in a bit).

Modify the `index.html` file, adding classes to the header and footer.

```html
    <header class="page-header">
      <h1 class="page-header__title"><span class="page-header--audiowide">Women in Computing</span></h1>
      <nav class="page-header__nav">
        <ul class="page-header__list">
          <li class="page-header__list-item">
            <a class="page-header__list_link" href="#famous">Famous Women</a>
          </li>
          <li class="page-header__list-item">
            <a class="page-header__list-link" href="#organizations">Organizations</a>
          </li>
          <li class="page-header__list_item">
            <a class="page-header__list_link" href="#facts">Fun Facts</a>
          </li>
        </ul>
      </nav>
    </header>
```

```html
    <footer class="page-footer">
      <nav class="page-footer__nav">
        <ul class="page-footer__list">
          <li class="page-footer__list-item">
            <a class="page-footer__list-link" href="#famous">Famous Women</a>
          </li>
          <li class="page-footer__list-item">
            <a class="page-footer__list-link" href="#organizations">Organizations</a>
          </li>
          <li class="page-footer__list-item">
            <a class="page-footer__list-link" href="#facts">Fun Facts</a>
          </li>
        </ul>
      </nav>
    </footer>

```

Refactor the header with navigation elements into the above classes.

Make sure to import the two files into `sass/_objects.scss`.

## Addendum

I went ahead and changes the `<div id="main">` to `<main role="main">` to make it follow
HTML5 presentation and ARIA rules. Along with this I extracted the `#main` styles into the
`_elements.scss` file, and removed the leading `#` from them. 
