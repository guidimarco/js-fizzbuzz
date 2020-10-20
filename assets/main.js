
// <1-fold START --- FIZZ-BUZZ ALGORITHM VERSION 1.0
// // FROM 1 TO 100
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 && i % 5) {
//         // NOT MULTIPLE
//         console.log(i);
//     } else {
//         // MULTIPLE
//         if (!(i % 3) && !(i % 5)) {
//             console.log("FizzBuzz");
//         } else if (!(i % 3)) {
//             console.log("Fizz");
//         } else {
//             console.log("Buzz");
//         }
//     }
// }
// </1-fold END

// <1-fold START --- FIZZ-BUZZ ALGORITHM VERSION 2.0 --- with stamp variable
// VAR ASSIGNMENT
// for stamp the 3-5 multiple
var stamp;

// ALGORITHM FIZZ-BUZZ
// FROM 1 TO 100
for (var i = 1; i <= 100; i++) {
    // NOT MULTIPLE DEFAULT VALUE
    stamp = i;

    // 3-MULTIPLE OR 5-MULTIPLE
    if (!(i % 3) || !(i % 5)) {
        stamp = "";

        // 3-MULTIPLE
        if (!(i % 3)) {
            stamp = stamp + "Fizz"
        }

        // 5-MULTIPLE
        if (!(i % 5)) {
            stamp = stamp + "Buzz"
        }
    }


    console.log(stamp);
}
// </1-fold END
