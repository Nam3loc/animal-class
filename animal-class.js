/*
Start here.  If you reply with your github link to the file, i will look at it and give you feedback

1. Make an animal class:

2. include 3 properties and 3 methods

3. At a minimum, have one method console.log something and have one method change a property
	You do not need to instantiate the animal class

4. Create a mammal class that is a child of the animal class	

5. override at least one of the methods in the parent class, also modify or add 2 properties
	
6. create 2 instance of the mammal class and demonstrate the methods and log the properties

7. Create a dog class that is a child of the mammal class
	
8.add a new method called greet() that takes in another dog's name and outputs a greeting and at least one new property, if name is not already a property, add it
	
9.create an array of 5 dogs, and iterate through the array, demonstrating one of the methods and logging at least one property
		
*** Try demonstrating greet() by having the current dog greet the next dog (the last one can greet the first dog)
	
	
	
Try having default paramters and some properties that are not set in the constructor
	
You can also try having one of the methods invoked in the constructor
*/

class Animal {
    constructor(animalType, hungry = "Ready to eat", size){
        this.animalType = animalType;
        this.hungry = hungry;
        this.size = size;
    }
    potty(){
        console.log("Time to tinkle");
    }
    sleep(){
        console.log("I need a nap");
    }
    eat(){
        let food = "food";
        if(food === true){
            return ("yummy");
        }else{
            return ("I want food");
        }
    }
}

class Mammal extends Animal {
    constructor(name, hairColor, animalType, hungry, size){
        super(animalType, hungry, size)
        this.name = name;
        this.hairColor = hairColor;
    }
    potty(){
        console.log("Owner, I need to go out to the bathroom");
    }
}

const dog = new Mammal("Spike", "golden", "golden retriever", "always hungry", "large");
const cat = new Mammal("Toby", "black", "kitten", "I want human food", "small");

// console.log(dog);
// console.log(cat);

// dog.potty();
// cat.sleep();
// console.log(dog.eat());

class Dog extends Mammal {
    constructor(name, hairColor, animalType, size, hungry, age){
        super(name, hairColor, animalType, size, hungry)
        this.age = age;
    }
    greet(){
        console.log(`Hi ${this.name}`);
    }
}

let dog1 = new Dog("Ashe", "red", "golden retriever", "give food", "medium", 3);
let dog2 = new Dog("Kai", "brown", "weiner dog", "so hungry", "small", 11);
let dog3 = new Dog("Garen", "black", "spaniel", "I never eat", "small", 5);
let dog4 = new Dog("Jinx", "grey", "weimerauner", "I only eat human food", "large", 2);
let dog5 = new Dog("Darius", "white with black dots", "dalmation", "give me a steak", "medium", 4);

let dogShelter = [dog1, dog2, dog3, dog4, dog5]

    // for(let i = 0; i < dogShelter.length; i++){
    //     console.log(dogShelter[i]);
    // }

    for(let i = 0; i < dogShelter.length; i++){
        (dogShelter[i].greet());
    }