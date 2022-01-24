# **@number**
?> Numbers are used to store numbers at compile time (if you want to have numbers at runtime, see [`@counter`](std-docs/counter) or [@item](std-docs/item))

## Macros

### abs

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the absolute value of the number_
>
>**Example:**
>
>```spwn
>$.assert((-1).abs() == 1)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>

### ceil

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the smallest integer greater than or equal to the number_
>
>**Example:**
>
>```spwn
>$.assert((1.5).ceil() == 2)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>

### clamp

>**Printed**
>
>```spwn
>(self, min: @number, max: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Constrains a number between two numbers_
>
>**Example:**
>
>```spwn
>$.assert(2.clamp(7,10) == 7)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `min` | [`@number`](std-docs/number) | | |
>| 2 | `max` | [`@number`](std-docs/number) | | |
>

### floor

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the largest integer less than or equal to the number_
>
>**Example:**
>
>```spwn
>$.assert((1.5).floor() == 1)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>

### lerp

>**Printed**
>
>```spwn
>(self, lower, higher) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the linear interpolation between the two numbers_
>
>**Example:**
>
>```spwn
>$.assert((0.7).lerp(0,2) == 1.4)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `lower` |any | | |
>| 2 | `higher` |any | | |
>

### log

>**Printed**
>
>```spwn
>(self, base = 2.718281828459045) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the logarithm of the number (default: natural logarithm)_
>
>**Example:**
>
>```spwn
>$.assert(2.log() == 0.6931471805599453)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `base` |any | `2.718281828459045` | |
>

### map

>**Printed**
>
>```spwn
>(self, istart: @number, istop: @number, ostart: @number, ostop: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Maps a number linearily from one interval to another_
>
>**Example:**
>
>```spwn
>$.assert(2.map(1, 4, 5, 11) == 7)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `istart` | [`@number`](std-docs/number) | | |
>| 2 | `istop` | [`@number`](std-docs/number) | | |
>| 3 | `ostart` | [`@number`](std-docs/number) | | |
>| 4 | `ostop` | [`@number`](std-docs/number) | | |
>

### ordinal

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the number in ordinal form_
>
>**Example:**
>
>```spwn
>$.assert(1.ordinal() == '1st')
>```
>
>
>**Returns:** 
>[`@string`](std-docs/string)
>

### round

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the nearest integer to the number_
>
>**Example:**
>
>```spwn
>$.assert((1.5).round() == 2)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>

### sqrt

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the square root of the number_
>
>**Example:**
>
>```spwn
>$.assert(4.sqrt() == 2)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>

### to\_fixed

>**Printed**
>
>```spwn
>(self, precision: @number = 0) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Turns the number into a string with the given precision_
>
>**Example:**
>
>```spwn
>$.assert(1.to_fixed(2) == '1.00')
>```
>
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `precision` | [`@number`](std-docs/number) | `0` | |
>

### to\_precision

>**Printed**
>
>```spwn
>(self, precision: @number = 0) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Turns the number to a specific precision_
>
>**Example:**
>
>```spwn
>$.assert((0.12345).to_precision(3) == 0.123)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `precision` | [`@number`](std-docs/number) | `0` | |
>

### wrap

>**Printed**
>
>```spwn
>(self, min: @number, max: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Wraps a number between two numbers_
>
>**Example:**
>
>```spwn
>$.assert(8.clamp(7,10) == 8 && 11.clamp(7,10) == 10)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `min` | [`@number`](std-docs/number) | | |
>| 2 | `max` | [`@number`](std-docs/number) | | |
>
