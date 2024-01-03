import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map } from 'rxjs';
import { Repository } from 'typeorm';
import { UserModel } from '../../domain/models/user';
import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../entities/user.entity';

export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  insert(user: UserModel): Observable<UserModel> {
    const saved = from(this.repository.save(user));

    return saved.pipe(map((data) => this.entityToModel(data) as UserModel));
  }

  findAll(): Observable<UserModel[]> {
    const users = this.repository.find();

    return from(users).pipe(
      map((todos) => this.entityToModel(todos) as UserModel[]),
    );
  }

  private entityToModel(users: User | User[]): UserModel | UserModel[] {
    if (Array.isArray(users)) {
      return users.map(
        (user) =>
          <UserModel>{
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
          },
      );
    } else {
      const user = users;
      return <UserModel>{
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      };
    }
  }
}
