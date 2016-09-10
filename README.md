# Parker Number-Word Sequencer
Generates sequences based on the length of words when spelled out. Inspired by [this video](https://youtu.be/LYKn0yUTIU4) by Matt Parker.

## Sequence Explanation
An example sequence might be:
**20** (twenty, 6 letters) -> **6** (six, 3 letters) -> **3** (three, 5 letters) -> **5** (five, 4 letters) -> **4** (four, 4 letters)

The next number in the sequence is the number of letters in the name of the previous one (excluding punctuation and spaces). All number sequences in English end in an infinite loop at 4.

## Live version
See it in action and test it out at [parkernws.davecheesefish.com](http://parkernws.davecheesefish.com).

## Similar Projects
- [Primes](https://github.com/davecheesefish/Primes) - Learning exercise, making prime number calculators in various programming languages - even the pointless ones.
- [Numerousness.js](https://github.com/davecheesefish/Numerousness.js) - Converts numbers (e.g. 12) into words (e.g. twelve). Used in this project.

## Development Notes
### Build
To build this project, run the Ant script at build/build.xml. Built files will be placed in the dist directory.

### Libraries
Uses my number-to-word library [Numerousness.js](https://github.com/davecheesefish/Numerousness.js), and jQuery.
