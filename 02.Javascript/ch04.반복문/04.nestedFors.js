// row : i, column : k 로 표기하자.

// 중첩 반복문
// 사각형 그리기
for (let i = 0; i < 5; i++){
    let square = '';
    for (let k=0; k < 5; k++){
        square +='*';
    }
    // console.log(square);
}
// 다이아몬드 모양 그리기 (1사분면)
for (let i=1; i <=5; i++){
    let star = '';
    for (let k=0; k < i; k++){
        star += '*';
    }
    console.log(star);
}
// (4사분면)
for (let i=5; i >= 1; i--){
    let star = '';
    for (let k=0; k < i; k++){
        star += '*';
    }
    console.log(star);
}
//2사분면
for (let i=1; i <= 5; i++){
    let star = '';
    for (let k=0; k < 5 - i; k++){ // 5-i개 만큼 ' ' 찍힘
        star += ' ';
    }
    for (let k=0; k<i;k++){ // i개만큼 * 찍힘
        star += '*';
    }
    console.log(star);
}
//3사분면
for (let i=5; i >= 1; i--){
    let star = '';
    for (let k=0; k < 5 - i; k++){ 
        star += ' ';
    }
    for (let k=0; k<i;k++){ 
        star += '*';
    }
    console.log(star);
}