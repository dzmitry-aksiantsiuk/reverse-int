module.exports = function reverse (n) {
    const value = String(n).split('');
    if (value[0] === '-') {
        return Number(value.slice(1).reverse().join(""));
    } 
    if (value[value.length - 1] === "0") {
        return Number(value.slice(0, value.length - 1).reverse().join(""));
    }

    return Number(value.reverse().join(''));
}