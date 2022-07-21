//Var-- redeclaration is possible

//Let -- cannot redeclare

city = 'Mumbai'
var city            //hoisting

let country = 'India'
// let country

var firstname = 'Gunjan'  //Global variables

country = 10
var age = 20    //Global variable

//Local and Global Scope

function displayName() {
    var age = 20    //local variable - scope of this variable is limited to this func
    console.log('Age:', age)
    console.log(firstname)
}

displayName()
console.log(age)

if (age >= 18) {
    let qual = 'btech'
    var sch = 'abc'
    console.log(firstname)
}

console.log(sch)
// console.log(qual)  //Error: as scope of qual is limited to block

//Let: Local, global, block level

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//Const  
const org = 'xyz'
console.log('Organization:', org)

// org='abc'  //Cannot change the value of const

const person = {
    fName: 'Karthik',
    lName: 'Kumar'
}

person.fName = 'Kartik'

const colors = ['red', 'green', 'blue']

colors[0] = 'white'

//Arrow Functions

//Annonymous Functions
//Named Functions

function addition(x, y) {
    return x + y
}

let sum = function (x, y) {
    return x + y
}

let result = sum(10, 20)

let add = (a, b) => {
    return a + b
}

let res = add(22, 11)

//Callback functions
//When we need to call function from another function

//Perform any action: Calculate Simple Interest , display this on HTML page (p)
//Calculate simple interest, use this value in some other display area (span)

function calSI(p, r, t, funcCall) {
    //logic
    var si = 10

    funcCall(si)
}

function displayP(si) {
    //Logic to display
    console.log('para')
}

function displaySpan(si) {
    //logic to display
    console.log('span')
}

calSI(100, 10, 1, displaySpan)

//Synchronous JS- Line by line execution

//Async JS- 

function abc() {
    //Logic to stream the video
    console.log('abc done')
}

function xyz() {
    //Logic to request some resources
    console.log('xyz')
}


setTimeout(() => {
    console.log('abc done')
}, 3000);
xyz()


//Write arrow function to create a function to check if number is prime or not
//Write an arrow function to count number of vowels in a parameter

//Create one JS Module with areaOfSqaure, areaOfRect, areaOfCircle and export them
//Create another file and call all these functions post importing


//Arrays & Array Methods
console.clear()


let arr1 = [10, 20, 30]
let arr2 = [40, 50, 60]

let arr3 = arr1.concat(arr2)
console.log(arr3)

console.log(arr1.join('/'))

let items = ['chair', 'bed', 'table', 'sofa', 'bed']

items.indexOf('bed')

//Slice-- taking out one part of array

console.log(items.slice(1, 3))

let delItems = items.splice(2, 2, 'couch', 'dining table')
console.log(delItems)

console.log(items)

let nums = [10, 33, 22, 11, 442, 212, 11, 23, 89]

//Print only even numbers
nums.forEach((value) => {
    if (value % 2 == 0) {
        console.log('Even:', value)
    }
})

// function isEven(value){
//     if(value%2==0){
//         console.log('Even:', value)
//     }
// }

//Create a new array with square of every element in nums.
let sqNums = nums.map((value) => {
    return value * value
})

console.log(sqNums)

//Create a new array with only odd values
let oddNums = nums.filter((value) => {
    if (value % 2 != 0) {
        return value
    }
})

console.log(oddNums)

//Reduce: one value
//Ex: add all the values in array

res = nums.reduce((val, sum) => {
    return val + sum
})

console.log(res)

console.clear()

//Classes

class Person {
    constructor(name, age, city) {
        this.name = name,
            this.age = age
        this.city = city
    }

    displayName() {
        console.log('Name of the person:', this.name)
    }
}

let p1 = new Person('Deepak', 22, 'Delhi')
p1.displayName()

//Inheritance-- Reusability of code
class Teacher extends Person {
    constructor(name, age, city, subjects) {
        super(name, age, city)
        this.subjects = subjects
    }

    teachSubjects() {
        for (let i of this.subjects) {
            console.log(i)
        }
    }
}

let t1 = new Teacher('Rekha', 30, 'Pune', ['English', 'Social Science'])
t1.teachSubjects()

//Spread Operator

function addNums(n1, n2, n3) {
    return (n1 + n2 + n3)
}

let nms = [10, 20, 30]

console.log(addNums(...nms))

//Rest Parameter
function addNNums(...numbers) {
    console.log(numbers)

    let s = 0
    for (let i of numbers) {
        s = s + i
    }
    console.log(s)
    let r = numbers.reduce((val, s) => { return val + s })
    console.log(r)
}

addNNums(10, 20, 30, 40, 50, 60)

//Destructuring of objects
let user = {
    fName: 'Karthik',
    lName: 'Kumar',
    cntry: 'US',
    address: {
        street: '2',
        cty: 'Pune'
    }
}

const { fName: firstName, cntry = 'India', address: { cty } } = user

console.log(cty)

//Destructuring of arrays

let arrNames = ['ABC', 'XYZ', 'PQR', ['KJL', 'MNP']]

let [firstN, secN, thirdN, [forth, fiv]] = arrNames

let [, sec,] = arrNames

let [ft, ...rem] = arrNames
console.log(rem)    //rest operator

console.clear()

//Multiple Callbacks

//We are hitting a DB... Name... Email... City... Country... Print this on console

function getName(callBack) {
    //Fetched from DB
    let obj = { name: 'Virat' }
    callBack(obj, getCity)
}

function getEmail(data, callBack) {
    //Fetch email from db and add to the obj
    let obj = data
    obj.email = 'xz@gmail.com'
    callBack(obj, getCountry)
}

function getCity(data, callBack) {
    //Fetch city from db and add to the obj
    let obj = data
    obj.city = 'chennai'
    callBack(obj, print)
}

function getCountry(data, callback) {
    //Fetch country from db
    let obj = data
    obj.country = 'India'

    callback(obj)
}

function print(data) {
    console.log(data)
}

getName(getEmail)

//Callback hell--- complexity, difficult to understand/maintain

//Promises--- pending, fulfilled, rejected

let prom = new Promise((resolve, reject) => {

    //Write the code --- e.g. accessing db/third party application, access API etc
    let result = false

    if (result) {
        resolve('Success')
    }
    else {
        reject('fail')
    }

})

prom.then((data) => {
    console.log(data)
})
    .catch((data) => {
        console.log(data)
    })


function getData() {
    return new Promise((res, rej) => {
        //Write the code --- e.g. accessing db/third party application, access API etc
        let result = false

        if (result) {
            resolve('Success')
        }
        else {
            reject('fail')
        }
    })

}


function getNewName() {
    return new Promise((resolve, reject) => {
        //Write the code --- e.g. accessing db/third party application, access API etc
        let result = true
        let obj = { name: 'Karthik' }

        if (result) {
            resolve(obj)
        }
        else {
            reject('fail')
        }
    })
}

function getNewEmail(data) {
    return new Promise((resolve, reject) => {
        //Write the code --- e.g. accessing db/third party application, access API etc
        let result = true
        let obj = data
        obj.email = 'ac@gmail.com'

        if (result) {
            resolve(obj)
        }
        else {
            reject('fail')
        }
    })
}

function getNewCity(data) {
    return new Promise((resolve, reject) => {
        //Write the code --- e.g. accessing db/third party application, access API etc
        let result = true
        let obj = data
        obj.city = 'mumbai'

        if (result) {
            resolve(obj)
        }
        else {
            reject('fail')
        }
    })
}

function printInfo(data) {
    console.log(data)
}

getNewName().then((data) => { return getNewEmail(data) })
    .then((data) => { return getNewCity(data) })
    .then((data) => { printInfo(data) })