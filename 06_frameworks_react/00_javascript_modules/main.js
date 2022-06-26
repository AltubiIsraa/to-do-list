import {Square} from './modules/square.js';
import {Circle} from './modules/circle.js';

const square = new Square(3, 5);
const circle = new Circle(4);

console.log(square.area());
console.log(circle.area());
