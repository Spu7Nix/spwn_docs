# **@file**

## Constructors

### new

>**Printed**
>
>```spwn
>(path: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a new file IO object_
>
>**Example:**
>
>```spwn
>@file::new('C:/path/to/file.txt')
>```
>
>
>**Returns:** 
>[`@file`](std-docs/file)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `path` | [`@string`](std-docs/string) | |Path to file (at the moment this is only stable with absolute paths) |
>

## Macros

### read

>**Printed**
>
>```spwn
>(self, s = -1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Reads the data in the file from the seek position to the end (or for a specified amount of characters)_
>
>**Example:**
>
>```spwn
>data = @file::new('data.txt').read()
>```
>
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `s` |any | `-1` | |
>

### seek

>**Printed**
>
>```spwn
>(self, s: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Sets a position in the file to read from_
>
>**Example:**
>
>```spwn
>f = @file::new('data.txt')
>f.seek(10)
>data = f.read(5) // reads characters 10 to 15
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `s` | [`@number`](std-docs/number) | | |
>
