export class Users{
  private _id!: number;
  private _name!: string;
  private _email!: string;
  private _password!: string;
  private _avatar!: string;
  private _cv!: string;
  private _phoneNumber!: string;
  private _address!: string;
  private _role!: string;


  constructor(id: number, name: string, email: string, password: string, avatar: string, cv: string, phoneNumber: string, address: string, role: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._avatar = avatar;
    this._cv = cv;
    this._phoneNumber = phoneNumber;
    this._address = address;
    this._role = role;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get cv(): string {
    return this._cv;
  }

  set cv(value: string) {
    this._cv = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
