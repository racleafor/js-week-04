# JS Tooling

One important part of coding with JavaScript today is _tooling_, that is,
setting up your development environment and editor to work for you and
with you, rather than a dumb text entry point ... we want our editor to
be smart!

To that end, make sure you are using **VS Code** for this week's exercises.

<-- As you may have noticed in the file Explorer, there are two new files
in place of the test directory this week -- _.eslintrc_ and _.prettierrc_

These are configuration files for **ESLint** (a linter tool that checks your
JavaScript for syntax and other errors) and **Prettier** (a formatting tool
that will autoformat your code according to some opinionated rules, a few
of which can be changed by a file like the one you see to the left).

Both files are set according to my idea of good JS formatting. 😄  Just
know that any time you see files like these in the wild, they have been
setup according to the _opinions of an individual or team._ Most teams have
an agreed-upon style guide and shared files like these.

## ESLint

Formatting is highly-opinionated, and even some linting rules are, too,
but what doesn't change across the spectrum is what makes for syntactically
valid code. And that is primarily what ESLint is meant to check. You
definitely want to know if your code is valid _before_ you try to run it,
so let's start there.

<-- In **Extensions**, search for and install a extension named ESLint (by
Dirk Baeumer). The actual library was installed when you ran the `yarn`
command, but the extension will make it useful to you within VS Code.

## Prettier

Prettier, like much of what's popular in JavaScript today, comes from Facebook.
This is entirely owing to the popularity of React. Just as JQuery was once vital
to know if you wanted a career in front end development, so today knowing React
and its ecosystem of supporting tools is essential in front end jobs. Side note:
**Jest**, a JS test runner that I have been using for our weekly exercises, is
also part of the React ecosystem.

<-- Now, search for Prettier and install the extension named "Prettier - Code
formatter" (by Esben Petersen). Again, the actual packages that enable Prettier
to its work were installed with `yarn` but this makes them useful in VS Code.

## Settings

Go ahead Reload VS Code if you haven't already. Now, you'll need to change some
settings. Open settings with the shortcut `⌘,` (command + comma) and then add
these settings to the existing User Settings object (on the right):

```json
{
  "editor.formatOnSave": true,
  "prettier.requireConfig": true,
  "prettier.eslintIntegration": true,
  "eslint.alwaysShowStatus": true
}
```

The User Settings object in VS Code must be valid JSON, so if you already have
some settings there, make sure to add a comma to the line before these settings,
and make sure all settings end up inside the curly braces, with no trailing
comma - just like the example above, within the backticks.

Save your settings, then open index.js and follow the instructions there.