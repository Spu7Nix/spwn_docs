# Basic triggers

Alright, lets actually make our SPWN program do something. Triggers in SPWN are made by calling a macro, usually on an id.

?> _**Note:** In SPWN, a macro is the same thing as what you would usually call a "function" in other programming languages, but in SPWN, the word "function" may be confused with another thing called a **trigger function**, so we will use the term "macro" here_

As you probably know, to move objects in Geometry Dash, you move the _group_ the objects are in. If you wanted to, say, move group 5 ten units on the x-axis in 0.5 seconds, you would add a move trigger with those settings. In SPWN we do it like this:

```spwn
// group.move(x, y, [duration], [easing type], [easing rate])
5g.move(10, 0, 0.5)
```

The `move` macro doesn't actually just call a move trigger, it also adds a delay of whatever you set your duration to. This means that this code

```spwn
1g.move(0, 10, 0.5)
2g.move(0, 10, 0.5)
```

will result in that group 1 moves up for 0.5 seconds, and then, when group 1 is done moving, group 2 will move up for 0.5 seconds.

This is useful for a lot of cases, but sometimes you also want to move two groups at the same time. In this case, we want to use an arrow statement. You can think of the arrow statement as saying "don't wait for this macro to finish, just move on to the next statement". If we want to move both group 1 and 2 at once, this is how you would do it:

```spwn
-> 1g.move(0, 10, 0.5) // "don't wait for me!"
2g.move(0, 10, 0.5)
```

There are, of course, a lot more triggers than just the move trigger. To find the macro for any specific trigger you want to use, check out the [_SPWN Standard Library Documentation_](std-docs/std-docs.md)

[**Next page**](triggerlanguage/3functions.md)
