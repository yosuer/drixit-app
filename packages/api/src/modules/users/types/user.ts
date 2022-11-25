export class User {
  id: string;
  avatar: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  age: number;
  role: string;

  constructor({ id, avatar, email, name, password, surname, age, role }: User) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.surname = surname;
    this.age = age;
    this.role = role;
  }
}
