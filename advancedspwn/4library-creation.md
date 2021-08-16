# Creating Libraries

## Set-Up

As was mentioned in [this](/triggerlanguage/6libraries.md#installing-new-libraries) section, libraries are stored in the `libraries` folder. In your working directory, create a `libraries` folder and in it add a folder named your desired library name.

This is how your setup would look (if your library was named `mylib`):

```
working-directory/
 ├── main.spwn
 └── libraries/
      └── mylib/
           └── lib.spwn
```

`lib.spwn` is the entry point for all libraries. When you import a library, this is the file that runs.
A library works exactly like a module. If your library looks like this:

```spwn
// lib.spwn

let num = 5

return num
```

You can import the library into another file like this:

```spwn
let n = import mylib

$.assert(n == 5)
```

## Building your library

If you're building a library, you often want to use multiple files. To do this, you can create multiple [modules](/triggerlanguage/6libraries.md#modules)

Let's say I have a macro in another file called `myfunc.spwn` and I want to export it from the library.
This is the folder structure:

```
working-directory/
 ├── main.spwn
 └── libraries/
      └── mylib/
           ├── lib.spwn
           └── myfunc.spwn
```

?> _**Note:** You can put folders and nest them in your `mylib`, just make sure to get the right path (remember that paths are relative to the file that's importing them)_

To export the macro from the entire library, you must first import it into `lib.spwn`:

```
// lib.spwn

let func = import "myfunc.spwn"

return func
```
