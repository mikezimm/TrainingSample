declare type PageContext = {};

export interface IMyService {
  Init: (pageContext: PageContext) => void;
}

export class MyService implements IMyService {
  private LOG_SOURCE = "MyService";
  private _ready: boolean = false;
  private _pageContext: PageContext;

  public constructor() { }

  public Init(pageContext: PageContext): void {
    this._pageContext = pageContext;
    this._ready = true;
  }

  public get ready(): boolean {
    return this._ready;
  }

}

export const myService: IMyService = new MyService();