import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserCreateDto } from 'src/application/dtos/users/user-create.dto';
import { UserCreatedDto } from 'src/application/dtos/users/user-created.dto';
import { UseCase } from 'src/domain/base/use-case.base';
import { UserCreateMapper } from 'src/domain/mappers/users/user-create.mapper';
import { UserCreatedMapper } from 'src/domain/mappers/users/user.created.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class CreateUserUseCase implements UseCase<UserCreatedDto> {
  private userCreateMapper: UserCreateMapper;
  private userCreatedMapper: UserCreatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreateMapper = new UserCreateMapper();
    this.userCreatedMapper = new UserCreatedMapper();
  }

  public execute(user: UserCreateDto): Observable<UserCreatedDto> {
    const entity = this.userCreateMapper.mapFrom(user);

    return this.repository
      .insert(entity)
      .pipe(map(this.userCreatedMapper.mapTo));
  }
}
