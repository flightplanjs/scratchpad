import { IEntity, Sluggable } from '../data/entities';
import { Permission } from './permission';

export interface Role<T> extends IEntity<T>, Sluggable {
  tag: string;
  name: string;
  permissions: Permission<T>[];
}

export interface HasRole<T> {
  roles: Role<T>[];
}
