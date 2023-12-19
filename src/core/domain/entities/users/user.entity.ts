import { Entity } from 'src/core/base/entity.base';

export class UserEntity extends Entity {
  public name: string;
  public password: string;
  public email: string;
}
