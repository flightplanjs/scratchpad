import { IEntity, Sluggable } from '../data/entities';

export interface Permission<T> extends IEntity<T>, Sluggable {}
