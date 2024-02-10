const split = (string, delimiter) => {
    if (delimiter === '') return Array.from(string);

    const res = [];
    let start = 0;
    let index = -1;

    for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + delimiter.length) === delimiter) {
            res.push(string.substring(start, i));
            start = i + delimiter.length;
        }
    }

    res.push(string.substring(start));
    return res;
};

console.log(split('The quick the fox jumps the lazy dog.', 'the'));
console.log(split('The quick the fox jumps the lazy dog.', ''));
console.log(split('The quick the fox jumps the lazy dog.', ' '));
