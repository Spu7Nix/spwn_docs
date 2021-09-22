# **Attributes**

## Script Attributes

| Attributes          | Description                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| `#[no_std]`         | Prevents the compiler from importing the standard library                                         |
| `#[cache_output]`   | Prevents a module from being executed more than once                                              |
| `#[console_output]` | Makes the script print the created level into the console instead of writing it to your save file |
| `#[no_level]`       | Only compiles the script, no level creation at all                                                |

These attributes tell the compiler how it should handle a certain file. They are placed at the very start of the file it applies to.

## Documentation Attributes

| Attributes        | Argument | Description                                           |
| ----------------- | -------- | ----------------------------------------------------- |
| `#[constructor]`  | none     | Used to mark a method as constructor                  |
| `#[desc(...)]`    | string   | Used to add a description to a macro and its argument |
| `#[example(...)]` | string   | Used to add an example to a macro                     |

These attributes are used to generate documentation for a library or a module. They are placed before the value they describe.
To generate documentation for a library/module, use the command `spwn doc [library/module path]`

# _Example_

## Documentation Attributes

Here are an example of how documentation is generated from some code (taken from `std/counter.spwn`)

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

# _Output Documentation: (`counter.md`)_

## **new**:

> **Printed:**
>
> ```spwn
> (source: @number | @item | @bool = 0, bits: @number = 16, reset: @bool = true) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Creates a new counter_
>
> ### Example:
>
> ```spwn
> @counter::new()     // creates a new counter with a starting value of 0
> @counter::new(10)   // creates a new counter with a starting value of 10
> @counter::new(5i)   // creates a new counter thaat uses item ID 5
> @counter::new(true)   // creates a new counter with a starting value of true (1)
> ```
>
> ## Arguments:
>
> | #   | name     | type                      | default value | description                                                                                                                                                                         |
> | --- | -------- | ------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | 1   | `source` | @number or @item or @bool | `0`           | Source (can be a number, item ID or boolean)                                                                                                                                        |
> | 2   | `bits`   | @number                   | `16`          | Defines the maximum stable size of the counter. If the counter goes outside of the range from 0 to 2^size, it's behavior will be undefined. Smaller sizes are more group effective. |
> | 3   | `reset`  | @bool                     | `true`        | Resets the counter in case the item has been used before. This only applies if the `source` argument is not an item.                                                                |
