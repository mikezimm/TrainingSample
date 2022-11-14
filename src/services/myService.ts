//Can add specific known structure here to create a minimal version for typing
declare type PageContext = {};

export interface IMyService {
  Init: (pageContext: PageContext) => void;
}

export class MyService implements IMyService {
  private LOG_SOURCE = "MyService";
  private _ready: boolean = false;
  private _pageContext: PageContext;

  //version 3 commparison
  // private _SP: SPFI 

  public constructor() { }

  public Init(pageContext: PageContext): void {
    this._pageContext = pageContext;
    this._ready = true;
    //Model for v3
    // this._SP = spfi().using(SPFx({ pageContext }));

  }

  public get ready(): boolean {
    return this._ready;
  }

  // Model for v3
  // public getListItems( listname: string ) {
  //   this._SP.web.lists.getByTitle( listname )
  // }

}

// This turns it into a global instance called myServices
// Only used when the state of the service doesn't matter
// If you only pass in pageContext in on init, then publics become reusable.
// Comment this out if you passed in more in the on init that is specific to a web part or use case.
export const myService: IMyService = new MyService();