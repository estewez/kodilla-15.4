const str1 = 'Hello',
    str2 = 'World',
    str3 = `${str1}${str2}`
console.log(str3);

const a = 5;
const mply = (a = 1, b = 1) => a * b;
console.log(mply(a));

const average = (...args) => {
    let value = 0;
    args.forEach(arg => value += arg);
    return value / args.length;
}
console.log(average(1, 3, 6, 6));

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

const array = [1, 4, 'Iwona', false, 'Nowak'];
const nameArray = [ , , firstname, , lastname] = array;
console.log(firstname, lastname);