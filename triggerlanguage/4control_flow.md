# Control Flow

In SPWN, there are currently four _control flow_ statements available: if statements, ternary expressions, match statements, for loops, and while loops

## If statement

SPWN has a quite standard syntax for if-statements:

```spwn
if condition {
    // code
}

if condition {
    // code
} else {
    // code
}

if condition {
    // code
} else if other_condition {
    // code
} else {
    // code
}
```

## match statement

SPWN also supports match statements for pattern matching:

```spwn
match value {
    @number | @group: /* code */,
    =="my_value": /* code */,
    else: /* code */
}
```

To match the actual value, you can use a `==` pattern, which is made by putting a `==` before the value you match against.

You can also assign a value to the result of a match statement:

```spwn
let example_list = match example_val {
    @number: [example_val],
    @string: [example_val as @number],
    [@number]: example_val,
    else: throw "Unsupported type"
}
```

SPWN match statements are not exactly like match statements from other programming languages you may be familiar with. In SPWN, match statements are always _expressions_ which means they can be used anywhere an ordinary value could be. This also means that the branches of a match statement have to be expressions, not statements. Hence, you can not do this:

```spwn
// WRONG
match my_number {
    ==1:
        jump(1)
        if a == b {
            // ...
        }
    ==2:
        //...
    else:
       // ...
}
```

A workaround for this is to create a macro that you immediately call. This enables you to execute multiple statements in your match branches:

```spwn
// CORRECT
match my_number {
    ==1: () {
        jump(1)
        if a == b {
            // ...
        }
    }(),
    ==2: () {
        // ...
    } ()
    else: () {
       // ...
    } ()
}
```

## Ternary expression

For convenience, you can simplify an if-statement into an inline ternary expression:

```spwn
let value = option_1 if condition else option_2
```

Like the match statement, this is an _expression_, not a statement. Therefore, both branches must also be expressions.

## For loop

You can make a for loop in spwn like this:

```spwn
for i in iterator {
    // code
}
```

`i` is a variable that stores the current element of the iterator. You can use it inside the loop. This does not have to be named `i`, of course, it can be named anything you want.

`iterator` is either an array or a _range_. If you just want to loop a certain number of times, a _range_ is perfect:

```spwn
// range: start..end
// loops through all values from start (inclusive) to end (exclusive)

for i in 0..10 {
    // code
}
```

This will loop through a list starting at zero, and ending at 9, looping a total of 10 times.

?> _**Note:** If you want a range with a different stepsize, for example 2, you can define it like this `0..2..10`. This will produce the values 0, 2, 4, 6 and 8_

## While loop

SPWN syntax for while loop is nothing special:

```spwn
while condition {
    // code
}
```

Note that this is a _compile-time_ while loop. If you want something to loop during your level's runtime, you probably want to use a _runtime_ while loop, which you will learn about below.

## Trigger loops

While the loops above are _compile-time loops_, there are also some runtime loops. The useful thing about these is that they only compile the code in the loop once, which means it will only use as many groups as is used in the loop (plus a few extra for the loop itself). The downside is that this changes the function context, which means you cannot change variables defined outside (except if you're using counters, which we'll get to in a few chapters).

The `for_loop` macro is the alternative to the native for loop, just in trigger-loop form. One of the limitations compared to the native for loop is that you cannot loop through an array, you have to use a range. Another limitation is that the `i` variable will not be a normal number, but rather a `counter`, which you will learn more about later.

```spwn
// example of for_loop in action

for_loop(0..10, (i) {
    10g.move(0, 50, 0.5)
    10g.move(0, -50, 0.5)
})

// will move group 10 up and down 10 times
```

Just like for loop, while loop also has a trigger loop version: `while_loop`. This takes a _macro_ as its first argument, which is called on each loop, and should return a boolean. In this case, it's nice to use the shorter version of the macro syntax, which we looked at in the previous chapter.

```spwn
// example of while_loop in action

// creating a counter, which you will learn about soon
// just think of it as a normal number for now
num = counter(256)

// we want to loop while num is more than 50,
// so our condition macro should be () => num > 50

while_loop(() => num > 50, (){
    num /= 2
})

// this will divide num by two until it is less than 50, when it will exit the loop
// num now equals 32
```

[**Next page**](triggerlanguage/5counter.md)
