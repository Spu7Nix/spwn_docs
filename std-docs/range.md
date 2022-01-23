# **@range**

## Macros

### reverse

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
>_Reverses the range._
>
>**Example:**
>
>```spwn
>let range = 10..5..50
>$.assert(range.reverse() == 50..5..10)
>```
>
>
>**Returns:** 
>[`@range`](std-docs/range)
>
