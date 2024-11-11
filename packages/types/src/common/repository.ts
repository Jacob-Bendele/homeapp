export interface Repository<T> {
    getById(id: string): Promise<T | null>;
    getAll(): Promise<T[]>;
    create(entity: Omit<T, 'id'>): Promise<T>;
    update(entity: T): Promise<T>;
    delete(id: string): Promise<boolean>;
}
