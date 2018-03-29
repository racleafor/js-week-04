/*
 * Start with index.md! Then, continue here.
 *
 * Now that the extensions are installed and
 * your settings are changed, the follow these
 * steps for this weeks exercise:
 *
 * 1. Take a look at the code in this file.
 *    The code here is simply some pasted
 *    functions from previous weeks, but
 *    with some extra weird formatting. Once
 *    you are familiar with the way it looks
 *    currently, proceed with step 2.
 * 2. Now, insert an extra blank line somewhere
 *    in the file, and then save it. Because
 *    you set "editor.formatOnSave" to true,
 *    you should see the file change quite a
 *    bit! Now, see if you can identify what
 *    changed. (Use undo and redo to check
 *    see, too)
 * 3. After formatting, what's left are the
 *    ESLint errors and warnings. Now, your
 *    mission is to clear all the ESLint
 *    issues. Hovering over each squiggly
 *    underlined spot will give you info
 *    about the rule the code is breaking.
 *    See if you can figure out how to
 *    clear the issues. Once the file is
 *    clear, commit and push your changes!
 */

const fortyTwo = () => 42

const helloWorld = () => 'Hello World'

const twoTrue = () => 2

const trueNotTwo = () => 2 !== 3

const twoPlusTwo = () => 2 + 2 === 5

const ohYeahDecimals = () => 1.0 + 1.0 + 1.0 === 4

const ohNoDecimals = () => {
  return 0.1 + 0.1 + 0.1 === 0.3
}

const waxingParenthetical = () => 2 * 5 + 1 === 12

const add = (numOne, numTwo) => numOne + numTwo

const closure = () => (x => y => z => x + y + z)(1, 2, 3)

const commaFTW = () =>  1 + 2 + 4

module.exports = {
  fortyTwo,
  helloWorld,
  twoTrue,
  trueNotTwo,
  twoPlusTwo,
  ohYeahDecimals,
  ohNoDecimals,
  waxingParenthetical,
  add,
  closure,
  commaFTW
}
