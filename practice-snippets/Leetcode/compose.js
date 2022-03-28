const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = (string) => string.substring(0, 6);
const reverse = (string) => string.split('').reverse().join('');

const pipe = (...functions) => (value) =>{
      return functions.reduce((accumulator,current) => {
        return current(accumulator)
      },value)
}
const pipeFn = pipe(getName,uppercase,get6Characters,reverse)({name:'Buckethead'});
console.log(pipeFn,'....')