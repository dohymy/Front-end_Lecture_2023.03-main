// 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?

let totalSeconds = 0;
for (let hour = 0; hour<24; hour++){
    for (let minute = 0; minute<60; minute++){
        let display = hour + ':' + minute;
        if (display.indexOf('3')>= 0)
            totalSeconds += 60;
    }
}
console.log(totalSeconds);
console.log('pineapple'.lastIndexOf('p'));

// 1~1000까지 숫자가 있다.
// 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되는가
/*
let numStr = '';
for (i=1; i<=1000; i++)
    numStr += i; // 123456789....9991000
console.log(numStr.length);
for (let num=0; num<=9; num++){
    let count = numStr.split(String(num)).length - 1;
    console.log(`${num}은/는 ${count}번 사용됨.`);
}
*/
// count를 사용한 방법
function strCount(str, dst){ // str에서 dst가 몇 번 사용되는가(데이터, 찾을 값)
    return str.split(dst).length - 1 ;
}

let numStr = '';
for (i=1; i<=1000; i++)
    numStr += i; // 123456789....9991000
console.log(numStr.length);
for (let num=0; num<=9; num++){
    let count = numStr.split(String(num)).length - 1;
    console.log(`${num}은/는 ${count}번 사용됨.`);
}


// isPalindrome 함수 만들기
function isPalindrome(str){
    let reverseStr = '';
    for (let i = str.length-1; i>=0; i--)
        reverseStr += str[i];
    return str == reverseStr;
}
console.log(isPalindrome(`우영우`));
console.log(isPalindrome(`아닌데`));

// C:\\program Files\\nodejs\\node.exe 에서 파일명만 출력하세요.
const path = 'C:\\program Files\\nodejs\\node.exe';
let index = path.lastIndexOf('\\');
let filename = path.substring(index+1);
console.log(filename);

let pathArray = path.split('\\');
console.log(pathArray[pathArray.length-1]);