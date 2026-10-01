a=20;
b=25
sum=a+b
console.log(sum);
let color="red"
if(color==="red"){
    console.log("stop")
}else if(color==="yellow"){
    console.log("slow down")
}else if(color==="green"){
    console.log("run")
}else{
    console.log("traffic light khatm")
}


let count=1
while(count<=5){
    console.log(count)
    count++
}

let number=8;
if(number%2===0){
    console.log("numberis even")
}else{
    console.log("odd")
}

let n;
console.log("enter number")
if(n%2===0){
        console.log("numberis even")
}else{
    console.log("odd")

}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " -> Even");
    } else {
        console.log(i + " -> Odd");
    }
}


function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(42)); // Output: Even
console.log(checkEvenOdd(15)); // Output: Odd