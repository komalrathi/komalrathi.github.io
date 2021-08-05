---
title: "What exactly are algorithms and data structures?"
date: "2021-08-06T22:12:03.284Z"
description: "Talking about algorithms and data structures in the context of Python"
---
## Algorithms

Firstly, what is an algorithm? It is simply a set of instructions; in the context of Computer Science, algorithms are used for solving problems as they provide step by step instructions for the computer to follow.

### Searching Algorithms


### Sorting Algorithms
#### Bubble Sort
A bubble sort algorithm starts at the beginning of a list and compares the consecutive elements
```py
def bubbleSort (list):
    for num in range (len(my_list)-1, 0, -1):
        for i in range (0, num):
            if my_list[i] > my_list[i+1]:
                temp= my_list[i]
                my_list[i] = my_list[i+1]
                my_list[i+1]=temp
```

#### Merge Sort
``` py
def mergeSort (list):
     if len(my_list) > 1:
       middle = len(my_list)//2
       righthalf = my_list[middle:]
       lefthalf = my_list[:middle]
       mergeSort(righthalf)
       mergeSort(lefthalf)
       i=0
       j=0
       k=0
       while i < len(lefthalf) and j < len(righthalf):
           if lefthalf[i] < righthalf[j]:
               my_list[k]=lefthalf[i]
               i=i+1
           else:
               my_list[k]=righthalf[j]
               j=j+1
           k=k+1
       while i < len(lefthalf):
           my_list[k]=lefthalf[i]
           i=i+1
           k=k+1
       while j < len(righthalf):
           my_list[k]=righthalf[j]
           j=j+1
           k=k+1
           return my_list
```

#### Insertion Sort
```py
def insertionSort (list):
    for num in range (1, len(my_list)):
        i = my_list[num]
        while num > 0 and my_list[num - 1] > i:
             my_list[num] = my_list[num-1]
             num = num-1
             my_list[num] = i
```

#### Quick Sort
```py
def quickSort (list):
    i=0
    j=i+1
    k= len(my_list)-1
    pivot=my_list[i]
    low_mark=my_list[j]
    high_mark=my_list[k]
    
    if low_mark <= pivot:
        temp = low_mark[j]
        low_mark[j]=low_mark[j+1]
        low_mark[j+1]=temp
    
    if high_mark >= pivot:
        temp = high_mark[k]
        high_mark[k]=high_mark[k-1]
        high_mark[k-1]=temp
    
    if high_mark <= pivot:
        break
    
    if low_mark >= pivot:
        break
```

#### Selection Sort
```py
def selectionSort (list):
    for num in range (0, len(my_list)):
        low = num
        for i in range(num+1, len(my_list)):
           if my_list[num] > my_list[i]:
               low = i
               temp = my_list[num]
               my_list[num] = my_list[low]
               my_list[low] = temp
```

### Orders of Growth & Big Oh Notation

Whenever someone creates a program, there has to be a balance between time and space efficiency.
The goal of using Orders of Growth is to express the growth of the program's run time as the input becomes very large in order to gauge the efficiency of the program.


Big Oh notation measures the upper bound of the asymptotic growth of the complexity of a program. It basically describes the worst case scenario when a program is run. It only evaluates the algorithm though, not the machine or the implementation.

When calculating the Big Oh value, the multiplicative and additive constants are ignored because only the dominant terms are focussed on.
For example, O(2n² + 2n) ---> O(n²) because n² is the dominant term. 

#### Complexity


## Data Structures



