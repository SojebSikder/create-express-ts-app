import jwt from "jsonwebtoken";
import { authConfig } from "../../config/auth";
import { env } from "../util/env";

export class Auth {
  constructor() {}
  /**
   * authenticate using jwt token
   * @param req
   * @param res
   * @param next
   * @returns
   */
  static authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, authConfig.guards.jwt.secret, (err, user) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }

  /**
   * Generate jwt access token
   * @param user
   * @returns
   */
  static generateAccessToken(user) {
    // generate token
    const token = jwt.sign(user, authConfig.guards.jwt.secret, {
      expiresIn: authConfig.guards.jwt.expires,
    });

    return token;
  }
  /**
   * Get data from jwt token
   * @param req
   * @param res
   * @returns
   */
  static get(req, res) {
    let cookies =
      Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

    if (cookies) {
      try {
        const token = cookies[env("COOKIE_NAME")];
        const decoded = jwt.verify(token, env("JWT_SECRET"));

        return decoded;
      } catch (err) {
        return err;
      }
    } else {
      return null;
    }
  }
}
