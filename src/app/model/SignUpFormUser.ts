export class SignUpFormUser {
  name!: string;
  email!: string;
  password!: string;
  phoneNumber!: string;
  roles!: string[];

  constructor(name: string, email: string, password: string, phoneNumber: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.roles = ['USER'];
  }
}
