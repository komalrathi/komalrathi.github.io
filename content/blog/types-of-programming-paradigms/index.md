---
title: "What are the main programming paradigms?"
date: "2021-10-17T22:12:03.284Z"
description: "Comparing procedural, functional, object oriented, and event-driven programming"
---

## Procedural
Procedural programming is also known as imperative programming, and is when a program is made up of procedures (series of steps that are carried out in a specific order). 

It emerged in order to make a program easier to follow; by splitting the program up into procedures, spaghetti code could be avoided.
Procedural Programming follows a top-down approach, meaning the program is broken up into smaller modules that each carry out a specific task.

An example of a language that uses procedural programming is OCaml.
```ocaml
let x = ref 5;;
(* I have now created a box which has {contents = 5} *)
x := !x * 10;;
(* I have updated the contents of the box with 
the current value of x multiplied by 5. 
The box now has {contents = 50} *)
```

Pros:
- Uses less memory
- Code can be reused and it is easy to understand

Cons:
- There is no protection of data (keeping certain functions private) so developer has to follow good practice
- It is difficult to identify any global data, and the global data can be accessed and modified anywhere in the program (don't know where the value has been changed)

## Functional
Functional programming is declarative and builds a program using pure functions.
What are pure functions? They return the same output given a same input, and do not cause any observable side-effects. This condition means that they cannot rely on any external state or mutate any external state.
All data structures are immutable and functions are treated as first class objects.

An example of a language that uses functional programming is OCaml.
```ocaml
let rec map f = function
  | [] -> []
  | x::xs -> (f x)::(map f xs)

let rec filter f = function
  | [] -> []
  | x::xs -> 
  if f x then x::(filter f xs) 
  else filter f xs

let rec foldlr f i l = 
    match l with 
    [] -> i 
    |x::xs -> foldlr f (f(i, x)) xs;;

(* These 3 functions can be combined in many 
ways to create more powerful functions *)

let sum l = foldlr (+) 0 1
let length l = foldlr (fun x -> x+1) 0 1
let add2 l = map (fun x -> x+2) l
let filterevens l = filter (fun x -> x mod 2 = 0) l

```

Pros:
- Program is abstracted by using functions so easy to test and debug
- Uses parallel programming (eg. when you use map and then filter on a list)

Cons:
- Slower as generate larger amounts of short-lived garbage - this means that the program relies more on garbage collection (which takes time)
- Data types are immutable so even if only a small part of data structure is being changed, the whole data structure has to be duplicated first


## Object Oriented
For a more detailed look into how OOP works, check out my other [blog post](https://komalrathi.netlify.app/object-oriented-programming).


## Event Driven
In event driven programs, the program is written to respond to events. Events can be triggered by users, so it is important to ensure that the correct processing occurs.
Also, since the flow of the program is determined by events and events are triggered by a user, there is no way of knowing when and which order the events are triggered.

An example of event driven programming is in React. 
For example, for my icons on my homepage, I created a ```handleClick``` function and then referenced it in my constructor for the class. I then assigned the ```onClick``` , which is an example of an event, to the ```handleClick``` function. My function changed the icon depending on whether a mouse hovered over it and when it had been clicked.  
```jsx
constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

...

<button onClick = {this.handleClick}> </button>
```
Pros: 
- Allows programs to be interactive
- Allows hardware (eg. sensors) to easily interact with software


Cons:
- Difficult to debug
- Flow of program is harder to follow and less logical 


## Conclusion
Personally, my favourite programming paradigm is OOP. This is because you can hide and privatise data (encapsulation); you can also split the program up into separate classes (modularisation), making it easier to test and debug, and providing clear logical code. Plus, OOP follows the bottom-up approach, making it easier to solve complex problems.
