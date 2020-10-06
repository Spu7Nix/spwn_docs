# The Arrow Statement

As you might remember, we used the arrow statament a bit earlier in this introduction to make to triggers happen at the same time.

```
-> 1g.move(0, 10, 0.5)
2g.move(0, 10, 0.5)
```

In this chapter i'll try to explain exactly how it works, and it's usecases.

> In short, the arrow statement makes the following statement not change the context (state) of the program.

Ok, thats a lot of states. Let's go over what this means.

## The "State" of a SPWN Program

First off, what is a state? In most programming languages, the state at a given point in a program is all the variables and their values stored by the program at that point. Here's what that would mean in a simple program:

```js
// Start of the program: The state is empty

let a = 10
// The state is now { a: 10 }

let b = 20
// The state is now { a: 10, b: 20 }

if (a + b == 30) {
  let c = 5
  // The state is now { a: 10, b: 20, c: 5 }

  a += c
  // The state is now { a: 15, b: 20, c: 5 }
}

// The state is now { a: 15, b: 20}
// Notice that the variable "c" gets deleted, since its out of scope
```

In SPWN, because it generates Geometry Dash triggers, it's state also stores one more thing: _the current spawned group_. Since the word "state" already means a specific thing, we'll call this combination of the variables and the spawned group the _**context**_ of the program.

> The "current spawned group" is the group in which any new triggers made by the program will be added into.

The _arrow statement_ prevents the context from changing by whatever comes after. Let's look at the example of the arrow statement again:

```
// The context's group is now group 10

// Because this macro adds a delay, the context gets changed
-> 1g.move(0, 10, 0.5) // context's group gets changed to group 11
// since this macro call is in an arrow statement, the group gets changed back to group 10

// This trigger happens at the same time as the last one, since they are in the same group
2g.move(0, 10, 0.5)

/*
After this macro, the context's group gets changed to group 12,
since it's not in an arrow statement
*/

```

> **Note:** Calling a function with `function!` never alters the state. You can think of it as always being in an arrow statement.

# Usecases

## Triggering in Parallel

This is the usecase you're already familiar with. There is also a way to run multiple triggers in parallel with the rest of the program, by creating a macro and immediatly calling it:

```
// macro definition: (){ /*code*/ }
// macro calling: macro()
// combined: (){ /*code*/ }()

-> (){
    10g.move(0, 50, 0.5, EASE_IN_OUT)
    10g.move(0, -50, 0.5, EASE_IN_OUT)
}()

for i in ..2 {
    11g.move(0, 50, 0.3, EASE_IN_OUT)
    11g.move(0, -50, 0.3, EASE_IN_OUT)
}
```

This will move group 10 up and down in 1 second, while at the same time moving group 11 up and down twice in 1.2 seconds.

> **Note:** Creating a function and immediatly calling it (` { /* code */ }!`) will have the exact same effect as the method we used, but creating a function consumes one extra group, so you should prefer creating a macro instead.

## Optimizing

One of the more advanced features of SPWN is _context splitting_. Basically, some macros change the context to more than one context, making it so all the rest of the statements affected will use n times the group IDs as it would otherwise (where n is the amount of contexts). Context splitting is extremely useful, but it is also dangerous. If you don't keep your context splitting under control, you might end up over the group limit. Luckly, the arrow statement is here to help! Since the arrow statement negates any new contexts produced, it also doesn't change the amount of contexts.

Context splitting is used a lot when dealing with the `counter` type, which you can read about in the next chapter!
