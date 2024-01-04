import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserCreatedDto } from 'src/application/dtos/users/user-created.dto';
import { UseCase } from 'src/domain/base/use-case.base';
import { UserCreatedMapper } from 'src/domain/mappers/users/user.created.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class GetAllUsersUseCase implements UseCase<UserCreatedDto[]> {
  constructor(
    private readonly repository: UserRepository,
    private readonly userCreatedMapper: UserCreatedMapper,
  ) {}

  public execute(): Observable<UserCreatedDto[]> {
    return this.repository
      .findAll()
      .pipe(map((data) => data.map(this.userCreatedMapper.mapTo)));
  }
}
