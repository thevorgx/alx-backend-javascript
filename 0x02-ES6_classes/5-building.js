export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      this._sqft = sqft;
    } else {
      this._sqft = sqft;
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this._sqft === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
