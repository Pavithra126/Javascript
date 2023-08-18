const a=3//height
const b=5//base
area =(a*b)/2;
console.log('Area of triangle is: ' + area);//when two sides values known:

/*for (let i=0; i<=500;i++){
  if (i%2==0){
      console.log(i + "is" + "Even number")
  }
  else{
      console.log(i + "is" + "Odd number")
  }
}*/

let n=-2
if (n>0){
  console.log("Positive")
}
else if(n==0){
   console.log("Zero")
}
else{
  console.log("Negative")
}

const num=1;
let isprime=true;
if (num===1){
  console.log("1 is a neither prime or composite number");
}
if(num>1){
  for(i=2;i<num;i++){
    if (num%i==0)
    isprime=false;
    break;
  }
}
if(isprime){
  console.log("is a prime number")
}
else{
  console.log("is not a prime number")
}

const arr=[1,3,5,6,8,-1,-5,-4,33,2]
const x=arr.map((b)=>b+3);
console.log(x);

let y = [1,2,3,4,5,6,7,8,9]
let z = y.filter((each)=>each>8)
console.log(z);

const array=[1,3,5,7,8,9,]
const reducearr=array.reduce((a,b)=>{
return a+b;
});
console.log(reducearr)

