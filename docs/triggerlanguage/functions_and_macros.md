# Funtions and Macros

In SPWN, what is in most programming languages called a "function" is divided into two different things: Functions, and macros. In short, the difference is that calling a function is a [_runtime action_, while calling a macro is a _compile-time action_](compiletime.md).
In practice, this means that a macro has more features, like taking arguments and returning, while a function is more _group efficient_ and _object efficient_.

## Calling Functions and Macros

Let's say we have a _function_ called `do thing`. To call it, we can say:

```
do_thing!
```

If we have a _macro_ called `do_other_thing` (that takes no arguments), we can call it like this:

```
do_other_thing()
```

# Defining Functions and Macros

In SPWN, both functions and macros are types of `values`, which means to define them, we can simply put them in a variable.

Defining a macro:

```
/*
([arguments]) {[code]}
*/

my_macro = (argument1, argument2) {
    //code here
}
```

Defining a function:

```
/*
{[code]}
*/

my_function = {
    //code here
}
```
