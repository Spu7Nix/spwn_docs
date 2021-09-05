  
# **@complex**: 
 
## Constructors:

## **I**:

> **Value:** 
>```spwn
>(coef: @number = 1) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `coef` | @number | `1` | |
>

## **from\_polar**:

> **Value:** 
>```spwn
>(r, phi) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`r`** |any | | |
>| 2 | **`phi`** |any | | |
>

## **new**:

> **Value:** 
>```spwn
>(re, im = 0) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`re`** |any | | |
>| 2 | `im` |any | `0` | |
>

## **zero**:

> **Value:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## Macros:

## **abs**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **abs\_sq**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **acos**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **acot**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **acsc**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **arg**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **asec**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **asin**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **atan**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **conj**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **cos**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **cosh**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **cot**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **coth**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **csc**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **csch**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **exp**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **invert**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **ln**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **log**:

> **Value:** 
>```spwn
>(self, base: @complex | @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`base`** | @complex or @number | | |
>

## **phase**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **polar**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **print**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sec**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sech**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sin**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sinh**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sqrt**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **tan**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **tanh**:

> **Value:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## Operator Implementations:

## **\_add\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_assign\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_divide\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_divided\_by\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_equal\_**:

> **Value:** 
>```spwn
>(self, other: @complex | @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @complex or @number | | |
>

## **\_exponate\_**:

> **Value:** 
>```spwn
>(self, other: @complex | @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @complex or @number | | |
>

## **\_minus\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_mod\_**:

> **Value:** 
>```spwn
>(self, other: @complex | @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @complex or @number | | |
>

## **\_modulate\_**:

> **Value:** 
>```spwn
>(self, other: @complex | @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @complex or @number | | |
>

## **\_multiply\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_plus\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_pow\_**:

> **Value:** 
>```spwn
>(self, other: @complex | @number) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @complex or @number | | |
>

## **\_subtract\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>

## **\_times\_**:

> **Value:** 
>```spwn
>(self, other: @number | @complex) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | **`other`** | @number or @complex | | |
>
