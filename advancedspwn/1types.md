# Datatypes in SPWN

A SPWN value's datatype always comes from it's `type` property. You can see this by printing out the `type` of different kinds of values:

```spwn
extract $

print(10.type)       // @number
print("hello".type)  // @string
print(10g.type)      // @group
print(10g.move.type) // @macro
print(!{}.type)      // @trigger_function
print([5, 6].type)   // @array
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

$.print(add(2, 2)) // 4
$.print(add("hello ", "world")) // error
```

If your argument can accept multiple types, you can use a `|` symbol:

```spwn
combine = (a: @number | @string, b: @number | @string) {
    return a + b
}

$.print(combine(2, 2)) // 4
$.print(combine("hello ", "world")) // "hello world"
```

[**Next page**](advancedspwn/2patterns.md)
