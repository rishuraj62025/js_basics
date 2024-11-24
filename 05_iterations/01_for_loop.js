for (let i = 0; i < 5; i++) {
    const element = i;
    console.log(element)
}


for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
        console.log(i + '*' + j + '=' + i*j)
    }
}
// 0*0=0
// 0*1=0
// 0*2=0
// 1*0=0
// 1*1=1
// 1*2=2
// 2*0=0
// 2*1=2
// 2*2=4

let array =["superman", "batman", "spiderman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
//superman
// batman
// spiderman


// break and continue

for (let index = 1; index < 5; index++) {
    if(index == 2)
        {
         console.log(`2 is detected`)
         break
        }
    console.log(index);
}
// o/p: 1
// 2 is detected

for (let index = 1; index < 5; index++) {
    if(index == 3)
        {
         console.log(`3 is detected`)
         continue
        }
    console.log(index);
}
//o/p:
// 1
// 2
// 3 is detected
// 4