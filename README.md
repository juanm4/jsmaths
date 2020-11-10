<img src="jsmaths.png" alt="jsMaths" height=200 />

**jsMaths** is an extended math library written in Typescript, for JavaScript and Node.js. I miss statistics operations in the native maths library, so this package offers to you a simple and elegant way to work with statistics functions. Powerful and easy to use.

## Features

- Supports mean, median, mode, percentile and range.
- Is compatible with JavaScript's built-in Math library.
- Written in Typescript
- Runs on any JavaScript engine.
- Is easily extensible.
- Open source.

## Usage

jsMaths can be used in both node.js and in the browser.

Install jsMatsh using [npm](https://www.npmjs.com/package/mathjs):

    npm install jsmaths

### Percentile
A **percentile** (or a **centile**) is a measure used in statistics indicating the value below which a given percentage of observations in a group of observations falls.
You can calculate the percentile of an array of numbers.

```js
import { percentile } from 'jsmaths';

// Percentile 30th from an array of numbers
const percentile = percentile([35, 20, 15, 50, 40], 30) // 20 is the 30th percentile
```

**Exceptions**
The percentile function return an exception when:
- Array is empty
- Percentile is less than 0 or greater than 100

### Median
A **median** is a value separating the higher half from the lower half of a data sample, a population or a probability distribution. For a data set, it may be thought of as "the middle" value.
You can execute the median function passing an array of numbers. The median can be one or two numbers, so the function return an array with one or two numbers, depending on the source array.

```js
import { median } from 'jsmaths';

// Median from an array of numbers
const medianOne = median([35, 20, 15, 50, 40]) // [35] is the median
const medianTwo = median([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]) // [8, 10] are the median
```
**Exceptions**
The median function return an exception when:
- Array is empty

### Mean (Average)
For a data set, the **arithmetic mean**, also called the expected value or **average**, is the central value of a discrete set of numbers: specifically, the sum of the values divided by the number of values.
You can execute the mean function passing an array of numbers. It returns a number indicates the mean.

```js
import { mean } from 'jsmaths';

// Mean from an array of numbers
const meanOne = mean([35, 20, 15, 50, 40]) // 32 is the mean
const meanTwo = mean([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]) // 10.6 is the mean
```
**Exceptions**
The mean function return an exception when:
- Array is empty

### Mode
The mode is the value that appears most often in a set of data values. In other words, it is the value that is most likely to be sampled. When none of the values are repeated, it is said that there is no mode.
You can calculate the mode of an array using the mode function. It returns and array with modes, or an empty array if there is no mode.

```js
import { mode } from 'jsmaths';

// Mean from an array of numbers
const modeOne = mode([35, 20, 15, 50, 40]) // [] empty array, no mode exists
const modeTwo = mode([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]) // [8] is the mode
const modeThree = mode([3, 6, 7, 8, 8, 9, 9, 10, 10, 13, 15, 16, 20]) // [8, 9, 10] are the modes
```

### Range
The range of a set of data is the difference between the largest and smallest values.
You can calculate a range of an array using the range function. It returns an array with two number.
The 0 index is the smallest value. The 1 index is the largest value.

```js
import { range } from 'jsmaths';

// Mean from an array of numbers
const rangeOne = range([35, 20, 15, 50, 40]) // [15, 20] 15 is the smallest and 20 is the largest
const rangeTwo = range([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]) // [3, 20]
const rangeThree = range([3]) // [3, 3] are the modes
```
**Exceptions**
The median function return an exception when:
- Array is empty

## Browser support
jsMaths works on any ES5 compatible JavaScript engine: node.js, Chrome, Firefox, Safari, Edge, and IE11.

## Test

To execute tests for the library, install the project dependencies once:

    npm install

Then, the tests can be executed:

    npm test

To test code coverage of the tests:

    npm run coverage


## License

Copyright (C) 2020-2021 Juanma Molina <juanm4@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
