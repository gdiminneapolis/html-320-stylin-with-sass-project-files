# Project files for HTML302 - Stylin' With Sass

The project files are broken into 2 parts. `class1-exercises` cover
the first 2 hours, and `class2-exercises` the second 2 hours.

In each folder, there is a `practice` folder with you will use to work
on learning Sass. The folders under `completed` show the solutions to
various steps along the way, and are there for your reference. Do work
the exercises on your own, without copy and pasting from the
solutions, as you won't learn anything if you do that.

## Downloading the project files

The easiest way is to download the ZIP file at
[project-files.zip](https://github.com/tamouse/html-320-stylin-with-sass-project-files/archive/master.zip)
into a directory of your choice.

## Unpacking and setting up

Open up the command line and change directories to the place you
downloaded the ZIP file, and unzip it.

``` bash
cd ~/GDIClasses/
unzip html-320-stylin-with-sass-project-files-master.zip
```

Rename that long unweidly folder that just got created.

``` bash
mv html-320-stylin-with-sass-project-files-master sass-class
```

## Working directory

Change into the working directory for each class exercise set and
initialize the project.

``` bash
cd sass-class/class2-exercises/practice
git init
git add --all -v
git commit -m "Initial Commit"
git checkout -b dev
cd ../../class1-exercises/practice
git init
git add --all -v
git commit -m "Initial Commit"
git checkout -b dev
```

You can create Github repos for this if you wish, but it's not
necessary.

## Remember to open the **project folder**

Don't open individual files with either Atom or Sublime Text, or you
might easily get confused.

You can even start Atom right from the command line:

``` bash
atom .
```

# Special Added Bonus!

In the root of the project files folder are two PDFs:

* [Sass Cheat Sheet](sass-cheat-sheet.pdf)
* [Unix Commands Cheat Sheet](unix-commands-cheat-sheet.pdf)

Keep them handy!
