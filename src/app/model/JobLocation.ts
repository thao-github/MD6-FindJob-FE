export class JobLocation{
  private _job_location!: string;


  constructor(job_location: string) {
    this._job_location = job_location;
  }

  get job_location(): string {
    return this._job_location;
  }

  set job_location(value: string) {
    this._job_location = value;
  }
}
