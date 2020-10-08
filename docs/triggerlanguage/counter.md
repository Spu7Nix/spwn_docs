# The `counter` Type

`counter` is a type from the _standard library_, and is a wrapper around the item ID system in Geometry Dash. In practice, it works as a replacement for numbers. Since mutable variables are very limited in SPWN, this proves quite useful when you need to keep track of numbers throughout your program.

> **Note:** The `counter` type is written entirely in SPWN, with no cheaty help from the compiler whatsoever. If you want to look at the source code for the `counter` type, you can find it in the `counter.spwn` file in _standard library_.

# Creating a `counter`

The easiest way to create a counter is to use the `counter` macro. You can create it out of a number, a boolean or an item ID.

```spwn
highscore = counter(100)
```

You can also create them like this, if you like that better:

```spwn
highscore1 = @counter::new(100)

```

# Modifying a `counter`

The `counter` type has most operators implemented on it, which means you can use it like any other number!

```spwn
score = counter(0)

score += 10
score -= 5
score *= 6
score /= 3
score = 0
```

> **Note:** The multiply `*=`, divide `/=` and assign `=` operators are not in Geometry Dash by default, and are therefore quite group-expensive. You should prefer using add `+=` and subtract `-=` when possible.

> **Note:** You can add, multiply, divide and assign `counter`s to other `counter`s, however, this is even more group expensive.

# Testing the Value of a `counter`

Again, these operators are implemented on the `counter` type like any other number, which means you can use them as you would normally. However, **all of these split the context in two**, so you have to be careful. Here's an example of what you should **not** do.

```spwn
my_counter = counter(1)
my_group = ?g

// divides the context in two
if my_counter == 0 {
    my_group.move(10, 0, 0.5)
}

// there are now 2 contexts
//divides both contexts in two

if my_counter == 1 {
    my_group.move(10, 0, 0.5)
}

// there are now 4 contexts

if my_counter == 2 {
    my_group.move(10, 0, 0.5)
}

// there are now 8 contexts

// this macro will now be executed 8 times,
// consuming 8 times as many groups
// as it would otherwise!
my_group.move(10, 0, 0.5)

```

We can start optimizing this by adding `else if` statements. Since a `counter` can't be two values at once, we only have to check if it is a certain value if we know its not some other value.

```spwn
my_counter = counter(1)
my_group = ?g

//divides the context in two
if my_counter == 0 {
    my_group.move(10, 0, 0.5)
}
// there are now 2 contexts
// divides one of the contexts in 2
else if my_counter == 1 {
    my_group.move(10, 0, 0.5)
}
// there are now 3 contexts
// divides one of the contexts in 2
else if my_counter == 2 {
    my_group.move(10, 0, 0.5)
}
// there are now 4 contexts
my_group.move(10, 0, 0.5)

```

However, this is still not perfect. Ideally, we want to have no context splitting after the operation at all. The easiest way to do this is with an arrow statement:

```spwn
my_counter = counter(1)
my_group = ?g

// the arrow statement negates any context changes
// by the following statement
-> if my_counter == 0 {
    my_group.move(10, 0, 0.5)
} else if my_counter == 1 {
    my_group.move(10, 0, 0.5)
} else if my_counter == 2 {
    my_group.move(10, 0, 0.5)
}
// since the arrow statement also removes any delay,
// we'll have to add it manually
wait(0.5)
// if the delay was different in the different cases of the if statement,
// we would have to use the previous method if we wanted to preseve delay

// there is now only 1 context!
my_group.move(10, 0, 0.5)
```

# Converting a `counter` to a Normal Number
