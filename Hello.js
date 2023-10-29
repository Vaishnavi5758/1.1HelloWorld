console.log("Hello from node js");



const c = (a,b) =>a*b;

console.log(c(5,6));


const student =
{
    name : 'vaishnavi',
    surname :'patil',

    info(){
        console.log('Hi my name is' + this.name +this.surname); //this refers to global scope hence if we use arrow fun here, 
        //it wont takr local values, hence we used simple function defn
    }
}
student.info();


const originalArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const transformedArray = originalArray.map(item => {
  if (item.trim() === '') {
    return 'empty string';
  } else {
    return item;
  }
});

console.log(transformedArray);

//QUESTION
const obj1 = {'key1': 1}
const obj2 = { ...obj1}
if(obj2 === obj1){
console.log('same objects')
}
else{
console.log('different objects')
}

//QUESTION
const obj3 = {'key1': 1 , 'key2' : 2}

const obj4 = { ...obj3, key1: 1000}



console.log(obj3)

console.log(obj4)