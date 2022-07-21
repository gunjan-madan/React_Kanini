// for loop
// basic for loop for(let i=0;i<10; i++)
// for of loop - iterables (array/strings)
// for in loop-- useful in objects

let nums=[3,42,11,33,44]

for(let i of nums){
    console.log(i)
}

for(let j in nums){
    console.log(j,'-',nums[j])
}

//Objects: use for in loop
let person={
    fName: 'Kirti',
    city: 'Hyderabad',
    age: 24
}

for(let k in person){
    console.log(k, '-',person[k])
}