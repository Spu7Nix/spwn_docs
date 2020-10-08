# Control Flow

In SPWN, there are currently two _control flow_ statements avaliable: if statements and for loops

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

`iterator` is a list of elements to iterate over. If you want to iterate over a range of numbers, you can use the _range operator_:

```spwn
for i in 0..10 {
    // code
}
```

This will loop through a list starting at zero, and ending at 9, looping a total of 10 times.
