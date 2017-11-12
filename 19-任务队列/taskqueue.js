// let promise = new Promise(function (resolve, reject) {
//     console.log('Promise');
//     setTimeout(() => console.log('timeout'), 0); // macro task
//     resolve(); // micro task
// });
//
// promise.then(function () {
//     console.log('resolved.');
// });
//
// console.log('Hi!');

// promise Hi resolved timeout
setTimeout(function () {
    console.log(4)
}, 0); // macro task
new Promise(function (resolve) {
    console.log(1); // 1
    for (var i = 0; i < 10000; i++) {
        i == 9999 && resolve() // micro task
    }
    console.log(2) // 2
}).then(function () {
    console.log(5)
});
console.log(3); // 3