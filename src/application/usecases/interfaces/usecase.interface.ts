export interface UseCase<I, R> {
  handle(data: I): Promise<R>;
}
