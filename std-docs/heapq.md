  
# **@heapq**: 
 
## Macros:

## **heapify**:

> **Value:** 
>```spwn
>(self, root: @number = -1) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `root` | @number | `-1` |What node to start heaping |
>

## **new**:

> **Value:** 
>```spwn
>(arr: @array = [], comp: @macro = (a, b) { /* code omitted */ }, tiebreak: @macro = (a, b) { /* code omitted */ }) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Creates a new priority queue_
>### Example: 
>```spwn
> let newheap = @heapq::new([5])
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `arr` | @array | `[]` |The vanilla array |
>| 2 | `comp` | @macro | `(a, b) { /* code omitted */ }` |Comparator function (hueristic default to minheap) |
>| 3 | `tiebreak` | @macro | `(a, b) { /* code omitted */ }` |When sifting down, how to determine which node to replace if both are viable |
>

## **pop**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **push**:

> **Value:** 
>```spwn
>(self, val) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`val`** |any | |Value to push into stack |
>

## **top**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>
