  
# **@item**: 
 
## **\_range\_**:

> **Value:** 
>```spwn
>(self, other: @item) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @item | | |
>

## **add**:

> **Value:** 
>```spwn
>(self, amount: @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of the pickup trigger_
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`amount`** | @number | |Amount to add |
>

## **count**:

> **Value:** 
>```spwn
>(self, number: @number = 0) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of the count trigger (-> returns an event)_
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `number` | @number | `0` |Number to check against |
>

## **if\_is**:

> **Value:** 
>```spwn
>(self, comparison: @comparison, other: @number, function: @trigger_function) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Implementation of the instant count trigger_
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`comparison`** | @comparison | |Comparison mode || 2 | **`other`** | @number | |Number to compare with || 3 | **`function`** | @trigger_function | |Target function if comparison is 'true' |
>
