# The `counter` Type

`counter` is a type from the _standard library_, and is a wrapper around the item ID system in Geometry Dash. In practice, it works as a replacement for numbers. Since mutable variables are very limited in SPWN, this proves quite useful when you need to keep track of numbers throughout your program.

> **Note:** The `counter` type is written entirely in SPWN, with no cheaty help from the compiler whatsoever. If you want to look at the source code for the `counter` type, you can find it in the `counter.spwn` file in _standard library_.

# Creating a `counter`

The easiest way to create a counter is to use the `counter` macro. You can create it out of a number, a boolean or an item ID.

```spwn
highscore = counter(100)
```

You can also create them like this if you like that better:

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

Again, these operators are implemented on the `counter` type like any other number, which means you can use them as you would normally.

```spwn
if my_counter == 0 {
    // do something
}

else if my_counter > 5 {
    // do something else
}

else if my_counter < 3 {
    // do something else
}

// and so on for <=, >= and != as well

```

# Converting a `counter` to a Normal Number

In most cases, having a normal number is more practical than having a `counter`. However, converting a counter to a normal number is quite limited, and also quite expensive.

To convert a counter to a normal number, you use the `to_const` macro. This macro takes one argument, which is a list or range of values the counter may have. The more values this list/range includes, the more groups this macro will use. Here is an example of this macro in practice:

```spwn
num = my_counter.to_const(0..10)

// now you can use it like a regular number
10g.move(num, 0, 0.5)
```

[**Next page**](triggerlanguage/6libraries.md)
