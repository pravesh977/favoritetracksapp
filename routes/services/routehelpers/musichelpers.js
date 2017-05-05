function sayHello(req, res, next) {
console.log('services heleprse');
next();
};

module.exports = {
  sayHello: sayHello,
}