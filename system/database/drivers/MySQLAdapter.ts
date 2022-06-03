import mysql from "mysql";

import { env } from "../../util";
import { IAdapter } from "./iAdapter";

export class MySQLAdapter implements IAdapter {
  public host = env("DB_HOST");
  public user = env("DB_USERNAME");
  public pass = env("DB_PASSWORD");
  public dbname = env("DB_DATABASE");

  public connection;
  public error;

  constructor() {
    this.connectDB();
  }

  private connectDB = () => {
    this.connection = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.pass,
      database: this.dbname,
    });

    this.connection.connect(function (err) {
      if (err) {
        this.error = err;
        throw err;
      }
      console.log("Connected!");
    });
  };

  // Select or Read data
  public select = async (query) => {
    // returns a promise
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(query, (err, result, fields) => {
          if (err) reject(err);
          if (result.length > 0) {
            resolve(result);
          } else {
            resolve(false);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  // Select or Read data
  public selectOne(query) {
    // returns a promise
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(query, function (err, result) {
          if (err) {
            reject(err);
          }
          if (result.length > 0) {
            resolve(result[0]);
          } else {
            resolve(false);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  // // Insert data
  public insert(query) {
    // returns a promise
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(query, function (err, result) {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  // Update data
  public update(query) {
    // returns a promise
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(query, function (err, result) {
          if (err) reject(err);
          resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  // Delete data
  public delete(query) {
    // returns a promise
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(query, function (err, result) {
          if (err) reject(err);
          resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  // query statement data
  public statement(query) {
    // returns a promise
    return new Promise((resolve, reject) => {
      try {
        this.connection.query(query, function (err, result) {
          if (err) resolve(err);
          resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
