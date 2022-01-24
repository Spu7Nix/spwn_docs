# **@string**
?> Strings are used to store text at compile time.

## Macros

### contains

>**Printed**
>
>```spwn
>(self, substr: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Checks if the string contains a string._
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `substr` | [`@string`](std-docs/string) | | |
>

### ends\_with

>**Printed**
>
>```spwn
>(self, substr: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Checks if the string starts with a string._
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `substr` | [`@string`](std-docs/string) | | |
>

### find

>**Printed**
>
>```spwn
>(self, re: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `re` | [`@string`](std-docs/string) | | |
>

### find\_all

>**Printed**
>
>```spwn
>(self, re: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[[@number]]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `re` | [`@string`](std-docs/string) | | |
>

### fmt

>**Printed**
>
>```spwn
>(self, subs) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a formtted version of the string. Accepts either a single argument or an array_
>
>**Example:**
>
>```spwn
>name1 = 'bob'
>name2 = 'alice'
>$.assert('hi {}'.fmt(name1) == 'hi bob')
>$.assert('hi {} and {}'.fmt([name1, name2]) == 'hi bob and alice')
>$.assert('hi {1} and {0}'.fmt([name1, name2]) == 'hi alice and bob')
>$.assert('{} has {} apples'.fmt([name1, 5]) == 'bob has 5 apples')
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
>| 1 | `subs` |any | | |
>

### index

>**Printed**
>
>```spwn
>(self, substr: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets the index of a string, if it doesn't exists returns null._
>
>**Returns:** 
>[`@number`](std-docs/number) or `@NULL`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `substr` | [`@string`](std-docs/string) | | |
>

### is\_digit

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns true if string is numeric, false otherwise_
>
>**Example:**
>
>```spwn
>let num = "123"
>num.is_digit() // true
>```
>
>
>**Returns:** 
>`@bool`
>

### is\_empty

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns true if the string has a length of 0, false otherwise_
>
>**Example:**
>
>```spwn
>$.assert(''.is_empty())
>$.assert(!('x'.is_empty()))
>```
>
>
>**Returns:** 
>`@bool`
>

### is\_lower

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Checks if whole string is lowercase, ignores characters that is not in the alphabet._
>
>**Returns:** 
>`@bool`
>

### is\_upper

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Checks if whole string is uppercase, ignores characters that is not in the alphabet._
>
>**Returns:** 
>`@bool`
>

### join

>**Printed**
>
>```spwn
>(self, list: @array) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Joins a list using the string._
>
>**Example:**
>
>```spwn
>$.assert(''.join(['a', 'b']) == 'ab')
>$.assert(', '.join(['string', 'element', 'join']) == 'string, element, join')
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
>| 1 | `list` | [`@array`](std-docs/array) | | |
>

### l\_pad

>**Printed**
>
>```spwn
>(self, times: @number, seq: @string = ' ') { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a left-padded version of the string_
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `times` | [`@number`](std-docs/number) | | |
>| 2 | `seq` | [`@string`](std-docs/string) | `' '` | |
>

### l\_trim

>**Printed**
>
>```spwn
>(self, tokens: (@string | [@string]) = [' ', '
>', '	', '']) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a left-trimmed verison of the string_
>
>**Example:**
>
>```spwn
>str1 = '      abcd g    '
>str2 = '   pog  __'
>$.assert(str1.l_trim() == 'abcd g    ')
>$.assert(str2.l_trim() == 'pog  __')
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
>| 1 | `tokens` | [`@string`](std-docs/string) or an [`@array`](std-docs/array) of [`@string`](std-docs/string) elements | `[' ', '', '	', '']` | |
>

### lowercase

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Makes whole string lowercase._
>
>**Returns:** 
>[`@string`](std-docs/string)
>

### overwrite

>**Printed**
>
>```spwn
>(self, start: @number, end: @number, str: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Overwrites a portion of a string with another string._
>
>**Example:**
>
>```spwn
>$.assert("abcdefghij".overwrite(2,5,"thingy") == "abthingyfghij")
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
>| 1 | `start` | [`@number`](std-docs/number) | | |
>| 2 | `end` | [`@number`](std-docs/number) | | |
>| 3 | `str` | [`@string`](std-docs/string) | | |
>

### r\_pad

>**Printed**
>
>```spwn
>(self, times: @number, seq: @string = ' ') { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a right-padded version of the string_
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `times` | [`@number`](std-docs/number) | | |
>| 2 | `seq` | [`@string`](std-docs/string) | `' '` | |
>

### r\_trim

>**Printed**
>
>```spwn
>(self, tokens: (@string | [@string]) = [' ', '
>', '	', '']) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a right-trimmed version of the string_
>
>**Example:**
>
>```spwn
>str = 'abcd      '
>str2 = '      abcd g    '
>str3 = '   pog  __'
>$.assert(str.r_trim() == 'abcd')
>$.assert(str2.r_trim() == '      abcd g')
>$.assert(str3.r_trim(tokens = [' ', '_']) == '   pog')
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
>| 1 | `tokens` | [`@string`](std-docs/string) or an [`@array`](std-docs/array) of [`@string`](std-docs/string) elements | `[' ', '', '	', '']` | |
>

### replace

>**Printed**
>
>```spwn
>(self, re: @string, replacement: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `re` | [`@string`](std-docs/string) | | |
>| 2 | `replacement` | [`@string`](std-docs/string) | | |
>

### reverse

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Reverses the string._
>
>**Returns:** 
>[`@string`](std-docs/string)
>

### split

>**Printed**
>
>```spwn
>(self, spstr: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Splits the string by the specified seperator._
>
>**Example:**
>
>```spwn
>$.assert('a b c'.split(' ') == ['a', 'b', 'c'])
>$.assert('example'.split('') == ['e', 'x', 'a', 'm', 'p', 'l', 'e'])
>```
>
>
>**Returns:** 
>[@string]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `spstr` | [`@string`](std-docs/string) | | |
>

### starts\_with

>**Printed**
>
>```spwn
>(self, substr: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Checks if the string starts with a string._
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `substr` | [`@string`](std-docs/string) | | |
>

### substr

>**Printed**
>
>```spwn
>(self, start: @number, end: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets a substring beginning at the specified start and ending at the specified end._
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `start` | [`@number`](std-docs/number) | | |
>| 2 | `end` | [`@number`](std-docs/number) | | |
>

### to\_obj

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a text object with the string as text_
>
>**Example:**
>
>```spwn
>extract obj_props
>"hello".to_obj().with(X, 45).with(Y, 45).add()
>```
>
>
>**Returns:** 
>[`@object`](std-docs/object)
>

### trim

>**Printed**
>
>```spwn
>(self, tokens: (@string | [@string]) = [' ', '
>', '	', '']) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a trimmed version of the string_
>
>**Example:**
>
>```spwn
>str = 'abcd      '
>str2 = '      abcd g    '
>str3 = '   pog  __'
>$.assert(str.trim() == 'abcd')
>$.assert(str2.trim() == 'abcd g')
>$.assert(str3.trim(tokens = [' ', '_']) == 'pog')
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
>| 1 | `tokens` | [`@string`](std-docs/string) or an [`@array`](std-docs/array) of [`@string`](std-docs/string) elements | `[' ', '', '	', '']` | |
>

### uppercase

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Makes whole string uppercase._
>
>**Returns:** 
>[`@string`](std-docs/string)
>
