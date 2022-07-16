import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class ExampleService {
  private static _instance: ExampleService;
  /**
   * Create instance
   */
  public static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance;
  }
  /**
   * show all data
   */
  public async index() {
    return "Hello world";
  }
}
