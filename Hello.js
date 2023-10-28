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