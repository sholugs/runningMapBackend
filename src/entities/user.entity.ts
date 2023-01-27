import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
