export interface IBaseReponse<T = any> {
  success: boolean
  data: T
}