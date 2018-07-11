export class Hero {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get birthday(): string {
    return this._birthday;
  }

  set birthday(value: string) {
    this._birthday = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _birthday: string;
  private _gender: string;
}
