import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import { UserCredentialsEntity } from 'result-app-core/src/auth/data/user';

import * as bcrypt from 'bcrypt';

@Entity()
export class User implements UserCredentialsEntity<number> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeUpdate()
  @BeforeInsert()
  protected async hashPassword() {
    const rounds = this.password.match(/^\$2[a,b]\$\d+/)
      ? bcrypt.getRounds(this.password)
      : 0;

    if (rounds === 0) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
