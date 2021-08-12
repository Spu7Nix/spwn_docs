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

## Public Methods

Public functions are called by the object, and can use the internal state, or member variables and functions. They are defined when you pass in the `self` keyword, which is essentially a *reference* to the object. 

An example would be 

```spwn
impl @group {
    publicfunc: (self, arg) {
        // can access member vars
        $.print(self.var)
        
        // can access member funcs
        self.other_public_func()
    }
}
```

Calling it uses the dot snytax, so

```
mygroup = 1g
mygroup.publicfunc(arg)
```

## Static Methods

Contrasting to public methods, static methods are not accessed by the type instance, but rather by the type itself. To define a static method, you omit the `self` keyword. Note that static methods cannot access member vars and functions, unless the instance is passed in.

An example would be 

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

To use static members, you use the `::` syntax.

```spwn
@group::static_func()
$.print(@group::static_var)
```

## Constructors

Constructors is how you instantiate a type. Unlike many other programming languages with a constructor naming rule, SPWN's constructors can be named anything, and types can have multiple constructors

The first thing to note is that they are *static*, so you have to omit the `self` keyword and also can't access member vars and methods.

The convention for constructors in SPWN is `new`. It's return value will be a dictionary of vars you want to pass in. For more information about creating new types refer to [here](/advancedspwn/1types.md)

An example would be

```spwn
type @mytype
impl @mytype {
    new: (arg1, arg2) {
        return {
            type: @mytype,
            arg1: arg1,
            arg2: arg2
        }
    }
}
```

Note you must *always* have the `type` key unless it can't access members

The instantiation would be

```spwn
instance = @mytype::new(arg1, arg2)
```

If you're building a module or library, you can export the constructor and all the other implemtations will still be defined.

```spwn
return {
    mytype: mytype::new
}
```

That way you can do constructors like this:

```spwn
mytype = import "mymodule.spwn"

instance = mytype(arg1, arg2)
```

This is how `counter` is exported. In the `std`'s `lib.spwn`, it has

```spwn
-> return {
    ..constants.easing_types,
    ..constants.comparisons,
    ..constants.colors,
    ..general,
    ..events,
    ..ctrl_flow,

    counter: @counter::new, // they are exporting the constructor
    on: @event::on,
    obj_props: constants.obj_props,
    obj_ids: constants.obj_ids,
    open: @file::new,
    obj_set: @obj_set::new,
    regex: @regex::new,
    heapq: @heapq::new
}
```

Even if you export just the constructor, the type and all members wil still be accessible in your main file.