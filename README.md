## Requirements

* [Node.JS](https://nodejs.org/en/download/)

Install the LTS version appropriate for your OS (Windows, Mac, Linux)

## Installing

Clone the project files

```bash
cd Desktop
git clone https://github.com/gdiminneapolis/html-320-stylin-with-sass-project-files.git sass-class
cd sass-class
npm install
```

## Watching and Building the Project

From the command line / terminal prompt, run:

```bash
npm start
```

This will automatically launch a watcher to convert your sass files into css files and
display the updates automatically. It should launch the default browser for your computer
showing the project files, "Women in Computing". 

You can stop the watcher by typing Control-C (^C, C-c) in the same terminal / command window
the watcher is running in. (On Windows, if asked "Terminate batch job (Y/N)?" type "Y" and return.

## Working on the Exercises

After we complete an exercise and discuss it, we'll be pulling down a new branch to start 
all together with a clean slate for the next exercise. You may want to save the work you 
did on that exercise. You can do that easily since it's a Git repository with the first
two steps of the Git Dance and then prepare for the next exercise:

```bash
git add --all --verbose
git commit -m "My work on exercise 1"
git checkout -b exercise-02 origin/exercise-02
```

