# Project Files for the "Stylin with Sass" class

This repository contains the project files and exercises you'll be
using during the "Stylin with Sass" class. Read the instructions
here carefully all the way through first, then follow them.

## Requirements

### Git

This course **requires** the use of git to acquire the exercises, 
so you must have it installed. Go to [git-scm.com/downloads](https://git-scm.com/downloads)
and make sure you have the latest version for your operating
system.

As an added bonus, when you install Git on Windows, you will
get a copy of `git-bash` that you can run all the command
lines we'll be using.

### [Node.JS](https://nodejs.org/en/download/)

FIRST: check to see if you already have Node installed. Start a
command line program (`git-bash` on Windows,
Terminal.app on Mac, `xterm` on Linux).

Verify that your `node` and `npm` commands are *new* enough by running
the commands:

```bash
node -v
npm -v
```

* your `node` version is at least 6 and
* your `npm` version at least 3.

If you have older versions, or if you get errors trying to run those
programs, then head over to https://nodejs.org/en/download and follow
the instructions for getting the LTS (Long Term Support) version of
node for your computer and follow the instructions to install it.

After you've done that, run the two commands above and make sure they
meet the requirements.

### Code Editor

Make sure you have a code editor you can use to do the exericses in
class.

We recommend:

* [Atom](https://atom.io/)
* [Sublime Text](https://www.sublimetext.com/)

We can help with most problems on these two.

You can also use:

* [WebStorm](https://www.jetbrains.com/webstorm/)
* [Visual Code](https://code.visualstudio.com/)
* [Xcode](https://developer.apple.com/xcode/) (only on a Mac)

If you have a favourite editor not listed, certainly you can use it,
but we might not know how to help if you run into problems with it.

We do **not** recommend anyone use plain old `Notepad.exe` on
Windows.

### Browser

While any of the modern browsers can be used, including Chrome, Firefox,
Safari, or Edge, this class is set up to use Chrome, so make sure you
have it installed. See https://www.google.com/chrome/browser/desktop/
to make sure you have a copy of Chrome installed.

Since we'll be doing a lot of CSS-type work, you're going to want to
leave the development tools of the browser open while we work on the
site.

## Installing the Project Files

Clone the project files into a folder on your Desktop by entering
the following into the command line:

```bash
cd Desktop
git clone https://github.com/gdiminneapolis/html-320-stylin-with-sass-project-files.git sass-class
cd sass-class
npm install
```

The last command will take a little bit of time, depending on the
speed of your computer and the internet connection. Be prepared for it
to take 10 minutes, sometimes.

There will be warnings, but they shouldn't cause problems.

## Watching and Building the Project

From the command line / terminal prompt, run:

```bash
npm start
```

This will automatically launch a watcher to convert your sass files into css files and
display the updates automatically. It should launch the default browser for your computer
showing the project files, "Women in Computing".

Note: Normally, you'll just leave the watcher running while we work on
assignments. You can also stop the watcher at any time by typing
Control-C (^C, C-c) in the same terminal / command window the watcher
is running in. (On Windows, if asked "Terminate batch job (Y/N)?" type
"Y" and return. 

There may be times when the watcher stops "watching"
for some reason so you may need to do this.

## Working on the class files

Open the project **folder** in your code editor. How this is done
depends upon which editor you are using, but they can all do it. It's
important you work from the *folder* instead of using Explorer or
Finder to open individual files because it's too easy to lose track of
where the files are in your system.

See
[Opening a project in your editor](https://github.com/gdiminneapolis/gdi-starting-up/blob/master/opening-projects-in-your-editor.md)
for more information on this.

## The Class Exercises

Each of the exercises we'll be working on is a separate git branch. 
At the start of each exercise, you will
check out the branch to start working on the exercise.

The exercise branches are:

1. `exercise/01-new-sass-folder`
2. `exercise/02-single-css-file`
3. `exercise/03-itcss-structure`
4. `exercise/04-extract-elements`
5. `exercise/05-finding-objects-and-components`
6. `exercise/06-setting-and-tools`
7. `exercise/07-nesting-and-refactoring`
8. `exercise/08-theming`
9. `exercise/09-wrapping-up`

You can see the branches on the remote `origin` with the command:

```bash
git branch -r
```

There will likely be other branches listed, you can safely ignore
them. We're only interested in the exercise branches.

In each exercise branch, there is a corresponding file called
`exercise-XX-short-desc.md` (where `XX` corresponds to the exercise number,
e.g. `exercise-01-new-sass-folder.md` for excerise 1). These are the instructions for
the exercise.

## Starting the First Exercise

To check out the first exercise branch, enter the command:

```bash
git checkout -b ex.01 origin/ex.01
```

Run the `npm install` command, and then `npm start`. You can leave it
running while you work on the exercise. (As mentioned above, keep the
browser tools open on the window the `npm start` command opens up.)

Open `exercise-01.md` in your editor for the instructions for the
first exercise.

## Working on the Exercises

After we complete an exercise and discuss it, we'll be pulling down a
new branch to start all together with a clean slate for the next
exercise. You may want to save the work you did on that exercise. You
can do that easily since it's a Git repository with the first two
steps of the
[Git Dance](https://github.com/gdiminneapolis/falling-in-love-with-git/wiki/The-%22Git-Dance%22)
(Add, Commit, Push) and then prepare for the next exercise:

```bash
# Control-C to stop the watcher
git add --all --verbose # Add changes to the index
git commit -m "My work on exercise 1" # commit the changes to the local repo
# we're skipping the 3rd part of the dance, you won't push any changes
#
# Now check out the next exercise:
git checkout -b ex.02 origin/ex.02
# Restart the watcher
npm start
```

