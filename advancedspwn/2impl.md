# Implementing properties on datatypes

Sometimes, you want to have a property on every instance of a type. In those cases, you want to use the `impl` statement.
To understand how this can be used, we can look at the `@group` type. I'm sure you're familiar with `group.move(...)` by now, and this is how it is defined (roughly):

```spwn
impl @group {
    move: (self, x: @number, y: @number, ...) {
        $.add( trigger {
            OBJ_ID: 901,
            TARGET: self,
            ...
        })
    }
}
```

Let's look at this in more detail. The syntax for an `impl` statement is as follows:

```
impl [type indicator] [dictionary literal]
```

Every property defined in the dictionary literal will become a property of every instance of the type that is implemented on.

The first argument of the `move` macro in the example above is `self`. This is a special argument that refers to the parent value, hence the `10g` in `10g.move( ... )`.
