# **@regex**

## Constructors

### new

>**Printed**
>
>```spwn
>(re: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Create a new instance of regex_
>
>**Returns:** 
>[`@regex`](std-docs/regex)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `re` | [`@string`](std-docs/string) | |A regex string. Make sure to use two backslashes to escape selectors instead of one or it will error |
>

## Macros

### find\_all

>**Printed**
>
>```spwn
>(self, m: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Regex find all matching indices of the string argument_
>
>**Returns:** 
>[[@number]]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `m` | [`@string`](std-docs/string) | | |
>

### find\_groups

>**Printed**
>
>```spwn
>(self, m: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Regex find all groups of the string argument, their range, text, and name_
>
>**Returns:** 
>[@dictionary]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `m` | [`@string`](std-docs/string) | | |
>

### matches

>**Printed**
>
>```spwn
>(self, m: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Checks if the regex matches a string argument_
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `m` | [`@string`](std-docs/string) | | |
>

### replace

>**Printed**
>
>```spwn
>(self, to_replace: @string, replacer: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Regex replace the contents of a string_
>
>**Returns:** 
>[`@string`](std-docs/string)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `to_replace` | [`@string`](std-docs/string) | | |
>| 2 | `replacer` | [`@string`](std-docs/string) | | |
>
