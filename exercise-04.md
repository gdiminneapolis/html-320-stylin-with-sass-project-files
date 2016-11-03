# Move the reset to the elements file

Move the line where you import the reset file from
`sass/_overrides.scss` to the `sass/_elements.scss` file.

# Variables and Settings

Extract and replace constants from the overrides file and turn them
into variables in the settings file.

## Tips:

Look for things like colours, repeated values, font declarations.

Give variables useful and memorable names. `$lightGrey` is less useful
than `$brandBackground`, for example. Variable names should imply how
they are used.
