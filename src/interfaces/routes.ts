import { Request, Response, Next } from "restify";

export interface IRoutes {
  path: string;
  method: string;
  action: (req: Request, res: Response, next: Next) => void;
  middlewares?: { (req: Request, res: Response): void }[];
  auth?: string;
}

export interface IIncludeRoutesPrefix {
  routes: IRoutes[];
  prefixRoute: string;
}
