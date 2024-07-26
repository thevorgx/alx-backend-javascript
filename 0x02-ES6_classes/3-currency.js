export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return (this._code);
  }

  get name() {
    return (this._name);
  }

  set code(Code) {
    if (typeof Code === 'string') {
      this._code = Code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  set name(Name) {
    if (typeof Name === 'string') {
      this._name = Name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
