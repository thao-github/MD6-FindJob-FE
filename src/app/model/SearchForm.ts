export class SearchForm{
  private _title!: string;
  private _jobLocation!: string;
  private _idField!: number;
  private _minSalary!: any;
  private _maxSalary!: any;


  constructor( title: string, jobLocation: string, idField: number, minSalary: any, maxSalary: any) {
    this._title = title;
    this._jobLocation = jobLocation;
    this._idField = idField;
    this._minSalary = minSalary;
    this._maxSalary = maxSalary;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get jobLocation(): string {
    return this._jobLocation;
  }

  set jobLocation(value: string) {
    this._jobLocation = value;
  }


  get idField(): number {
    return this._idField;
  }

  set idField(value: number) {
    this._idField = value;
  }

  get minSalary(): number {
    return this._minSalary;
  }

  set minSalary(value: number) {
    this._minSalary = value;
  }

  get maxSalary(): any {
    return this._maxSalary;
  }

  set maxSalary(value: any) {
    this._maxSalary = value;
  }
}
