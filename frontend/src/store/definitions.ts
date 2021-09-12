export default interface StoreActionInterface<T, P> {
  type: T;
  payload: P;
}
