// Type

function Types() {
  // Number
  const numberTest: number = 0;

  // String
  const stringTest: string = "test";

  // Any
  const anyType: any = "test";

  // number Array
  const arrNumber: number[] = [1, 2, 3];

  // string Array
  const arrString: string[] = ["test", "test2"];

  // No annotation
  let myName = "test";

  // myName=21 // You shall confirm this error.

  //Union type
  const unionType: number | string = "OK";
  // after you shall check type
  if (typeof unionType === "string") {
    console.log("string");
  } else {
    console.log("number");
  }

  // Function parameter type

  function testFunction(data: string) {
    return "sample";
  }

  // testFunction(12) // This is wrong.
  testFunction("test"); // This is correct.

  // Function return type

  function testFunction2(data: string): string {
    // You can define return type.
    return "sample";
  }

  //const testResult:number = testFunction("test") // This is wrong. Not much return type
  const testResult: string = testFunction("test"); // This is correct.

  // Option parameters

  function testFunction3(data: string, last?: string): string {
    // Parameter of ? is option.
    if (!last) {
      last = "Nothing";
    }
    return data + last;
  }
  testFunction3("test", "Special");

  // Type Aliases

  type Data = {
    x: string;
    y: string;
  };

  function testFunction4(rd: Data): string {
    return rd.x + rd.y;
  }
  testFunction4({ x: "test", y: "2" });

  //HTML element
  // https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelement.html
}
