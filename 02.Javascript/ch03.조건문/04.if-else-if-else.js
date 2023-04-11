// if-else if-else
let score = 31;
let grade;

if(score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else 
    grade = 'F';

console.log(`성적 ${score}, 학점 ${grade}`);

// 조건을 거는 순서가 중요하다. 가장 작은 범위부터.