import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  protected password: string;

  @BeforeUpdate()
  @BeforeInsert()
  protected async hashPassword() {
    console.log('hashing');
    try {
      const rounds = bcrypt.getRounds(this.password);
      if (rounds === 0) {
        this.password = await bcrypt.hash(this.password, 10);
      }
    } catch (error) {
      console.log(error);
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
