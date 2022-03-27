# Compile-time and Runtime actions

If you have used a compiled language before, you may have heard of so-called "compile-time actions". Basically, compile-time actions is the stuff that happens to your code before it's converted to the compilation target, in this case, Geometry Dash triggers.

In most programming languages, compile-time actions are mostly for convenience, and not a major part of the language, but in SPWN, **almost everything it does is a compile-time action.**

This is because Geometry Dash triggers don't have the features necessary to run every action in a conventional programming language.

For example, in most languages _loops_ are a runtime action, or in other words, if you use a loop in your source code, there is also some kind of loop in the machine code that the compiler generates. In SPWN, the loop is a compile-time action.
In practice, this means that this:

```spwn
for i in 0..5 {
    10g.move(10, 10, 0.5)
}
```

Compiles to the exact same thing as this:

```spwn
10g.move(10, 10, 0.5)
10g.move(10, 10, 0.5)
10g.move(10, 10, 0.5)
10g.move(10, 10, 0.5)
10g.move(10, 10, 0.5)
```

_**Note:** Loops are possible to make in Geometry Dash, but it is not general enough to be the default SPWN loop. It is also possible to create runtime loops using SPWN, using the `for_loop` and `while_loop` macros from the standard library._
