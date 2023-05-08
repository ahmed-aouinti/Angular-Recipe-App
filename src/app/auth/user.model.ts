export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDaate: Date
  ) {}
  get token() {
    if (
      !this._tokenExpirationDaate ||
      new Date() > this._tokenExpirationDaate
    ) {
      return null;
    }
    return this._token;
  }
}
