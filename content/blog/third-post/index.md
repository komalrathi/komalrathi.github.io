---
title: "What is Object Oriented Programming?"
date: "2021-08-10T22:12:03.284Z"
description: "Comparing the way OOP is used in Python and JavaScript"
---

Object Oriented Programming allows a programmer to access data in the form of an object, rather than long blocks of code.

Classes contain attributes and methods. They represent general cases and share similar attributes, hence acting like a blueprint. Methods are functions which are defined in the class, and describe the behaviour of the object.
Specific cases of classes can then be used containing unique values, and these are known as objects.

It is beneficial because it allows long lines of code to be structured into classes, which are reusable sections of code. 
Also, it makes the code easier to debug, as classes are self-contained. 

## Defining a class and creating an object

### Python

Here is an example of a class I've created. 
```py
class Person(object):
    def __init__(self, name, age, town):
        self.name= name
        self.age= age
        self.town = town
```

In order to create an object, you have reuse the class, input the specific information, and assign it to a variable.
```py
newPerson = Person(Komal, 18, Birmingham)
```
I now have created an object that I can easily access later on. 

### Javascript

In original JavaScript, there was no option to create a class. Instead, an object had to be defined each time. 
```js
let person = {name:"Komal", age:18, town:"Birmingham};
```
Alternatively, a function could be used, called, and then declared by assigning to a variable. 
```js
function createNewPerson(name,age,town) {
    return {name,age,town}
}
let firstObj = createNewPerson ("Komal", 18, "Birmingham");
```

However this became difficult for programmers as for large objects, they had to redefine every object from scratch. Also there were limitiations to using a function in order to mimic a class.

So in ES6, classes were introduced. In order to add a "method" to a class, functions are assigned to the property.

To refer to a property in an object, use the keyword ```this```. 

```js
class Person {
    constructor (name,age,town) {
        this.name = name
        this.age = age
        this.town = town
    }
    sayHello() {
        console.log(` Hello ${this.name}! `);
    }
}
``` 
In order to create an object and then call the function (which is mimicking a method) :
```js
let komal = new Person("Komal", 18, Birmingham);
komal.sayHello ();
```

## Principles

There are 4 main principles of OOP. 
### 1. Encapsulation

> This is the binding together of attributes, which is the data, and methods, which are the functions. This is in order to hide the implementation details so that the data is kept private, and can only be accessed by using the methods declared in the class description. This means that if the code is public, other users can use the class and modify it without causing a negative effect elsewhere in the program. 

### 2. Abstraction

> This is the concept that one does not need to know how an object works or what the code behind it is. They only need to know the methods relevant to the object that can be called. For example, we don't need to know how a coffee machine works; we simple need to know how to use it in order to get coffee out.

### 3. Inheritance

> When a child class is derived from a parent class, this forms a hierachy. This allows the programmer to reuse the code from the parent class, while adding some more extra information in the child class to make it unique and more specific.


#### Python
```py
class Person(object):
    def __init__ (self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName

class Student(Person):
    def __init__(self, firstName, lastName, yearGroup):
        super().__init__(firstName, lastName)
        self.yearGroup = yearGroup

class Teacher(Person):
    def __init__(self, firstName, lastName, subject):
        super().__init__(firstName, lastName)
        self.subject = subject
```

#### JavaScript
```js
class Person {
    constructor (name,age,town) {
        this.name = name
        this.age = age
        this.town = town
    }
}
class Student extends Person {
    constructor (name,age,town,yearGroup) {
        super(name,age,town);
        this.yearGroup = yearGroup
    }
}
class Teacher extends Person {
    constructor (name,age,town,subject) {
        super(name,age,town);
        this.subject = subject
    }
}
```

### 4. Polymorphism

> This is when the method associated with a class will show different behaviours depending on how the method was invoked. It is a useful way to use a class exactly how the parent class is used, just invoking the methods associated with the child class. For example, one class could be used to calculate the area of a shape. But the methods of each child class will need to be different depending on what type of shape is inputted (eg. one method for the area of a circle, another for the area of a triangle etc).

There are 2 ways for polymporphism to work. One is method overriding, and the other is method overloading.

#### Method Overriding
This is when a child class's method is able to override the overarching parent class method. 

##### Python
```py
class Person(object):
    def __init__ (self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName
    def hello(self):
        print("I am a person")

class Student(Person):
    def __init__(self, firstName, lastName, yearGroup):
        super().__init__(firstName, lastName)
        self.yearGroup = yearGroup
    def hello(self):
        print(f"I am a student in year {self.yearGroup}")


class Teacher(Person):
    def __init__(self, firstName, lastName, subject):
        super().__init__(firstName, lastName)
        self.subject = subject
    def hello(self):
        print(f"I am a teacher who teaches {self.subject}")
```
The method specificed in the child class should have the same name as the method in the parent class. 

```py
firstStudent = student("Komal", "Rathi", 13)
firstStudent.hello()
```

##### JavaScript
For JavaScript, if you want to keep the parent method, use ```super``` in front of the method to call it. If you want to add another method, simply add it after. 
```js
class Person {
    constructor (name,age,town) {
        this.name = name
        this.age = age
        this.town = town
    }
    sayHello() {
        console.log(`Hello I am ${this.name} from ${this.town}!`);
    }
}
class Student extends Person {
    constructor (name,age,town,yearGroup) {
        super(name,age,town);
        this.yearGroup = yearGroup
    }
    sayHello() {
        super.sayHello();
        console.log(`I am a student in year ${this.yearGroup}`);
    }
}
class Teacher extends Person {
    constructor (name,age,town,subject) {
        super(name,age,town);
        this.subject = subject
    }
    sayHello() {
        super.sayHello();
        console.log(`I am a teacher who teaches ${this.subject}`);
    }
}
```

#### Method Overloading
This is when multiple methods are defined with the same name and the method called is dependent on the input parameter.

However Python and JavaScript are unable to support method overloading. This is because the overloading occurs at compiling time, but Python and JavaScript are both dynamically typed languages. 


## Comparing OOP in JavaScript and Python
