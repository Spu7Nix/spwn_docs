# Datatypes in SPWN

A SPWN value's datatype always comes from it's `type` property. You can see this by printing out the `type` of different kinds of values:

```spwn
extract $

print(10.type)       // @number
print("hello".type)  // @string
print(10g.type)      // @group
print(10g.move.type) // @macro
print(!{}.type)      // @trigger_function
```

The value of the `type` property is called a _type indicator_, and is a value in and of itself. A type indicator always starts with a `@`, followed by the type name.

?> _**Note:** Since a type indicator is a value itself, you can also get it's type, for example `@number.type` will return `@type_indicator`_

# Custom types

A dictionary, by default, will have a type property of `@dictionary`. However, since you can set the members of a dictionary yourself, you can also set the `type` property, effectively changing the type altogether.

```spwn
my_number = {
    type: @number
}

// SPWN will now think my_number is a number, because my_number.type is @number
```

It is not that useful to set a dictionary to a type that already exists, though. What is more useful, is making your own type. You can declare a new type like this:

```spwn
type @person
```

This enables you to create new values with the type indicator `@person`.

```spwn
person = {
    type: @person,
    age: 17,
    name: "August",
}
```

This is a little fiddly to write though. Luckily, there is a much cleaner way of writing the same thing:

```spwn
person = @person::{
    age: 17,
    name: "August",
}
```

This is exactly the same value, just written differently. This also makes the value slightly more readable.

# Macro argument types

When making macros, you often want to limit what kind of values the arguments can be, to avoid confusing errors and behavior. You can do this by defining a set type for each argument like this:

```spwn
add = (a: @number, b: @number) {
    return a + b
}
```

If your argument can accept multiple types, you can use a `|` symbol:

```spwn
combine = (a: @number | @string, b: @number | @string) {
    return a + b
}
```

If you want the argument to be an array containing a specific type, you can do so with square brackets:

```spwn
sum = (numbers: [@number]) {
    let out = 0
    for n in numbers {
        out += n
    }
    return out
}
```

You can also combine all these elements to your hearts desire:

```spwn
my_crazy_macro = (arg: @number | [[@number] | @string]) {
    //...
}
```

?> _**Note:** The expression that goes after the `argument: ` is called a **pattern**, and is also it's own type. You can check if a value matches a pattern with the builtin `$.matches(value, pattern)`_
