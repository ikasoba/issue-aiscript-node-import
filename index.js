import { Interpreter, utils, Parser } from "@syuilo/aiscript";

const interpreter = new Interpreter({}, {
  out(value) {
    console.log(utils.valToString(value));
  }
});

interpreter.exec(Parser.parse(`
  <: "Hello, world!"
`))