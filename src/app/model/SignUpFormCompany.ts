export class SignUpFormCompany{
  private _name!: string;
  private _email!: string;
  private _password!: string;
  private _avatar!: string;
  private _address!: string;



  constructor(name: string, email: string, password: string, avatar: string, address: string) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._avatar = avatar;
    this._address = address;
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

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
