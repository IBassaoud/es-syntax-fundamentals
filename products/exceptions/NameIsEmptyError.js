export class NameIsEmptyError extends TypeError {
  status = 0;

  constructor(payload) {
    super(payload.message);
    this.status = payload.status;
  }
}
