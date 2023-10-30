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

//QUESTION

// const obj11 = {'key11': 1, "key12": 2, "key13": 1000}

// const { key11, key13} = { ...obj11}



// console.log(key11, key13)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



const obj11 = {'key1': 50, "key2": 2, "key3": 60}

let { key1, key3} = obj11



key1 = 20;

key3 = 123

console.log(obj11.key1, obj11.key3)


//
const arr1 = ['value1', 'value2']

const [ val1, val2 ] = arr1



console.log(val1)

console.log(val2)



//

function delayPrint(letter, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(letter);
        resolve();
      }, delay);
    });
  }
  
  async function printSequence() {
    await delayPrint('a', 1000);
    await delayPrint('b', 1000);
    await delayPrint('c', 1000);
    await delayPrint('d', 1000);
    await delayPrint('e', 1000);
  }
  
  printSequence();
  
