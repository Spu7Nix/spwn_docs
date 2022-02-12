# Built-in functions

Since we don't have to deal with the limits of Geometry Dash as much at compile-time, some useful new features of SPWN are now available to us. Many of these features can be found in the _Built-in functions_.

A built-in function, or a _builtin_, is a function that is written into the code of the SPWN compiler itself. That means that builtins are the gateway from SPWN to the rest of your system. All builtins in SPWN can be accessed using `$`. You can think of `$` as being a library containing all the builtins. For example, if I want to use the `print` builtin, I call it like this:

```spwn
$.print("hello")
```

_(click the "run" button in the top right corner of the code box to see the output)_

> **Note:** If you are planning on using a lot of builtins in your script, you should have a `extract $` near the top of your file. This makes it so that builtins can be accessed without using `$.` (so instead of `$.print("hello")`, you just do `print("hello")`)

When building a level, there is one thing that is very important to know how to do: Placing objects. To place objects in a level using SPWN, we use the `add` builtin.

# Adding objects to the level with `add`

When working with the `add` builtin, it is important to remember that it, like all other builtins, is a compile-time operation. You cannot add an object when you're already playing the level, it has to be done beforehand. Therefore, to avoid confusion, SPWN ensures that you add all your objects _before_ you start actually defining things that happen during the level's runtime. If you attempt to add an object in this period, you will get an error like this:

```
Error: Error when using built-in function
   ╭─[test\test.spwn:5:1]
   │
 5 │ ╭─▶ $.add(obj {
 9 │ ├─▶ })
   · │
   · ╰──────── you cannot add an obj type object at runtime
───╯
```

This is SPWN yelling at you that placing an object in that place in the code doesn't make any sense and that you should move it to somewhere in the code that happens before the level starts.

Anyways, you already know how to create objects from the previous chapter. To add them to your level, you can use the `add` builtin like this:

```spwn
extract obj_props

$.add(obj {
    OBJ_ID: 54,
    X: 300,
    Y: 90,
    SCALING: 1.5,
})
```

To see a list of all the builtins currently in SPWN, go [here](builtins.md)!

[**Next Chapter**](advancedspwn/advanced_spwn.md)
