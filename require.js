function require(arr) {
    // var arr = [1, 2, 3, 4, 5];
    console.log(arr);
}
require([1, 2, 3, 4, 5])

function define(string) {
    return {
        require: function(string) {
            var str = 'string';
            console.log(string);
        }
    }

}
define(['string'])