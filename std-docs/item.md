# **@item**
?> Item IDs are references to numbers that exist during the runtime of a Geometry Dash level. 
Items are used to store information that is changed during the level's runtime in an unpredictable way, like information about user input.

## Macros

### add

>**Printed**
>
>```spwn
>(self, amount: @number) { /* ... */ }
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
>10i.add(5)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `amount` | [`@number`](std-docs/number) | |Amount to add |
>

### count

>**Printed**
>
>```spwn
>(self, hits: @number, multi: @bool = true) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of a count trigger (returns an event)_
>
>**Example:**
>
>```spwn
>on(4i.count(3), !{
>    BG.set(rgb(0, 0, 0))
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
>| 1 | `hits` | [`@number`](std-docs/number) | | |
>| 2 | `multi` | `@bool` | `true` | |
>

### if\_is

>**Printed**
>
>```spwn
>(self, comparison: @comparison, other: @number, function: @trigger_function) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the instant count trigger_
>
>**Example:**
>
>```spwn
>10i.if_is(EQUAL_TO, 5, !{
>    BG.pulse(rgb8(255, 0, 0), fade_out = 0.5)
>})
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `comparison` | [`@comparison`](std-docs/comparison) | |Comparison mode |
>| 2 | `other` | [`@number`](std-docs/number) | |Number to compare with |
>| 3 | `function` | `@trigger_function` | |Target function if comparison is 'true' |
>

## Operator Implementations

### \_range\_

>**Printed**
>
>```spwn
>(self, other: @item) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Implementation of the range operator (`..`) for item IDs_
>
>**Example:**
>
>```spwn
>for item in 1i..10i {
>    item.add(10)
>}
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `other` | [`@item`](std-docs/item) | | |
>
