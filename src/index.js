exports.min = function min(array) {
    if (!array || array.length === 0) return 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) {
            array[0] = array[i];
        }
    }
    return array[0];
};

exports.max = function max(array) {
    if (!array || array.length === 0) return 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[0]) {
            array[0] = array[i];
        }
    }
    return array[0];
};

exports.avg = function avg(array) {
    let res = 0;

    if (!array || array.length === 0) return 0;

    for (let i = 0; i < array.length; i++) {
        res += array[i];
    }
    return res / array.length;
};
