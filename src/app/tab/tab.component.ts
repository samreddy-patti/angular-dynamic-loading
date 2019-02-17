export class TabBaseComponet {
  private _counter = 1;
  public get counter() {
    return this._counter;
  }
  public increaseCounter(): void {
    this._counter++;
  }
}
