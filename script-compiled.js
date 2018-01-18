'use strict';

var _array, _array2;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var str1 = 'Hello',
    str2 = 'World',
    str3 = '' + str1 + str2;
console.log(str3);

var a = 5;
var mply = function mply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log(mply(a));

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var value = 0;
    args.forEach(function (arg) {
        return value += arg;
    });
    return value / args.length;
};
console.log(average(1, 3, 6, 6));

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

var array = [1, 4, 'Iwona', false, 'Nowak'];
var nameArray = (_array = array, _array2 = _slicedToArray(_array, 5), firstname = _array2[2], lastname = _array2[4], _array);
console.log(firstname, lastname);
