let dice1 = parseInt(Math.ceil(Math.random() * 6));
let dice2 = parseInt(Math.ceil(Math.random() * 6));
let dice3 = parseInt(Math.ceil(Math.random() * 6));
// dice1,2,3의 값을 설정

let numbers = [dice1,dice2,dice3]; // a==b==c : 이런식으로 쓰면 안된다. 
let maxVal = 0;
for (let i = 0; i < numbers.length; i++)
    if (maxVal < numbers[i])
        maxVal = numbers[i];
// 최대값이 필요하기 때문에 최대값을 찾음

if (dice1==dice2&&dice1==dice3)
    console.log(`${10000+dice1*1000}원`);
    // 세 눈의 값이 동일할 경우
else if (dice1==dice2 || dice1==dice3 || dice2==dice3){
    // 두 눈의 값이 동일할 경우, 어떤 눈의 조합이 같을 때 각 경우에 설정이 필요. (같은 눈의 값을 x로 설정)
    if(dice1==dice2){
        x=dice1    
        // dice1과 2가 같을 경우
    }
    else if (dice2==dice3){
        x=dice2
        // dice2와 3가 같을 경우
    }
    else
        x=dice3
        // dice1과 3이 같을 경우
    console.log(`${1000+x*100}원`);
}
else
    console.log(`${maxVal*100}원`);
    // 찾은 최대값 maxVal를 대입.