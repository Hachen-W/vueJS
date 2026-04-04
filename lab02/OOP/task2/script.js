function User(name, age) {
  this.name = name;
  this.age = age;
}


User.prototype.hello = function () {
  console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
};


const user1 = new User("Alex", 25);
user1.hello();
