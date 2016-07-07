# Project files for HTML302 - Stylin' With Sass

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

## Practice Directory

Change into the `practice` directory and
initialize the project.

``` bash
cd practice
git init
echo '.sass-cache/' >> .gitignore
echo 'tmp/' >> .gitignore
git add --all -v
git commit -m "Initial Commit"
git checkout -b dev
```

You can create a Github repo for this if you wish, but it's not
necessary.

## Remember to open the **project folder**

Don't open individual files with either Atom or Sublime Text, or you
might easily get confused.

You can even start Atom right from the command line in the directory
you're currently in, which is quite the best way to do it:

``` bash
atom .
```
> '.' means the current directory

# Special Added Bonus!

In the root of the project files folder are two PDFs:

* [Sass Cheat Sheet](sass-cheat-sheet.pdf)
* [Unix Commands Cheat Sheet](unix-commands-cheat-sheet.pdf)

Keep them handy!
