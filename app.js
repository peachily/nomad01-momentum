/* [2.2 ~ 2.3] Variables, const and let */

const a = 5;
const b = 2;
let myName = "peach";
// 기본적으로 const(constant: 상수)를 쓰고, variable을 업데이트할 일이 있을 경우에는 let
// -> let을 보면 이후에 업데이트 할 것을 미리 눈치챌 수 있음

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);
// JS 는 코드를 순서대로 읽기 때문에 여기서는 peach

myName = "peachily";
// let이나 const는 생성할 때 필요한 부분. 여기서는 만들어둔 variable의 값을 업데이트만 하면 됨
// -> const로 만들었을 경우 이렇게 업데이트를 하면 에러가 남

console.log("your new name is " + myName);
// 여기서는 peachily

/*=======================================================================================*/
/* [2.4] Booleans */

const amIFat = true;
// Boolean 데이터타입은 true와 false 두 가지 값(Boolean literal)을 가짐
console.log(amIFat);

const something = null;
// null 타입: 값이 없다는 것을 명시적으로 알려주기 위한 의도적인 '값'
let another;
//  undefined 타입: 그냥 '값이 없는 상태'

console.log(something, another);
// 'null undefined' 로 표시됨

/*=======================================================================================*/
/* [2.5] Arrays */

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[4]);
// 0부터 세서 fri 출력

daysOfWeek.push("sun");
// array 뒤에 값 추가
console.log(daysOfWeek);
