# SPWN

**Welcome to the SPWN language documentation!**

First off, let's get to know the basic workflow of using SPWN.
SPWN is designed so that you can work in the editor and in SPWN at the same time, using the editor for it's strengths, and SPWN for it's.

> To "compile" your SPWN program, you use the command `spwn build [file]`, where `[file]` is the path to your SPWN script.
> This command will do the following:
>
> - Read your levels contents
> - Compile your SPWN program to Geometry Dash objects, making sure to not have them interfere with the things that are already in your level.
> - Append the new objects onto your level

To be clear, you do NOT have to delete and remake your level when running `spwn build` on it, it will automatically remove any old SPWN objects from the level before writing new ones. `spwn build` will by default run on the level _at the top of your levels list_. If you want it to run on a specific level, you can use the flag `--level-name [name in qoutation marks]`. For example: `spwn build script.spwn --level-name "my level"`

> **Note:** The standard file ending for SPWN scripts is `.spwn`

The first part of this documentation is an introduction to the features of SPWN, divided into courses. Read the [Trigger Language](triggerlanguage/trigger_language.md) course to get started!
