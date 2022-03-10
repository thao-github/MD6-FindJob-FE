export class Company{
  private _id!: number;
  private _name!: string;
  private _companyCode!: string;
  private _phoneNumber!: string;
  private _description!: string;
  private _avatar!: string;
  private _address!: string;
  private _cv!: string;
  private _numberOfEmployees!: number;
  private _branch!: string;
  private _fieldOfActivity!: string;
  private _website!: string;
  private _facebook!: string;
  private _mapLink!: string;


  constructor(id: number, name: string, companyCode: string, phoneNumber: string, description: string, avatar: string, address: string, cv: string, numberOfEmployees: number, branch: string, fieldOfActivity: string, website: string, facebook: string, mapLink: string) {
    this._id = id;
    this._name = name;
    this._companyCode = companyCode;
    this._phoneNumber = phoneNumber;
    this._description = description;
    this._avatar = avatar;
    this._address = address;
    this._cv = cv;
    this._numberOfEmployees = numberOfEmployees;
    this._branch = branch;
    this._fieldOfActivity = fieldOfActivity;
    this._website = website;
    this._facebook = facebook;
    this._mapLink = mapLink;
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

  get companyCode(): string {
    return this._companyCode;
  }

  set companyCode(value: string) {
    this._companyCode = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
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

  get cv(): string {
    return this._cv;
  }

  set cv(value: string) {
    this._cv = value;
  }

  get numberOfEmployees(): number {
    return this._numberOfEmployees;
  }

  set numberOfEmployees(value: number) {
    this._numberOfEmployees = value;
  }

  get branch(): string {
    return this._branch;
  }

  set branch(value: string) {
    this._branch = value;
  }

  get fieldOfActivity(): string {
    return this._fieldOfActivity;
  }

  set fieldOfActivity(value: string) {
    this._fieldOfActivity = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get facebook(): string {
    return this._facebook;
  }

  set facebook(value: string) {
    this._facebook = value;
  }

  get mapLink(): string {
    return this._mapLink;
  }

  set mapLink(value: string) {
    this._mapLink = value;
  }
}
