// var vehicle = {wheel: 4};
// var car = {
//     seats:4,
//     __proto__: vehicle,
// }
// let driver = {
//     __proto__: car
// };
//
//
//
// console.log(car.wheel)



function employees(name,phoneNumber,designation){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.designation = designation;

    this.printDetails = () => {
        return `my name is ${this.name} \n you can contact me via
        ${this.phoneNumber}. i am the ${designation} of bright `;

    };
    this.paySalary = (designation) => {
        let disbursementResponse = {
            isSuccessful : true,
            salary:this.salary,
            designation:this.designation,
        };
        if(this.designation === "manager"){
            this.salary = 50000000;
            disbursementResponse.salary = this.salary;
        }
        else if (this.designation === "cook"){
            this.salary = 20000;
            disbursementResponse = this.salary
        }
        else {
            disbursementResponse.isSuccessful = false;
            disbursementResponse.salary = "not assigned";
        }
        return disbursementResponse

        };


    this.company = "bright";


}
let employee1 = new employees("bright",34757755885,"manager");
let employee2 = new employees("john",34757755885,"security");


console.log(employee1.__proto__ === employee2.__proto__);
console.log(employee1.company === employee2.company);
console.log(employee1.printDetails());
console.log(employee2.printDetails());



module.exports = {employees}
