# Functions

In SPWN, what is in most programming languages called a "function" is divided into two different things: Trigger functions, and macros (also referred to as just "functions"). In short, the difference is that calling a trigger function is a [_runtime action_, while calling a macro is a _compile-time action_](compiletime.md).
In practice, this means that a macro has more features, like taking arguments and returning, while a trigger function is more _group efficient_ and _object efficient_.

## Calling Functions and Macros

Let's say we have a _trigger function_ called `do_thing`. To call it, we can say:

```spwn
do_thing!
```

If we have a _macro_ called `do_other_thing` (that takes no arguments), we can call it like this:

```spwn
do_other_thing()
```

# Defining Trigger Functions and Macros

In SPWN, both functions and macros are types of _values_, which means to define them, we can simply put them in a variable.

Defining a macro:

```spwn
/*
([arguments]) {[code]}
*/

my_macro = (argument1, argument2) {
    //code here
}
```

Defining a function:

```spwn
/*
!{[code]}
*/

my_function = !{
    //code here
}
```

> **Note:** You can also define a macro like this
>
> `my_macro = (arguments) => expression`
>
> This will be equivalent to
>
> `my_macro = (arguments) {return expression}`

[**Next page**](triggerlanguage/4control_flow.md)
