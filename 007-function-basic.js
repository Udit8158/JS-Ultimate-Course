function sayHello(name) {
  return `Hello ${name}`;
}

const sayHelloToUdit = sayHello("Udit");
console.log(sayHelloToUdit);

const sayHelloArrowFunction = (params) => {
  return `Hello -> ${params}`;
};

const sayHelloToUditByArrow = sayHelloArrowFunction("Udit");
console.log(sayHelloToUditByArrow);
