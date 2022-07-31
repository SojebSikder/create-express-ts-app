import { env } from "../system/src/util";
import dotenv from "dotenv"
dotenv.config();

// local disk storage for development
export const filesystemConfig = {
  default: env("FILESYSTEM_DRIVER", "local"),
  disks: {
    // default disk
    local: {
      driver: "local",
      root: "public/uploads",
    },
  },
};
