var a1 = {name: "Amuthesh",age: 23};
var a2 = {name: "Abishek",age: 18};

if (a1.age > a2.age) {
    console.log(a1.name + " is older, age: " + a1.age);
  } else if (a2.age > a1.age) {
    console.log(a2.name + " is older, age: " + a2.age);
  } else {
    console.log(a1.name + " and " + a2.name + " are of the same age.");
  }