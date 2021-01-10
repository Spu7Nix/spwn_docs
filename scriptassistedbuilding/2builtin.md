# Built-in functions

Since we don't have to deal with the limits of Geometry Dash as much at compiletime, some useful new features of SPWN are now available to us. Many of these features can be found in the _Built-in functions_.

A built-in function, or a _builtin_, is a function that is written into the code of the SPWN compiler itself. That means that builtins are the gateway from SPWN to the rest of your system. All builtins in SPWN can be accessed using `$`. You can think of `$` as being a library containing all the builtins. For example, if I want to use the `print` builtin, I call it like this: `$.print("hello")`.

> **Note:** If you are planning on using a lot of builtins in your script, you can type `extract $`. This makes it so that builtins can be accessed without using `$.` (so instead of `$.print("hello")`, you just do `print("hello")`)

When building a level, there is one thing that is very important to know how to do: Placing objects. To place objects in a level using SPWN, we use the `add` builtin.

When working with the `add` builtin,
