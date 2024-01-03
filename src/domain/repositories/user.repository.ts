import { Observable } from 'rxjs';
import { UserModel } from '../models/user';

export abstract class UserRepository {
  public abstract insert(user: UserModel): Observable<UserModel>;
  public abstract findAll(): Observable<UserModel[]>;
}
