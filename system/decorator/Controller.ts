import { RouterStorage } from "../core";

/**
 * Controller decorator.
 */
export function Controller(baseRoute?: string, options?): Function {
  return function (object: Function) {
    RouterStorage.controllers.push({
      type: "default",
      target: object,
      route: baseRoute,
      options,
    });

    // getMetadataArgsStorage().controllers.push({
    //   type: 'default',
    //   target: object,
    //   route: baseRoute,
    //   options,
    // });
  };
}
