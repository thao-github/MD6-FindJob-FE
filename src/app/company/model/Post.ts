import {Field} from "./Field";
import {Company} from "./company";

export class Post {
  private _id!: number;
  private _title!: string
  private _postCode!: string
  private _position!: string
  private _salary!: string
  private _jobLocation!: string
  private _experience!: number
  private _jobType!: string
  private _applicationDeadline!: Date
  private _description!: string
  private _vacancy!: number
  private _gender!: string
  private _status!: boolean
  private _field!: Field;
  private _company!: Company;


  constructor(id: number, title: string, postCode: string, position: string, salary: string, jobLocation: string, experience: number, jobType: string, applicationDeadline: Date, description: string, vacancy: number, gender: string, status: boolean, field: Field, company: Company) {
    this._id = id;
    this._title = title;
    this._postCode = postCode;
    this._position = position;
    this._salary = salary;
    this._jobLocation = jobLocation;
    this._experience = experience;
    this._jobType = jobType;
    this._applicationDeadline = applicationDeadline;
    this._description = description;
    this._vacancy = vacancy;
    this._gender = gender;
    this._status = status;
    this._field = field;
    this._company = company;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get postCode(): string {
    return this._postCode;
  }

  set postCode(value: string) {
    this._postCode = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get salary(): string {
    return this._salary;
  }

  set salary(value: string) {
    this._salary = value;
  }

  get jobLocation(): string {
    return this._jobLocation;
  }

  set jobLocation(value: string) {
    this._jobLocation = value;
  }

  get experience(): number {
    return this._experience;
  }

  set experience(value: number) {
    this._experience = value;
  }

  get jobType(): string {
    return this._jobType;
  }

  set jobType(value: string) {
    this._jobType = value;
  }

  get applicationDeadline(): Date {
    return this._applicationDeadline;
  }

  set applicationDeadline(value: Date) {
    this._applicationDeadline = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get vacancy(): number {
    return this._vacancy;
  }

  set vacancy(value: number) {
    this._vacancy = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get field(): Field {
    return this._field;
  }

  set field(value: Field) {
    this._field = value;
  }

  get company(): Company {
    return this._company;
  }

  set company(value: Company) {
    this._company = value;
  }
}
