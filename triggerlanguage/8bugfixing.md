# Bugfixing

Sometimes when building SPWN programs, problems can appear that are not yours nor SPWN's fault, but rather because GD triggers can be a bit inconsistent. Usually, the solution for this is to add some _delay_. This is usually done with the `wait` macro. Calling this macro with no arguments (`wait()`) will add a tiny bit of delay (0.05 seconds).

# Where to add delay

## Loops

GD does not like it when you activate a trigger with high frequency, and if it's triggered more than roughly 20 times per second, it will simply stop triggering. To prevent this, we have to add a little bit of delay between each time the trigger is activated. The `for_loop` and `while_loop` macros do this by default, but if you're making your own loop, something like this

```spwn
loop = !{
    // do something

    // start loop again
    loop!
}
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
```

## Reading and writing to counters/items

In SPWN, not all actions happen after the previous action is finished. If you do multiple actions that only require one trigger each, they will essentially happen at the same time.
