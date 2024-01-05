export class UnimplementedError extends Error {
  constructor(message) {
    super(`${message}  must be implemented in children class`);
  }
}
