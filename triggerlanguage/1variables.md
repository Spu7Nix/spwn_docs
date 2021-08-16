# Variables

Since you can't really print `Hello, world!` to the console using Geometry Dash triggers, we're going to get straight into the main features of SPWN, the first of which being **variables**.

**In SPWN, variables are defined like this:**

```spwn
// let [variable name] = [value]

let a = 10
let b = 60
let c = a + b
```

When referencing the variables' values, these will work as in any other programming language, however, when trying to change the value of variables in SPWN, they are quite limited. Therefore, most variables you make in SPWN will be _constant_. For convenience, you can define constant variables like this:

```spwn
// [variable name] = [value]

a = 10
b = 60
c = a + b
```

?> _**Note:** There is no case when using SPWN where you **have** to use constant variables, but it is seen as good programming etiquette to only let your variables be mutable when needed._

?> _**Note:** When you need a mutable variable, you will most likely be using a ["counter"](triggerlanguage/5counter.md) from the standard library, which is a wrapper around the item ID system in Geometry Dash. There will be more on this in a couple of pages._

# SPWN Values

So, what kind of stuff can you put in your variables? Well, a lot of different things.
Some value types are ones you might be familiar with from other languages:

```spwn
num = 10

text = "Hello, I'm a string!"

array = [1, 2, 3]

boolean = true

dictionary = {
    a: 1,
    b: 2,
    c: 3
}
```

These values can be used as you would in any other programming language.

Here are some examples:

```spwn
num = -(1000 * 1000) / 10 // -100000

name = "Spu7Nix"
text = "Hello, my name is " + name + "!"

let array = [1, 2, 3]
my_number = array[2] // 3

array.push(4) // after this, the array will now be [1, 2, 3, 4]

boolean = true
boolean2 = !boolean // false

let dict = {
    a: 1,
    b: 2,
    c: 3
}

a = dict.a // 1
dict.d = 4 //inserts a new key "d" with a constant value of 4 into dict
let dict.e = 5 //inserts a new key "e" with a mutable value of 5 into dict
let dict['f'] = 6 // indexing is also supported for adding to dictionaries
```

?> _**Note:** To see a list of all the operators in SPWN, go [here](operators.md)_

## IDs

In SPWN, there are also values that that are useful specifically when making Geometry dash levels:

```spwn
group = 10g // group 10
color = 10c // color 10
item  = 10i // item-ID 10
block = 10b // collision block-ID 10
```

These values are called `ID`s, and are extremely essential. Any time you want to get some actual output in your levels, you will use these. Sometimes you want to point to a specific `ID`, for example if you have already made a player-character in the editor and you want to move it around. However, if that's not the case, and you will only be referencing these values inside your code, you won't need to know what `ID` you're using. In that case you can use this `?` notation:

```spwn
group = ?g // some group
color = ?c // some color
item  = ?i // some item-ID
block = ?b // some collision block-ID
```

_You can think of this as being the same as pressing the "next free" button when adding a group to an object, except you won't know its value_

These are all the value types you need to worry about for now.

[**Next page**](triggerlanguage/2basic_triggers.md)
