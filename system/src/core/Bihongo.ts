// external imports
import http from "http";
import dotenv from "dotenv";
import helmet from "helmet";
import { Server } from "socket.io";
import cors from "cors";
// internal imports
// import { appConfig } from "../../config/app";
// import { routes } from "../../routes/web";
// import { boot } from "../../app/app";
// import { staticConfig } from "../../config/static";

import { appConfig } from "../Config";
import { routes } from "../Config";
import { boot } from "../Config";
import { staticConfig } from "../Config";
import { ExpressAdapter } from "./Framework/ExpressAdapter";

/**
 * Bihongo is another name of this boilarplate core.
 */
export class Bihongo {
  /**
   * Initialize app.
   */
  static app(frameworkAdapter = new ExpressAdapter()) {
    // initialize
    dotenv.config();
    const app = frameworkAdapter.app();

    app.disable("x-powered-by");
    const server = http.createServer(app);
    // socket creation
    const io = new Server(server);
    global.io = io;

    if (appConfig.security.cors.enable) {
      app.use(cors(appConfig.security.cors.options));
    }
    if (appConfig.security.helmet.enable) {
      app.use(helmet(appConfig.security.helmet.options));
    }
    app.use(frameworkAdapter.instance().static(staticConfig.staticDir));
    if (staticConfig.engine.enable) {
      app.set("view engine", staticConfig.engine.viewEngine);
      app.set("views", staticConfig.engine.viewsDir);
    }

    // initialize middleware
    boot(app);
    //routes
    routes(app);

    return server;
  }
}
