# Bugfixing

Sometimes when building SPWN programs, problems can appear that are not yours nor SPWN's fault, but rather because GD triggers can be a bit inconsistent. Usually, the solution for this is to add some _delay_. This is usually done with the `wait` macro. Calling this macro with no arguments (`wait()`) will add a tiny bit of delay (0.05 seconds).

# Where to add delay

## Loops

GD does not like it when you activate a trigger with high frequency, and if it's triggered more than roughly 20 times per second, it will simply stop triggering. To prevent this, we have to add a little bit of delay each time the trigger is activated. The `for_loop` and `while_loop` macros do this by default, but if you're making your own loop, something like this

```spwn
loop = !{
    // do something

    // start loop again
    loop!
}
// start the loop
loop!
```

you will have to add a bit of delay between each loop, like this:

```spwn
loop = !{
    // do something

    // delay
    wait()
    // start loop again
    loop!
}
// start the loop
loop!
```

## Reading and writing to counters/items

In SPWN, not all actions happen after the previous action is finished. If you do multiple actions that only require one trigger each, they will essentially happen at the same time.
This can cause some problems when working with counters, for example in this case:

```spwn
c = counter(10)

if c == 10 {
    c -= 3
} else {
    c += 100000
}

```

This might seem innocent, but there is a major flaw with this code. The check for if `c` is _equal_ to 10, and the check for if it is _not equal_ to 10, happens at basically the same time. This means that there might be a situation where `c` is 10, so it subtracts 3, but then after subtracting 3, since `c` is no longer 10, the else clause runs, and it adds 100000. The solution to this is to add a little bit of delay to each clause, to make sure both the possibilities are checked **before** any changes have been made to the values being checked. Something like this:

```spwn
c = counter(10)

if c == 10 {
    wait()
    c -= 3
} else {
    wait()
    c += 100000
}

```

### Going Forward

It looks like you've read through the entire basic section of the docs! Good job! Why don't you try an [example project](projects/selectorpanel.md) or maybe you're ready to move on the the [advanced spwn](/advancedspwn)
