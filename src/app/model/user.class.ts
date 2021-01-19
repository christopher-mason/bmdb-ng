export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    collectionValue: number;


constructor(id: number = 0, username: string = '', password: string = '', firstName: string = '', 
    lastName: string = '', phoneNumber: string = '', email: string = '', collectionValue: number = 0) {
        this.id = id;
        this.username;
        this.password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.collectionValue = collectionValue;
    }
}