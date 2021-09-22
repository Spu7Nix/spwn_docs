  
# **@complex**: 
 
## Constructors:

## **I**:

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
>```spwn
>() { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## Macros:

## **abs**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **abs\_sq**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **acos**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **acot**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **acsc**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **arg**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **asec**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **asin**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **atan**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **conj**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **cos**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **cosh**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **cot**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **coth**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **csc**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **csch**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **exp**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **invert**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **ln**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **log**:

> **Printed:** 
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

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **polar**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **print**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sec**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sech**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sin**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sinh**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **sqrt**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **tan**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **tanh**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## Operator Implementations:

## **\_add\_**:

> **Printed:** 
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

> **Printed:** 
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

## **\_display\_**:

> **Printed:** 
>```spwn
>(self) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>

## **\_divide\_**:

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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

> **Printed:** 
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
