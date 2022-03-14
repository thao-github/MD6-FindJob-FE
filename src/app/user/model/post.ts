
export class Post{
  private _id!: number;
  private _title!: string;
  private _salary!: string;
  // vị trí tuyển dụng
  private _jobLocation!: string;
  // kinh nghiệm
  private _experience!: number;
  // Loại công việc
  private _jobType!: string;
  // Ngày hết hạn
  private _applicationDeadline!: string;
  private _description!: string;
  // Số lượng tuyển dụng
  private _vacancy!: number;
  private _gender!: string;
  private _postCode!: string;
  private _status!: boolean;


  constructor(id: number, title: string, salary: string, jobLocation: string, experience: number, jobType: string, applicationDeadline: string, description: string, vacancy: number, gender: string, postCode: string, status: boolean) {
    this._id = id;
    this._title = title;
    this._salary = salary;
    this._jobLocation = jobLocation;
    this._experience = experience;
    this._jobType = jobType;
    this._applicationDeadline = applicationDeadline;
    this._description = description;
    this._vacancy = vacancy;
    this._gender = gender;
    this._postCode = postCode;
    this._status = status;
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

  get applicationDeadline(): string {
    return this._applicationDeadline;
  }

  set applicationDeadline(value: string) {
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

  get postCode(): string {
    return this._postCode;
  }

  set postCode(value: string) {
    this._postCode = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }
}
