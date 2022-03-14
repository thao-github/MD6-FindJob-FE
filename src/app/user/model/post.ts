
export class Post{
  id!: number;
  title!: string;
  salary!: number;
  // vị trí tuyển dụng
  jobLocation!: string;
  // kinh nghiệm
  experience!: number;
  // Loại công việc
  jobType!: boolean;
  // Ngày hết hạn
  applicationDeadline!: string;
  description!: string;
  // Số lượng tuyển dụng
  vacancy!: number;
  gender!: string;
  postCode!: string;
  status!: boolean;


  constructor(id: number, title: string, salary: number, jobLocation: string, experience: number, jobType: boolean, applicationDeadline: string, description: string, vacancy: number, gender: string, postCode: string, status: boolean) {
    this.id = id;
    this.title = title;
    this.salary = salary;
    this.jobLocation = jobLocation;
    this.experience = experience;
    this.jobType = jobType;
    this.applicationDeadline = applicationDeadline;
    this.description = description;
    this.vacancy = vacancy;
    this.gender = gender;
    this.postCode = postCode;
    this.status = status;
  }

}
