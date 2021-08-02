# Creating Libraries

## Set-Up

As was mentioned in [this](/triggerlanguage/6libraries.md#installing-new-libraries) section, libraries are stored in the `libraries` folder. In your working directory, create a `libraries` folder and in it add a folder named your desired library name. 

If I want to create a library named `mylib`, I would have this

```
working-directory/
 ├── main.spwn
 └── libraries/
      └── mylib/
```

Then, add a `lib.spwn` file in your library folder, like this

```
working-directory/
 ├── main.spwn
 └── libraries/
      └── mylib/
           └── lib.spwn
```

`lib.spwn` is the file that gets run when you import its library, and it is what returns what you want your library to return. If our main file was called `main.spwn` like above, then to export a variable you can do as such

`lib.spwn`

```spwn
let num = 5

return num
```

`main.spwn`

```spwn
let n = import mylib

$.assert(n == 5)
```

## Building your library

Odds are, you won't want to place all you code in a single file. This is where modules come in. Put your other spwn files that you need inside the `mylib` folder, and in `lib.spwn` you can import them so you can have full access to your library. Remember that your other source files are modules, which means you import them with quotes

Let's say I placed a function in another file called `myfunc.spwn` and I want to export it. This would be the architecture

```
working-directory/
 ├── main.spwn
 └── libraries/
      └── mylib/
           ├── lib.spwn
           └── myfunc.spwn
```

Note: You can put folders and nest them in your `mylib`, just make sure to get the right path (remember that paths are relative to the file that's importing them) 

`lib.spwn`

```
let func = import "myfunc.spwn"

return func
```

## Exporting Libraries

Take your library folder, in this case named `mylib`, and upload it. If you want to know how to import libraries, see [this](/triggerlanguage/6libraries.md)

Note: When a working package manager gets created, this process will be smoother.
