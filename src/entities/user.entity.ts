import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
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

  @Column({ default: () => "now()" })
  createdAt: Date;

  @Column({ default: () => "now()" })
  updatedAt: Date;
}
