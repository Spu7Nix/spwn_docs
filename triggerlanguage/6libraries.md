# Libraries and Modules

## Libraries

One of the most essential aspects of writing code is shareability. If someone has written and shared the code you're trying to write, it's better to just use theirs than to try to write it yourself.

In SPWN, a library is essentially a bunch of code that runs when the library is imported. This code can also return some values, like macros and trigger functions which you can use in your own code.

To import a library, we use the `import` syntax:

```spwn
import my_favorite_library
```

Note that if this library returns a value, you will have to save that value in a variable if you want to use it later. Something like this:

```spwn
mfl = import my_favorite_library
```

A lot of the time, libraries will return a _dictionary_ of values. If `my_favorite_library` returned a dictionary with a macro member called `jump`, you could use it like this:

```spwn
mfl = import my_favorite_library
mfl.jump()
```

If you don't want to write `mfl.` all the time, you can use an `extract` statement to save all the members of the dictionary as variables in your own code:

```spwn
extract import my_favorite_library
jump()
```

## Modules

When your SPWN project starts to get big, you might want to start dividing your code into separate files. To do this, you can write a _module_. A module is the same thing as a library, except you import from a _path_, not from a library name.

Let's say I have some code in a file called `setup.spwn` that looks like this:

```spwn
// setup.spwn

// set background to black
BG.set(0,0,0)
// set invisible group
1g.alpha(0)
```

If I want to run it at the start of my main file (which is in the same directory as `setup.spwn`), I can simply write:

```spwn
import "setup.spwn"
```

This will run the code in `setup.spwn`.

Maybe I want to store the invisible group in a variable so that if I want to change it, I only have to change it in one place even though it's used a lot of places in my code. To do this, we can _return_ the group from `setup.spwn`.

```spwn
// setup.spwn

// set background to black
BG.set(0,0,0)
// set invisible group
invis_group = 1g
invis_group.alpha(0)

return invis_group
```

Now, if I want to use it in my main file, I can write:

```spwn
invis_group = import "setup.spwn"
```

If I want to import a file that is not in the current directory, you can use relative paths. So if you want to import a module that is in a subdirectory `foo`, then do

```spwn
invis_group = import "./foo/setup.spwn"
```

If it is in a parent or sibling directory, you can access with the conventional syntax of `..`

```spwn
invis_group = import "../in_parent.spwn"
```

Although this is not generally a best practice in most cases, unless possibly you're building a library with complex architecture.

# Installing new libraries

All SPWN libraries are read from a folder named _libraries_. When loading a library, SPWN will look for the library in any folder named "libraries" in either the current working directory, or next to the executable. If you want to install a library, it's probably a good idea to create a local "libraries" folder in your project directory, so that you have don't have to navigate to the executable. When you have the folder with the library you want to install, you can drag that folder into the "libraries" folder you just created. (Make sure to check that the library has a `lib.spwn` file in its root.)

Let's say I want to install a library named `mylib` and import it from my main file `main.spwn`. The folder structure may look something like this:

```
working-directory/
├─ main.spwn
├─ libraries/
│  ├─ mylib/
│  │  ├─ lib.spwn
```

In `main.spwn`, you can now import your library (without quotes):

```spwn
import mylib
```

?> _**Note:** SPWN Package managers are in the works, so this process may become a lot smoother in the future_

[**Next page**](triggerlanguage/7selectorpanel.md)
