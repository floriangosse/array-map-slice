const mapSlice = require('./');

const identity = (v) => v;

test('mapSlice', () => {
    const array = [ 1, 2, 3 ];

    const expected = [
        [ 1 ],
        [ 1, 2 ],
        [ 1, 2, 3 ]
    ];
    const actual = mapSlice(array, identity);

    expect(actual).toEqual(expected);
});

test('mapSlice.reverse', () => {
    const array = [ 1, 2, 3 ];

    const expected = [
        [ 1, 2, 3 ],
        [ 2, 3 ],
        [ 3 ]
    ];
    const actual = mapSlice.reverse(array, identity);

    expect(actual).toEqual(expected);
});
