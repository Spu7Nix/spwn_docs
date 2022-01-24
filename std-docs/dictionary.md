# **@dictionary**
?> Dictionaries are used to store key-value pairs at compile time.

## Macros

### clear

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
>_Clears the dictionary._
>
>**Example:**
>
>```spwn
>let wares = {
>    apple: 10,
>    gold: 1000,
>    peanuts: 5,
>}
>wares.clear()
>
>$.assert(wares.is_empty())
>```
>
>

### contains\_value

>**Printed**
>
>```spwn
>(self, value) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Checks if the dictionary contains a value._
>
>**Example:**
>
>```spwn
>let wares = {
>    apple: 10,
>    gold: 1000,
>    peanuts: 5,
>}
>
>$.assert(wares.contains_value(5))
>```
>
>
>**Returns:** 
>`@bool`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `value` |any | | |
>

### get

>**Printed**
>
>```spwn
>(self, key: @string, default = @dict_not_found::{}) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets an item from the dictionary._
>
>**Example:**
>
>```spwn
>let wares = {
>    apple: 10,
>    gold: 1000,
>    peanuts: 5,
>}
>
>$.assert(wares.get('peanuts') == 5)
>$.assert(wares.get('silver', default = 42) == 42)
>```
>
>
>**Returns:** 
>any
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `key` | [`@string`](std-docs/string) | | |
>| 2 | `default` |any | `@dict_not_found::{}` | |
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
>_Returns true if there are no entries in the dictionary, false otherwise._
>
>**Example:**
>
>```spwn
>dict = {}
>$.assert(dict.is_empty())
>```
>
>
>**Returns:** 
>`@bool`
>

### items

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
>_Gets the dictionary's items._
>
>**Example:**
>
>```spwn
>wares = {
>    apple: 10,
>    gold: 1000,
>    peanuts: 5,
>}
>$.assert(['apple', 10] in wares.items())
>```
>
>
>**Returns:** 
>[@array]
>

### keys

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
>_Gets the dictionary's keys._
>
>**Example:**
>
>```spwn
>wares = {
>    apple: 10,
>    gold: 1000,
>    peanuts: 5,
>}
>$.assert('apple' in wares.keys())
>```
>
>
>**Returns:** 
>[@string]
>

### map

>**Printed**
>
>```spwn
>(self, cb: (_, _) -> _) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Calls a defined callback function on each key-value pair of a dictionary, and returns an array that contains the results._
>
>**Example:**
>
>```spwn
>dict = {key1: 0, key2: 1, key3: 2}
>$.assert('k' in dict.map((k, v) => k[v]))
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `cb` | a `@macro` that returns any and takes any, any as arguments | | |
>

### set

>**Printed**
>
>```spwn
>(self, key: @string, val) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Sets an item in the dictionary._
>
>**Example:**
>
>```spwn
>let wares = {
>    apple: 10,
>    gold: 1000,
>}
>wares.set('peanuts', 5)
>$.assert(wares.peanuts == 5)
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `key` | [`@string`](std-docs/string) | | |
>| 2 | `val` |any | | |
>

### values

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
>_Gets the dictionary's values._
>
>**Example:**
>
>```spwn
>wares = {
>    apple: 10,
>    gold: 1000,
>    peanuts: 5,
>}
>$.assert(wares.values().sort() == [5, 10, 1000])
>```
>
>
>**Returns:** 
>[_]
>
