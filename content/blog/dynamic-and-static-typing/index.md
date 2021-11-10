---
title: "What are Dynamic and Static Typing?"
date: "2021-08-11T22:12:03.284Z"
description: "Comparing dynamic and static typing in programming languages"
---
Firstly, why are data types essential? They tell the computer how to represent data in a program, by designating a certain number of bytes for each data type. This also helps the computer understand which operations can be performed on a certain data type.

Type checking is when the type and usage of a variable is checked - this helps to minimise the number of type errors in a program.

Static is when type checking occurs during compile time. Dynamic is when type checking occurs during run time.

## Statically Typed Languages
Since the type is checked at compile time, this means that the data types are immutable once assigned.


However you can create your own data typed for example in OCaml :
```ocaml
type fruit = 
    Orange 
    | Apple
    | Banana
    | Mango
    | Papaya
```


## Dynamically Typed Languages
The type of each variable is identified during run time, which means that you do not have to specify the data type of each variable while writing the code. 
Data types are mutable as well.
<!-- ```py
let x = "hello"
``` -->


## Comparing the 2
Statically typed languages have a better performance at run time since there is no need for type checking. However, dynamically typed languages are faster during the developement time.

A language like OCaml actually has the best of both worlds, because it is statically typed but has type inference, so the programmer does not have to explicitly state the type each time.