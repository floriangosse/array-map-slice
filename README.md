# array-map-slice [![Build Status](https://travis-ci.com/floriangosse/array-map-slice.svg?branch=master)](https://travis-ci.com/floriangosse/array-map-slice) [![Greenkeeper badge](https://badges.greenkeeper.io/floriangosse/array-map-slice.svg)](https://greenkeeper.io/)

> Allows to map a slice of the array for each item in the array.


## Usage

```js
const mapSlice = require('array-map-slice');

mapSlice([ 1, 2, 3 ], (slice, index, array) => {
    return slice.join('-');
});
// => [ '1', '1-2', '1-2-3' ]
```

Or if you want to create slices from the right use `mapSliceRight`:
```js
const mapSlice = require('array-map-slice');

mapSlice.mapSliceRight([ 1, 2, 3 ], (slice, index, array) => {
    return slice.join('-');
});
// => [ '1-2-3', '2-3', '3' ]
```


## Installation

```sh
npm install array-map-slice
```


## API

### mapSlice(input, mapper) / mapSliceRight(input, mapper)

Returns a new array with values returned by the mapper function.

#### input

Type: `Array`

Iterated over in the `mapper` function which gets splices of it.

#### mapper (slice, index, array)

Type: `Function`

Executed for every slice and expected to return the new value.


## License

MIT © Florian Goße