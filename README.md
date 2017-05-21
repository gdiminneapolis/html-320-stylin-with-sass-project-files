# Exercise 01: Create Sass folder structure

Stop the watcher (Control-C) if it is running.

After checking out this branch (ex.01.start), create a new working
branch and push it to your repo:

    git checkout -b ex.01.work
    git push -u origin ex.01.work

Do this *before* you make any changes.

In this exercise, you'll create files for Sass to compile.

## Steps:

2. Move the file `css/reset.css` to `sass/reset.scss`
3. Move the file `css/styles.css` to `sass/styles.scss`

**NOTE:** the file extension changes!!

Before you restart the watcher, you need to make a couple changes to
the `package.json` file. Open the file in your editor, and find the
"scripts" section.

Change the following two line:

```javascript
    "css": "# node-sass --output css --source-map true --source-map-contents sass",
    "css:watch": "# node-sass --watch --recursive --output css --source-map true --source-map-contents sass",
```

To this:

```javascript
    "css": "node-sass --output css --source-map true --source-map-contents sass",
    "css:watch": "node-sass --watch --recursive --output css --source-map true --source-map-contents sass",
```

I.e.: Remove the '#' comment symbol from the beginning of the second
string in each line. These were commented out previously to prevent
the watch from throwing error because it had nothing to watch.

Restart the watcher (`npm start`). You should not get any errors, and
the browser should display our ladies.

If you get an error, raise your hand and a TA can help.

If you look at the ex.01.finish branch on Github, you can also see
what it's supposed to look like.

If you like what you see, you can save your changes!

    git add --all -v
    git commit -m 'my work on exercise 1'
    git push
