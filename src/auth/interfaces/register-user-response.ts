import { User } from '../entities/user.entity';

export interface RegisterUserResponse {
  user: User;
  token: string;
}
