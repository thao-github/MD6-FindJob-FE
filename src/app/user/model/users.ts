export class Users{
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  avatar!: string;
  cv!: string;
  phoneNumber!: string;
  address!: string;
  role!: string;


  constructor(id: number, name: string, email: string, password: string, avatar: string, cv: string, phoneNumber: string, address: string, role: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.cv = cv;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.role = role;
  }
}
