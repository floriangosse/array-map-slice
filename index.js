
function mapSlice (array, map) {
    return array.map((_, index, array) => {
        const slice = array.slice(0, index + 1);

        return map(slice, index, array);
    });
}

function mapSliceReverse (array, map) {
    return array.map((_, index, array) => {
        const slice = array.slice(index, array.length);

        return map(slice, index, array);
    });
}

mapSlice.mapSlice = mapSlice;
mapSlice.reverse = mapSliceReverse;

module.exports = mapSlice;
