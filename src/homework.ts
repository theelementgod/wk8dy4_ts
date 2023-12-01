// 1. Given the data below, define a type alias for representing users.
type User = {
    readonly name: string,
    age: number,
    company?: string
}
let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
let day: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' ) = 'Friday'

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string
        ) {}

    printInfo = (): string => {
        return `${this.firstName} ${this.lastName}`
    }
}
const person1 = new Person('Jesse', 'De La Rosa')
console.log(person1.printInfo())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
class Employee extends Person {
    constructor(
        public firstName:string,
        public lastName:string,
        private _salary: number
    ){
        super(firstName, lastName) //https://www.c-sharpcorner.com/UploadFile/5089e0/how-to-use-super-keyword-in-typescript/#:~:text=The%20super%20keyword%20can%20be,in%20constructors%20of%20derived%20classes.
    }
    printInfo = (): string => {
        return `${this.firstName} ${this.lastName} earns ${this._salary} per year.`
    }
}
const newHire = new Employee('Joy', 'Cornett', 300000)
console.log(newHire.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
interface EmployeeInfo {
    name: string,
    salary: number,
}
interface Address extends EmployeeInfo {
    street: string,
    city: string,
    zipCode: number
}
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

