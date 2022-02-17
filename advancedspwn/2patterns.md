# Patterns

Often when programming in SPWN, you run into a situation where you need to find out if a value matches a certain pattern. One way to do this is to use boolean expressions. For example, if you want to check if every value of an array is a positive number, you can do something like this:

```spwn
let array = [1, 2, 3]

$.print(array[0] > 0 && array[1] > 0 && array[2] > 0)
```

However, this can become quite tedious, and the result is often quite unreadable. Therefore, SPWN provides a new way to do this: **Pattern matching**.

---

There are many constructs in SPWN where patterns can be used, but the most simple one is the `is` operator.

?> _**Note:** A general `is` operator expression looks like this: `value is pattern`_

One of the most basic and useful patterns in SPWN are type indicators, which you can learn more about in the previous chapter. Here are some examples of how you can use type indicators as patterns:

```spwn
$.print(1 is @number) // true
$.print(1 is @string) // false
$.print([1] is @array) // true
```

The `|` operator can be used to combine multiple patterns into one, such that a value can match either of the patterns that were combined:

```spwn
// ` @number | @string` matches both strings and numbers

$.print(1 is @number | @string) // true
$.print("hello" is @number | @string) // true
$.print([1] is @number | @string) // false
```

## Comparison patterns

Most boolean operators (`==`, `!=`, `<`, `>`, `<=`, `>=`, `in`) can also be used as patterns:

```spwn
$.print(1 is ==1) // true
$.print(1 is >2) // false
$.print(10 is <20 | >30) // true
```

The `&` operator can be used to combine multiple patterns into one, such that a value must match both of the patterns that were combined:

```spwn
$.print(1 is ==1 & >2) // false
$.print(10 is >0 & <20) // true
$.print("hello" is @string & in "hello world") // true
```

You can wrap a pattern in `[]` brackets to make it match every element of an array:

```spwn
// the example from the start
let array = [1, 2, 3]

$.print(array is [>0]) // true
```

[**Next page**](advancedspwn/3impl.md)
