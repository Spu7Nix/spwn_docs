# **@counter**
?> `counter` is a wrapper around the item ID system in Geometry Dash. In practice, it works as a replacement for numbers.
The difference between numbers and counters, is that counters can be modified in the level's runtime.

## Constructors

### new

>**Printed**
>
>```spwn
>(source: (((@number | @item) | @counter) | @bool) = 0, bits: @number = 16, reset: @bool = true) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a new counter_
>
>**Example:**
>
>```spwn
>@counter::new()     // creates a new counter with a starting value of 0
>@counter::new(10)   // creates a new counter with a starting value of 10
>@counter::new(5i)   // creates a new counter that uses item ID 5
>@counter::new(true)   // creates a new counter with a starting value of true (1)
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `source` | [`@number`](std-docs/number) or [`@item`](std-docs/item) or [`@counter`](std-docs/counter) or `@bool` | `0` |Source (can be a number, item ID or boolean) |
>| 2 | `bits` | [`@number`](std-docs/number) | `16` |Defines the maximum stable size of the counter. If the counter goes outside of the range from 0 to 2^size, it's behavior will be undefined. Smaller sizes are more group effective. |
>| 3 | `reset` | `@bool` | `true` |Resets the counter in case the item has been used before. This only applies if the `source` argument is not an item. |
>

## Macros

### add

>**Printed**
>
>```spwn
>(self, num: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the pickup trigger_
>
>**Example:**
>
>```spwn
>c = counter(10)
>c.add(10)
>// c is now 20
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) | |Amount to add |
>

### add\_to

>**Printed**
>
>```spwn
>(self, items: (([(@counter | @item)] | @counter) | @item), factor: @number = 1, for_each: (@number) -> @NULL = (n) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Adds the counter's value to a counter (or all counters in a list), and resets the counter to 0 in the process_
>
>**Example:**
>
>```spwn
>a = counter(100)
>b = counter(0)
>wait(1)
>a.add_to(b)
>// a is now 0, b is now 100
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `items` | an [`@array`](std-docs/array) of [`@counter`](std-docs/counter) or [`@item`](std-docs/item) elements or [`@counter`](std-docs/counter) or [`@item`](std-docs/item) | |Counter(s) to add to |
>| 2 | `factor` | [`@number`](std-docs/number) | `1` |Multiplier for the value added |
>| 3 | `for_each` | a `@macro` that returns `@NULL` and takes [`@number`](std-docs/number) as an argument | `(n) { /* ... */ }` |Macro to be called for each decrease of the counter. Takes one argument representing the number the counter is being decreased by |
>

### add\_to\_multifactor

>**Printed**
>
>```spwn
>(self, items: [[(@counter | @number)]]) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Like normal add_to, but each counter has its own factor_
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `items` | `[[(@counter \| @number)]]` | |Counter(s) to add to |
>

### clone

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
>_Copies the counter and returns the copy_
>
>**Example:**
>
>```spwn
>c1 = counter(100)
>c2 = c1.clone()
>// c1 and c2 are now 100
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>

### compare

>**Printed**
>
>```spwn
>(self, other: @counter, factor: @number = 1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns 0 if both counters are equal, 1 if the other is smaller, and -1 if the other is greater._
>
>**Example:**
>
>```spwn
>c1 = counter(10)
>c2 = counter(15)
>
>cmp = c1.compare(c2) // -1
>// c1 is now -5, c2 is now 0
>```
>
>
>**Returns:** 
>in [-1, 0, 1]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@counter`](std-docs/counter) | | |
>| 2 | `factor` | [`@number`](std-docs/number) | `1` | |
>

### copy\_to

>**Printed**
>
>```spwn
>(self, items: (([(@counter | @item)] | @counter) | @item), factor: @number = 1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Copies the value of the counter to another counter (or to all counters in a list), without consuming the original_
>
>**Example:**
>
>```spwn
>c1 = counter(100)
>c2 = counter(0)
>wait(1)
>c1.copy_to(c2)
>// both counters are now 100
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `items` | an [`@array`](std-docs/array) of [`@counter`](std-docs/counter) or [`@item`](std-docs/item) elements or [`@counter`](std-docs/counter) or [`@item`](std-docs/item) | |Counter(s) to copy to |
>| 2 | `factor` | [`@number`](std-docs/number) | `1` |Factor of to multiply the copy by |
>

### display

>**Printed**
>
>```spwn
>(self, x: @number, y: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a item display object that displays the value of the counter_
>
>**Example:**
>
>```spwn
>points = counter(0)
>points.display(75, 75)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `x` | [`@number`](std-docs/number) | |X pos of display in units (1 grid square = 30 units) |
>| 2 | `y` | [`@number`](std-docs/number) | |Y pos of display in units |
>

### divide

>**Printed**
>
>```spwn
>(self, divisor: (@counter | @number), remainder: (@counter | @item) = counter(?i, bits = 16)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Devides the value of the counter by some divisor_
>
>**Example:**
>
>```spwn
>c = counter(7)
>r = counter(0)
>wait(1)
>
>c.divide(2, remainder = r)
>// c is now 3, r is now 1
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `divisor` | [`@counter`](std-docs/counter) or [`@number`](std-docs/number) | |Divisor to divide by, either another counter (very expensive) or a normal number |
>| 2 | `remainder` | [`@counter`](std-docs/counter) or [`@item`](std-docs/item) | `counter(?i, bits = 16)` |Counter or item to set to the remainder value |
>

### multiply

>**Printed**
>
>```spwn
>(self, factor: (@counter | @number)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Multiplies the value of the counter by some factor (does not consume the factor)_
>
>**Example:**
>
>```spwn
>c = counter(5)
>wait(1)
>c.multiply(10)
>// c is now 50
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `factor` | [`@counter`](std-docs/counter) or [`@number`](std-docs/number) | |Factor to multiply by, either another counter (very expensive) or a normal number |
>

### reaches

>**Printed**
>
>```spwn
>(self, value: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an event for when the counter reaches a certain value_
>
>**Example:**
>
>```spwn
>c = counter(2)
>
>on(c.reaches(10), !{
>    BG.pulse(rgb8(0, 255, 0), fade_out = 0.5) // will pulse each time the counter becomes 10
>})
>```
>
>
>**Returns:** 
>[`@event`](std-docs/event)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `value` | [`@number`](std-docs/number) | |Value to reach |
>

### reset

>**Printed**
>
>```spwn
>(self, for_each: (@number) -> @NULL = (n) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Resets counter to 0._
>
>**Example:**
>
>```spwn
>c = counter(100)
>wait(1)
>c.reset()
>// c is now 0
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `for_each` | a `@macro` that returns `@NULL` and takes [`@number`](std-docs/number) as an argument | `(n) { /* ... */ }` |Macro to be called for each decrease of the counter. Takes one argument representing the number the counter is being decreased by |
>

### reset\_negative

>**Printed**
>
>```spwn
>(self, for_each: (@number) -> @NULL = (n) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Resets a negative counter to 0_
>
>**Example:**
>
>```spwn
>c = counter(-100)
>wait(1)
>c.reset_negative()
>// c is now 0
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `for_each` | a `@macro` that returns `@NULL` and takes [`@number`](std-docs/number) as an argument | `(n) { /* ... */ }` |Macro to be called for each decrease of the counter. Takes one argument representing the number the counter is being decreased by |
>

### subtract\_from

>**Printed**
>
>```spwn
>(self, items: (([(@counter | @item)] | @counter) | @item), factor: @number = 1, for_each: (@number) -> @NULL = (n) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Subtracts the counter's value from another counter (or all counters in a list), and resets the counter to 0 in the process_
>
>**Example:**
>
>```spwn
>a = counter(100)
>b = counter(70)
>wait(1)
>b.subtract_from(a)
>// a is now 30, b is now 0
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `items` | an [`@array`](std-docs/array) of [`@counter`](std-docs/counter) or [`@item`](std-docs/item) elements or [`@counter`](std-docs/counter) or [`@item`](std-docs/item) | |Counter(s) to subtract from |
>| 2 | `factor` | [`@number`](std-docs/number) | `1` |Multiplier for the value subtracted |
>| 3 | `for_each` | a `@macro` that returns `@NULL` and takes [`@number`](std-docs/number) as an argument | `(n) { /* ... */ }` |Macro to be called for each decrease of the counter. Takes one argument representing the number the counter is being decreased by |
>

### to\_const

>**Printed**
>
>```spwn
>(self, range: ([@number] | @range)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Converts the counter into a normal number (very context-splitting, be careful)_
>
>**Example:**
>
>```spwn
>c = counter(3)
>wait(1)
>10g.move(c.to_const(0..10) * 10, 0, 1)
>// group ID 10 moves 3 blocks
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
>| 1 | `range` | an [`@array`](std-docs/array) of [`@number`](std-docs/number) elements or [`@range`](std-docs/range) | |Array or range of possible output values |
>

### to\_const\_enclosed

>**Printed**
>
>```spwn
>(self, range: ([@number] | @range), closure: (@number) -> @NULL) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Converts the counter into a normal number that you can use within a macro_
>
>**Example:**
>
>```spwn
>c = counter(3)
>wait(1)
>c.to_const_enclosed(0..10, (c_const) {
>    10g.move(c_const * 10, 0, 1)
>})
>// group ID 10 moves 3 blocks
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `range` | an [`@array`](std-docs/array) of [`@number`](std-docs/number) elements or [`@range`](std-docs/range) | |Array or range of possible output values |
>| 2 | `closure` | a `@macro` that returns `@NULL` and takes [`@number`](std-docs/number) as an argument | |Closure where you can use the const value, should take the value as the first argument |
>

### to\_obj

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
>_Creates a item display object that displays the value of the counter_
>
>**Example:**
>
>```spwn
>points = counter(0)
>$.add( points.to_obj().with(obj_props.GROUPS, 5g) )
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>

## Operator Implementations

### \_add\_

>**Printed**
>
>```spwn
>(self, num: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the add (`+=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(10)
>c += 10
>// c is now 20
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_as\_

>**Printed**
>
>```spwn
>(self, _type: @type_indicator) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the as (`as`) operator_
>
>**Example:**
>
>```spwn
>c = counter(true)
>b = c as @bool
>// b is now true
>```
>
>
>**Returns:** 
>any
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `_type` | `@type_indicator` | | |
>

### \_assign\_

>**Printed**
>
>```spwn
>(self, num: ((@number | @counter) | @bool)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the assign (`=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(23)
>c = 42
>// c is now 42
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) or `@bool` | | |
>

### \_decrement\_

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
>_Implementation of the decrement (`n--`) operator. Does not return any value._
>
>**Example:**
>
>```spwn
>c = counter(10)
>c--
>// c is now 9
>```
>
>

### \_display\_

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
>_Formats the counter to a printable string_
>
>**Returns:** 
>[`@string`](std-docs/string)
>

### \_divide\_

>**Printed**
>
>```spwn
>(self, num: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the divide (`/=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(30)
>c /= 6
>// c is now 5
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_divided\_by\_

>**Printed**
>
>```spwn
>(self, num: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the divided by (`/`) operator_
>
>**Example:**
>
>```spwn
>c1 = counter(100)
>c2 = c1 / 10
>// c2 is 10
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_equal\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the equals (`==`) operator_
>
>**Example:**
>
>```spwn
>c = counter(42)
>eq = c == 42
>// eq is now true
>```
>
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_increment\_

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
>_Implementation of the increment (`n++`) operator. Does not return any value._
>
>**Example:**
>
>```spwn
>c = counter(10)
>c++
>// c is now 11
>```
>
>

### \_less\_or\_equal\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the less than or equal (`<=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(42)
>less_or_eq = c <= 42
>// less_or_eq is now true
>```
>
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_less\_than\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the less than (`<`) operator_
>
>**Example:**
>
>```spwn
>c = counter(42)
>less = c < 42
>// less is now false
>```
>
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_minus\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the minus (`-`) operator_
>
>**Example:**
>
>```spwn
>c1 = counter(10)
>c2 = c1 - 3
>// c2 is 7
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_mod\_

>**Printed**
>
>```spwn
>(self, num: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the modulus (`%`) operator_
>
>**Example:**
>
>```spwn
>c1 = counter(42)
>c2 = c1 % 10
>// c2 is 2
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_modulate\_

>**Printed**
>
>```spwn
>(self, num: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the modulate (`%=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(42)
>c %= 10
>// c is 2
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_more\_or\_equal\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the more than or equal (`>=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(42)
>more_or_eq = c >= 10
>// more_or_eq is now true
>```
>
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_more\_than\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the more than (`>`) operator_
>
>**Example:**
>
>```spwn
>c = counter(42)
>more = c > 10
>// more is now true
>```
>
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_multiply\_

>**Printed**
>
>```spwn
>(self, num: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the multiply (`*=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(5)
>c *= 6
>// c is now 30
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_not\_equal\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the not equal (`!=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(42)
>not_eq = c != 42
>// not_eq is now false
>```
>
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_plus\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the plus (`+`) operator_
>
>**Example:**
>
>```spwn
>c1 = counter(10)
>c2 = c1 + 10
>// c2 is 20
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_subtract\_

>**Printed**
>
>```spwn
>(self, num: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the subtract (`-=`) operator_
>
>**Example:**
>
>```spwn
>c = counter(20)
>c -= 5
>// c is now 15
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>

### \_swap\_

>**Printed**
>
>```spwn
>(self, num: @counter) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the swap (`<=>`) operator_
>
>**Example:**
>
>```spwn
>c1 = counter(23)
>c2 = counter(42)
>wait(1)
>c1 <=> c2
>// c1 is now 42, c2 is now 23
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `num` | [`@counter`](std-docs/counter) | | |
>

### \_times\_

>**Printed**
>
>```spwn
>(self, other: (@number | @counter)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the times (`*`) operator_
>
>**Example:**
>
>```spwn
>c1 = counter(10)
>c2 = c1 * 10
>// c2 is 100
>```
>
>
>**Returns:** 
>[`@counter`](std-docs/counter)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@number`](std-docs/number) or [`@counter`](std-docs/counter) | | |
>
