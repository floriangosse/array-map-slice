const test = require('ava');

const { mapSlice, mapSliceRight } = require('./');

const identity = (v) => v;

test('mapSlice', (t) => {
    const array = [ 1, 2, 3 ];

    const expected = [
        [ 1 ],
        [ 1, 2 ],
        [ 1, 2, 3 ]
    ];
    const actual = mapSlice(array, identity);

    t.deepEqual(actual, expected);
});

test('mapSliceRight', (t) => {
    const array = [ 1, 2, 3 ];

    const expected = [
        [ 1, 2, 3 ],
        [ 2, 3 ],
        [ 3 ]
    ];
    const actual = mapSliceRight(array, identity);

    t.deepEqual(actual, expected);
});
