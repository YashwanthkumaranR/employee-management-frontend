export class Employee {

    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    salary: number;

    constructor(firstName: string = '',
                lastName: string = '',
                email: string = '',
                department: string = '',
                salary: number = 0
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.salary = salary;
    }

}
