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

## Methods

A macro such as `group.move` is an example of what we call a _method_, which is a macro that uses the value it is called on to do something. In the case of `group.move` it is using the group it is called on to move said group, through the `self` argument.

Here is an example of what a _method_ can do:

```spwn
impl @my_type {
    publicfunc: (self, arg) {
        // methods can access member variables
        $.print(self.var)

        self.var = 5 // methods can modify the value it's being called on (if that value is mutable)

        // methods can call other methods implemented on the type
        self.other_public_func()
    }
}
```

To call a method, you use a single period:

```
mygroup = 1g
mygroup.publicfunc(arg)
```

## Static Methods

In contrast to methods, static methods are not accessed by an instance of the type, but rather by the type itself. This is for macros which are related to the type in some way, but do not use a specific value with that type. To define a static method, you omit the `self` keyword:

```spwn
impl @group {
    staticfunc: (arg) {
        // cannot access members
        // $.print(self.var) will throw an error
        // $.print(self.other_public_func) will throw an error

        // can access other static methods and vars
        $.print(@group::static_var)
        @group::other_static_func()
    }
}
```

To use static methods, you use a double colon (`::`):

```spwn
@group::static_func()
$.print(@group::static_var)
```

## Constructors

A common use case for static methods is making _constructors_. These are macros that make a new instance of your type.

The convention for constructors in SPWN is `new`.

Here is an example of a constructor:

```spwn
type @rectangle
impl @rectangle {
    new: (width: @number, height: @number) {
        return @rectangle::{
            width,
            height,
        }
    }
}
```

[**Next page**](advancedspwn/4context-splitting.md)
