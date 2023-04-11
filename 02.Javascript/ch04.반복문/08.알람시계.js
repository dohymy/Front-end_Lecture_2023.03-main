let hour = 5;
let min = 40;

if (min>=45)
    console.log(`${hour}시 ${min-45}분`);
else {
    if (hour==0)
        console.log(`23시 ${min+15}분`);
    else
        console.log(`${hour-1}시 ${min+15}분`);
}
