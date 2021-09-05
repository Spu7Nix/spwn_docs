  
# **@number**: 
 
## Macros:

## **constrain**:

> **Value:** 
>```spwn
>(self, min: @number, max: @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Constrains a number between two numbers_
>### Example: 
>```spwn
> $.assert(2.constrain(7,10) == 7)
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`min`** | @number | | |
>| 2 | **`max`** | @number | | |
>

## **map**:

> **Value:** 
>```spwn
>(self, istart: @number, istop: @number, ostart: @number, ostop: @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Maps a number linearily from one interval to another_
>### Example: 
>```spwn
> $.assert(2.map(1, 4, 5, 11) == 7)
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`istart`** | @number | | |
>| 2 | **`istop`** | @number | | |
>| 3 | **`ostart`** | @number | | |
>| 4 | **`ostop`** | @number | | |
>
