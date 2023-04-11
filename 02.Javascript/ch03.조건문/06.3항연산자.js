// 조건 연산자(3항 연산자)
let num = 3;
let evenOdd = (num % 2 == 0) ? '짝수' : '홀수' // 2로 나눴을때 0이면 짝수
// 단항 연산자 : -a !a
// 2항 연산자 : a+b a-b
// 3항 : (조건) ? 참일때값 : 거짓일때값
console.log(`${num}은/는 ${evenOdd}입니다.`);

let variable = 3;
variable = (typeof(variable) == 'undefined')? 0 : variable;
console.log(variable);
