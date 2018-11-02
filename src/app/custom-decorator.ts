export function myLogger() {

  return function ( constructor: any ) {


    const component = constructor.name;

    console.log(`%c ${component} initialized` , `color: red; font-weight: bold`);

  };
}
