export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return (this._amount);
  }

  get currency() {
    return (this._currency);
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  set currency(Currency) {
    this._currency = Currency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
