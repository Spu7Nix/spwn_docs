# Control Flow

In SPWN, there are currently two _control flow_ statements available: if statements and for loops

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

> _**Note:** If you want a range with a different stepsize, for example 2, you can define it like this `0..2..10`. This will produce the values 0, 2, 4, and 8_

> _**Note:** Instead of writing `0..10` you can also just write `..10`_

## Trigger loops

While these loops are _compile-time loops_, there are also some runtime loops. The useful thing about these is that they only compile the code in the loop once, which means it will only use as many groups as is used in the loop (plus a few extra for the loop itself). The downside is that this changes the function context, which means you cannot change variables defined outside (except if you're using counters, which we'll get to in a few chapters).

The `for_loop` macro is the alternative to the native for loop, just in trigger-loop form. One of the limitations compared to the native for loop is that you cannot loop through an array, you have to use a range. Another limitation is that the `i` variable will not be a normal number, but rather a `counter`, which you will learn more about later.

```spwn
// example of for_loop in action

for_loop(0..10, (i) {
    10g.move(0, 50, 0.5)
    10g.move(0, -50, 0.5)
})

// will move group 10 up and down 10 times
```

> _**Note:** If you plan on only using your for loop only once in your program, you can add `reset = false` somewhere in your arguments, so it doesn't use extra groups resetting the counter (you can read more about all the options for this macro in the documentation for the standard library)_

I'm sure you're familiar with the concept of a _while loop_ from other programming languages. Even though there is no native while loop in SWPN (yet), there is a trigger loop for it: `while_loop`. This takes a _macro_ as its first argument, which is called on each loop, and should return a boolean. In this case, it's nice to use the shorter version of the macro syntax, which we looked at in the previous chapter.

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
