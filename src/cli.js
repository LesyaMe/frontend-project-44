import readlineSync from 'readline-sync';

const name = readlineSync.question('Your answer: ');
export const sayHi = (name) => {
    console.log(name);
}