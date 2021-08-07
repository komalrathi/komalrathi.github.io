---
title: "What exactly are algorithms and data structures?"
date: "2021-08-07T22:12:03.284Z"
description: "Talking about algorithms and data structures in the context of Python"
---
## Algorithms

Firstly, what is an algorithm? It is simply a set of instructions; in the context of Computer Science, algorithms are used for solving problems as they provide step by step instructions for the computer to follow.

### Complexity
Whenever someone creates an algorithm, there has to be a balance between time and space efficiency.

The complexity of an algorithm is a way of comparing efficiency. It compares the efficiency relative to the size of the input.

There are two types of complexity:  
- Time complexity is the time taken for the algorithm/program to run.
- Space complexity is the amount of memory that the algorithm/program will use. 

Ideally, we would want the algorithm to run as fast as possible. However, this would increase the financial cost, so there has to be a balance.
The same applies for space complexity; using less memory requires a lower cost and also increases the number of different algorithms that are able to be run on the same hardware.

Ideally, you want a lower time complexity because this means that the algorithm will perform much better as the input size increases.
1. O(1) - constant ****(most efficient)****
2. O(log n) - logarithmic
3. O(n) - linear
4. O(n log n) - loglinear
5. O(nⁱ) - polynomial where i is a constant
6. O(eⁿ) - exponential ****(least efficient)****

Any algorithm that has a complexity of O(nⁱ) or better, is known as tractable. An algorithm with a complexity of O(eⁿ) or worse, is known as intractable.

For intractable problems, heuristic methods have to be chosen since they offer a reasonable time frame, even though the solutions are not entirely accurate. 

#### Orders of Growth
The goal of using orders of growth is to express the growth of the algorithm's run time as the input size varies in order to gauge the efficiency of the algorithm.

#### Big O Notation
Big O notation measures the upper bound of the asymptotic growth of an algorithm. It describes the worst case scenario when an algorithm is run. It only evaluates the algorithm though, not the machine or the implementation.

When calculating the Big O value, the multiplicative and additive constants are ignored. This is because the dominant term is focussed on since it will contribute more as input size becomes very large.

For example, O(2n² + 10n) --> O(n²) because n² is the dominant term. 

#### Big Ω Notation
Big Ω Notation is used to measure the lower bound of the asymptotic growth of an algorithm. It describes the best case scenario when an algorithm is run.


### Searching Algorithms
#### Linear Search
A linear search algorithm does not require the list to be sorted originally, and checks through all the elements until the one requested is found.
```py
def linearSearch(my_list,num):
    i = 0
    found = False
    while i < len(my_list) and not found:
        if my_list[i]== num:
            found = True
            break
        i = i+1
    
    return found
```
The complexity of a linear searching algorithm is O(n) since the algorithm checks every element.

#### Bisection Search
A bisection search algorithm requires for the list to be sorted in order to work. It uses a divide-and-conquer approach. 

A divide-and-conquer approach simply breaks down the original problem into manageable and solvable chunks, then merges all the chunks together in order to solve tthe original problem.

```py
def binarySearch (my_list,num):
    i=0
    found = False
    first = 0
    last = len(my_list)-1
    
    while first <= last and not found:
        midpoint = (first+last)//2
        if my_list[midpoint]==num:
            i = midpoint
            found = True
            break
        elif my_list[midpoint] <= num:
            first = midpoint + 1
        else:
            last = midpoint - 1 

    return i
    return found
```
A bisection sort algorithm has complexity O(log n). This is because the search is completed when n/2ⁱ = 1, where i is the number of steps, since the algorithm halves the list at each stage in order to find the required element.

However, because this algorithm requires for the list to be sorted originally, the true complexity also depends on the sorting algorithm chosen.

### Sorting Algorithms
#### Bubble Sort
A bubble sort algorithm starts at the beginning of a list and compares the consecutive pairs of elements in the list. It then swaps the elements so that the smaller element is the first in the pair. When the end of the list is reached, the algorithm goes back to the start of the list and repeats. The algorithm stops when no more swaps have to be made and the list is hence sorted.
```py
def bubbleSort (list):
    for num in range (len(my_list)-1, 0, -1):
        for i in range (0, num):
            if my_list[i] > my_list[i+1]:
                temp= my_list[i]
                my_list[i] = my_list[i+1]
                my_list[i+1]=temp
```
The complexity of a bubble sort algorithm is O(n²). This is because for a given input n, the algorithm has to make n comparisons the first time it goes through the list. Then it has to go through the list n times to make sure that it is sorted.


#### Insertion Sort
An insertion sort algorithm initially leaves the first element at index 0. Then the algorithm looks at the second element and compares it to the first element. If the second element is lower, the algorithm moves the second element so it is now at index 0 (and the original first element is at index 1). If not, the second element remains at index 1.
Then the third element is "extracted" and compared to the first and second elements, and then "inserted" into the correct index position. This process is repeated, with each of the elements being compared and then "inserted" into the correct index position in the list, until the whole list is sorted.

At the i-th step in the algorithm, the first i elements in the list are sorted; the remaining elements are unsorted but larger than the first i elements.
```py
def insertionSort (list):
    for num in range (1, len(my_list)):
        i = my_list[num]
        while num > 0 and my_list[num - 1] > i:
             my_list[num] = my_list[num-1]
             num = num-1
             my_list[num] = i
```
The complexity of an insertion sort algorithm is O(n²). This would occur if the list was originally in reverse order, as each element would have to be compared with the rest of the elements in the list.

#### Selection Sort
The first step in selection sort is to extract the minimum element in the whole list and then swap it with the element at index 0. Then the second-smallest element is "selected" and then swapped with the one at index 1. This process is repeated until the list is sorted.

Just like insertion sort, at the i-th step in the algorithm, the first i elements in the list are sorted. The remaining elements are unsorted but larger than the first i elements.
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
The complexity of a selection sort algorithm is O(n²), the same as insertion sort. 


#### Merge Sort
A merge sort algorithm uses a divide-and-conquer approach.

If the list has 0 or 1 elements, the list is already sorted.
However if the list contains more than one element, the list is split into 2 parts of equal size. 
In order to sort these 2 sublists, the sublists are spilt into half again. This process is repeated until there are n number of sublists (n being the number of elements in the original list) with each sublist only containing 1 element. 

Once this level is reached, pairs of consecutive lists are compared. The 2 consecutive lists are sorted and then merged, so that all the sublists now contain 2 elements each. Then the consecutive sublists are compared again; the first element of both consecutive sublists are compared and the smallest element is placed first, then second smallest etc. The sublists are then merged again. This process is repeated until the last 2 sublists have been merged, forming a sorted list.

One thing to mention is that when the sublists are being "built back up", they are sorted. 

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
The complexity of a merge sort algorithm is O(n log n). This is because the list is being divided into half at each recursive call until the sublists contain one element only, so this has a complexity of O(log n). Then at each recursive level has complexity O(n) since all the elements are being compared.


#### Quick Sort
In a quick sort algorithm, a value is selected as a pivot value. Then 2 position markers are chosen at the beginning and end of the list. The goal of quick sort is to move the elements in the list onto the correct side of the pivot value. 

So, all the elements smaller than the pivot value are moved to the left hand side of the pivot, and all the elements larger than the pivot value are moved to the right hand side of the pivot. This is also known as partitioning.

The 2 sublists then have a new pivot value chosen, and partitioning occurs again. This process is repeated until the sublists have all been recursively sorted.

There is no need to combine the sublists during quick sort because all the elements to the left of the pivot are sorted, and all the elements to the right of the pivot are sorted. This means that the whole list must be sorted. 

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
The complexity of a quick sort algorithm is O(n²), even though the average case is O(n log n). The complexity also becomes worse if bad pivot values are chosen.
However in practice, quick sort tends to outperform merge sort since it uses less memory, hence why it is preferred. 

In order to improve the complexity, a correct method should be chosen in order to select the pivot values. One of the best ways to do this, which also keeps complexity at O(n log n), is to use the median of medians method. 


## Data Structures
A data structure is simply a way of organising data in a program so that it is able to be proccessed efficiently.
Choosing the correct data structure is important as it will make the program more efficient and responsive.

There are 2 types of data structures: static and dynamic.
 - Static data structures have a fixed size which cannot change at run time (eg. an array)
 - Dynamic data structures is able to change its memory capacity, making it memory efficient (eg. a linked list)

 The memory required for dynamic data structures is acquired from a memory heap, which is the amount of memory allocated to a program at runtime.

1. Array
    - Data structure that holds certain number of elements of the same data type
    ```py
    myArr = [1,2,3,4,5]
    ```
    - Each position of the elements can be accessed directly using its index
    - Values stored in an array are mutable


2. Tuple
    - Ordered sequence of elements of variable data types
    - Immutable
    ```py
    myTuple = (54, "Hello World", 39)
    ```
    - Elements can be accessed by their index (like arrays)
    - Iterable


3. List
    - Ordered sequence
    - Elements can be accessed by their index
    ```py
    myList = [1,2,3,4,5]
    ```
    - Mutable
    - Iterable


4. Dictionary (Python)
    - Stores pairs of data together: key and value
    - Each key is unique
    - Using key allows direct access to items stored within the dictionary
    ```py
    myDict = {
        "student1" : "Alex",
        "student2" : "Bob",
        "student3" : "Charlie"
    }
    ```
    - Can be nested (have multiple dictionaries inside a dictionary)