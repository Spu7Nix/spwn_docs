# **Attributes**

## Script Attributes
Attribute which will affect how the compiler behave while compiling a script
| Attributes        | Description                                        |
|-------------------|----------------------------------------------------|
| #[no_std]         |                                                    |
| #[cache_output]   | Prevent a module to executed more than once on one session |
| #[console_output] | Makes the script print the created level into the console instead of writing it to your save file |
| #[no_level]       | Only compiles the script, no level creation at all |

## Documentation Attributes
Attribute which are read by SPWN automatic docs generator to fill the documentation
| Attributes        | Argument  | Description                                               |
|-------------------|:---------:|-----------------------------------------------------------|
| #[constructor]    | none      | Used to mark a method as constructor                      |
| #[desc()]         | string    | Used to add a description to a method and its argument    |
| #[example()]      | string    | Used to add an example to a method                        |

# *Example*

## Documentation Attributes
Here are an example taken from counter.spwn 
```spwn
. . .
impl @counter {

    new: #[constructor, desc("Creates a new counter") example("
@counter::new()     // creates a new counter with a starting value of 0
@counter::new(10)   // creates a new counter with a starting value of 10
@counter::new(5i)   // creates a new counter thaat uses item ID 5
@counter::new(true)   // creates a new counter with a starting value of true (1)
    ")] (
        #[desc("Source (can be a number, item ID or boolean)")] source: @number | @item | @bool = 0,
        #[desc(
            "Defines the maximum stable size of the counter. If the counter goes outside of the range from 0 to 2^size, it's behavior will be undefined. Smaller sizes are more group effective."
        )] bits: @number = DEFAULT_BITS,
        #[desc("Resets the counter in case the item has been used before. This only applies if the `source` argument is not an item.")] reset: @bool = true,
    ){
        . . .
```
# *Output :*

## Constructors:

## **new**:

> **Printed:** 
>```spwn
>(source: @number | @item | @bool = 0, bits: @number = 16, reset: @bool = true) { /* code omitted */ }
>``` 
>**Type:** `@macro` 
>## Description: 
> _Creates a new counter_
>### Example: 
>```spwn
> @counter::new()     // creates a new counter with a starting value of 0
>@counter::new(10)   // creates a new counter with a starting value of 10
>@counter::new(5i)   // creates a new counter thaat uses item ID 5
>@counter::new(true)   // creates a new counter with a starting value of true (1)
>```
>## Arguments:
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `source` | @number or @item or @bool | `0` |Source (can be a number, item ID or boolean) |
>| 2 | `bits` | @number | `16` |Defines the maximum stable size of the counter. If the counter goes outside of the range from 0 to 2^size, it's behavior will be undefined. Smaller sizes are more group effective. |
>| 3 | `reset` | @bool | `true` |Resets the counter in case the item has been used before. This only applies if the `source` argument is not an item. |
>
