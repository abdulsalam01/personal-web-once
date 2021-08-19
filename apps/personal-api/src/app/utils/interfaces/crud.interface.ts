export interface iCrud<T> {
  getAll(data: any): Promise<T[]>
  getById(id: any): Promise<T | null>
  create(model: any): Promise<T | null>
  update(data: any): Promise<T | null>
  delete(id: any): Promise <T | null>
}
