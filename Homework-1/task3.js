// "use strict";

// const var1 = 1;
// const var2 = 0;
// const var3 = true;

// const result = var1 > var2
// console.log(result); //true

// const result = var1 == var3;
// console.log(result); //true

// const result = var1 === var3;
// console.log(result); //false

// const result = var1 != var3;
// console.log(result); //false

// const result = var2 === var3;
// console.log(result); //fasle

// const result = var1 > var2 == var3;
// console.log(result); //true

// const result =  var1 > var2 > var3;
// console.log(result); //false

// Ответ строке true( потому-что 1 больше 0 )
// Ответ строке true( потому-что 1 это true )
// Ответстроке false( потому-что " === " сравнивает тип данних 1 = int, true = boolean )
// Ответ cтроке false( потому-что 1 ровняеться true(1) )
// Ответ строке true( потому-что 0 не ровняеться true(1) )
// Ответ строке true( потому-что получаеться true( потому-что 1 больше 0 ), а true = true )
// Ответ строке false( потому-что получаеться true( потому-что 1 больше 0 ), а true не больше true )

/////2/////

// let val = 0;

// val = "River"
// console.log(Number.isNaN(val))
// console.log(typeof (val))

// val = "Mountain"
// console.log(Number.isNaN(val))
// console.log(typeof (val))

// val = 232
// console.log(Number.isNaN(val))
// console.log(typeof (val))

// val = true
// console.log(Number.isNaN(val))
// console.log(typeof (val))

// val = null
// console.log(Number.isNaN(val))
// console.log(typeof (val))

/////3/////

// "use strict";

// const x =0.2;
// const y =0.4;
// let result = (alfa * 10 + beta * 10) / 10;

/////4/////

// let tetra;

// tetra = '12px';
// console.log(Number.parseInt(tetra)); // 12

// tetra = '13.34em';
// console.log(Number.parseFloat(tetra)); // 12.34

/////5/////

// console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18)); // 733
// console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18)); // 2

/////6/////

// let random = (Math.random() * (19 - 3) + 3).toFixed(2);
// console.log(random);