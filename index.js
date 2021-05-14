// Your code here

class Cat {
  constructor(name, sex){
    this.name =name;
    this.sex = sex;
  }
  speak(){
    return`${this.name} says meow!`
  }
}
 
class Dog {
    constructor(name, sex){
      this.name =name;
    this.sex = sex;
  }
    speak(){
    return`${this.name} says woof!`
  }
}
 
class Bird {
    constructor(name, sex){
      this.name =name;
      this.sex = sex;
  }
    speak(){
<<<<<<< HEAD
   if(this.sex === "male"){
     return`It's me! ${this.name}, the parrot!`
   }else{
     return`${this.name} says squawk!`
=======
   if(this.sex === male){
     return`It's me! ${this.name}, the parrot!`
   }else{
     return`${this.name} squawk!`
>>>>>>> 5c4e42616bae5491efa0a021a36774301c4ef92e
   }
  }
}