  
# **@zip**: 
 
## Constructors:

## **new**:

> **Printed:** 
>```spwn
>(iter1: @array | @string | @dictionary, iter2: @array | @string | @dictionary) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns a zip object_
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`iter1`** | @array or @string or @dictionary | | |
>| 2 | **`iter2`** | @array or @string or @dictionary | | |
>

## Operator Implementations:

## **\_as\_**:

> **Printed:** 
>```spwn
>(self, _type: @type_indicator) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Returns the dict version_
>### Example: 
>```spwn
> x = ['a', 'b', 'c']
>y = ['x', 'y', 'z']
>$.assert(@zip::new(x, y) as @dict == {a: 'x', b: 'y', c: 'z'})
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`_type`** | @type_indicator | | |
>
