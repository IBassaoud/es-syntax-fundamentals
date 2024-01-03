export class StockNegativeError extends RangeError {
  status = 0;

  constructor(payload) {
    super(payload.message);
    this.status = payload.status;
  }
}
