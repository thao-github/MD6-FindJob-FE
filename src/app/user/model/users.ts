export class Users{
  id!: number;
  name!: string;
  username!: string;
  email!: string;
  password!: string;
  avatar!: string;
  cv!: string;
  companyCode!: string;
  phoneNumber!: string;
  description!: string;
  address!: string;
  numberOfEmployees!: number;
  branch!: string;
  fieldOfActivity!: string;
  website!: string;
  facebook!: string;
  maplink!: string;
  role!: string;


  constructor(id: number, name: string, username: string, email: string, password: string, avatar: string, cv: string, companyCode: string, phoneNumber: string, description: string, address: string, numberOfEmployees: number, branch: string, fieldOfActivity: string, website: string, facebook: string, maplink: string, role: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.cv = cv;
    this.companyCode = companyCode;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.address = address;
    this.numberOfEmployees = numberOfEmployees;
    this.branch = branch;
    this.fieldOfActivity = fieldOfActivity;
    this.website = website;
    this.facebook = facebook;
    this.maplink = maplink;
    this.role = role;
  }
}
