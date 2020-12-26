# Functions and Macros

In SPWN, what is in most programming languages called a "function" is divided into two different things: Functions, and macros. In short, the difference is that calling a function is a [_runtime action_, while calling a macro is a _compile-time action_](compiletime.md).
In practice, this means that a macro has more features, like taking arguments and returning, while a function is more _group efficient_ and _object efficient_.

## Calling Functions and Macros

Let's say we have a _function_ called `do_thing`. To call it, we can say:

```spwn
do_thing!
```

If we have a _macro_ called `do_other_thing` (that takes no arguments), we can call it like this:

```spwn
do_other_thing()
```

# Defining Functions and Macros

In SPWN, both functions and macros are types of `values`, which means to define them, we can simply put them in a variable.

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
{[code]}
*/

my_function = {
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

# Returning values from macros

While you can't return anything from a function, you can from a macro, using the _return statement_. This statement works a little differently in SPWN than you might be used to from other programming languages. In most languages, a return statement returns a value and exits the function. In SPWN, it _does_ return a value, but it does not exit the macro. If you have more code after your return statement, it will keep executing that code while at the same time executing the code after your macro call. To avoid this, you can add a _break statement_ after your return statement. This will exit the macro immediately.

```spwn
is_sum_too_big = (num1, num2) {
    sum = num1 + num2
    if sum > 10 {
        return true
        break
    }

    // this code will only be executed if sum <= 10
    10g.move(0, 50, 0.5)
    return false
}

is_sum_too_big(5, 6) // true

is_sum_too_big(3, 4) // false, and group 10 moves
```
