console.log("hello");
console.log(typeof "string");
console.log(typeof 8);

function outer() {
  let fish = "what";
  let counter = 0;

  function inner() {
    counter++;
    return `${counter} ${fish}`;
  }

  return inner;
}

let fun = outer();

console.log(fun());
console.log(fun());
console.log(fun());

const obj = {
  name: "aki",
  age: 44,
  say: function () {
    console.log(`hello ${this.name}`);
  },
};

obj.say();

const makeBeer = (num) => {
  return "beer ".repeat(num);
};

const loveBeer = makeBeer(10);
console.log(loveBeer);

// function declaration or statement
function createBeer() {
  return "love beer";
}

// function expression
const hateBeer = function () {
  return "hate beer";
};

console.log(hateBeer());

const profile = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = (n) => {
      let nameArr = n.split(" ");
      this.firstName = nameArr[0];
      this.lastName = nameArr[1];
    };
    splitName(name);
  },
};

profile.setName("aki adilovic");
console.log(profile.firstName);
console.log(profile.lastName);
