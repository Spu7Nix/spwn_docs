# Functions

In SPWN, what is in most programming languages called a "function" is divided into two different things: Trigger functions, and macros (also referred to as just "functions"). In short, the difference is that calling a trigger function is a [_runtime action_, while calling a macro is a _compile-time action_](compiletime.md).
In practice, this means that a macro has more features, like taking arguments and returning, while a trigger function is more _group efficient_ and _object efficient_.

## Calling Trigger Functions and Macros

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

If you want your macro to have an optional argument, you do so by providing a default value for that argument, like this:

```spwn
myfunc = (arg1, arg2 = 5) {/* code */}
```

`arg1` is positional and required, while `arg2` does not need to be specified since it has a default value.

Arguments passed in to a macro are immutable by default. If you want to modify values from an argument inside your macro, you will have to redefine it as mutable:

```spwn
myfunc = (arg1) {
    let arg1 = arg1
}
```

## Recursion

You can use recursion in macros, if you define them like this:

```spwn
recur = () {
    /* code */
    recur()
}
```

> **Note:** You can also define a macro like this
>
> `my_macro = (arguments) => expression`
>
> Or, for single-argument macros, like this
>
> `my_macro = argument=>expression`
>
> This will be equivalent to
>
> `my_macro = (arguments) {return expression}`

[**Next page**](triggerlanguage/4control_flow.md)
