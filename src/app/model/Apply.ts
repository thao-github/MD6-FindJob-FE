import {Users} from "./users";
import {Post} from "./Post";

export class Apply {
  private _id!: number;
  private _users!: Users;
  private _post!: Post;

  constructor(id: number, users: Users, post: Post) {
    this._id = id;
    this._users = users;
    this._post = post;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get users(): Users {
    return this._users;
  }

  set users(value: Users) {
    this._users = value;
  }

  get post(): Post {
    return this._post;
  }

  set post(value: Post) {
    this._post = value;
  }
}
