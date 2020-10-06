# The `counter` Type

`counter` is a type from the _standard library_, and is a wrapper around the item ID system in Geometry Dash. In practice, it works as a replacement for numbers. Since mutable variables are very limited in SPWN, this proves quite useful when you need to keep track of numbers throughout your program.

> **Note:** The `counter` type is written entirely in SPWN, with no cheaty help from the compiler whatsoever. If you want to look at the source code for the `counter` type, you can find it in the `counter.spwn` file in _standard library_.

# Creating a `counter`

The easiest way to create a counter is to use the `counter` macro. You can create it out of a number, a boolean or an item ID.

```
highscore = counter(100)
```

You can also create them like this, if you like that better:

```
highscore1 = @counter::new(100)

```

# Modifying a `counter`

The `counter` type has most operators implemented on it, which means you can use it like any other number!

```
score = counter(0)

score += 10
score -= 5
score *= 6
score /= 3
score = 0
```

> **Note:** The multiply `*=`, divide `/=` and assign `=` operators are not in Geometry Dash by default, and are therefore quite group-expensive. You should prefer using add `+=` and subtract `-=` when possible.
