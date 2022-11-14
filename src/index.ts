// This is good when you need everything in the library
import { MyService, myService } from "./services/myService";

// Be sure to import 'type' <<< ++++
import type { IMyService } from "./services/myService";
export {
  MyService,
  myService,
  IMyService
};