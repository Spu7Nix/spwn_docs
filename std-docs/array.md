# **@array**
?> Arrays are used to store lists of values at compile time.

## Macros

### all

>**Printed**
>
>```spwn
>(self, map: ((_) -> @bool | @pattern) = (a) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Determines whether all the members of an array satisfy the specified callback._
>
>**Example:**
>
>```spwn
>arr = [true, true, true]
>$.assert(arr.all())
>arr2 = [1, 2, 3, 1, 4, 7]
>$.assert(arr2.all(el => el > 0)) // checks if the array contains only positive elements
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
>| 1 | `map` | a `@macro` that returns `@bool` and takes any as an argument or `@pattern` | `(a) { /* ... */ }` | |
>

### any

>**Printed**
>
>```spwn
>(self, map: ((_) -> @bool | @pattern) = (a) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Determines whether the specified callback function returns true for any element of an array._
>
>**Example:**
>
>```spwn
>arr = [false, false, true, false]
>$.assert(arr.any())
>arr2 = [1, 2, 3, 1, 4, -1, 7]
>$.assert(arr2.any(el => el < 0)) // checks if the array contains any negative elements
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
>| 1 | `map` | a `@macro` that returns `@bool` and takes any as an argument or `@pattern` | `(a) { /* ... */ }` | |
>

### average

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
>_Returns the average of the numbers in the array._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.assert(arr.average() == 3.2)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>

### center

>**Printed**
>
>```spwn
>(self, ceil: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the item in the center of the array._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.assert(arr.center() == 5)
>$.assert(arr.center(true) == 5)
>
>let arr = [5, 1, 5, 3]
>$.assert(arr.center() == 1)
>$.assert(arr.center(true) == 5)
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
>| 1 | `ceil` | `@bool` | `false` | |
>

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
>_Clears the array._
>
>**Example:**
>
>```spwn
>let arr = [1, 2, 3]
>arr.clear()
>$.assert(arr.is_empty())
>```
>
>

### contains

>**Printed**
>
>```spwn
>(self, el) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_See if array contains an element._
>
>**Example:**
>
>```spwn
>fruit = ['apple', 'banana', 'mango']
>$.assert(fruit.contains('banana'))
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
>| 1 | `el` |any | | |
>

### enumerate

>**Printed**
>
>```spwn
>(self, dict: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an array of index-element pairs_
>
>**Example:**
>
>```spwn
>arr = ['a','b','c']
>for i in arr.enumerate() {
>    $.print(i[0], ': ', i[1])
>}
>/* output:
>0: a
>1: b
>2: c
>*/
>```
>
>
>**Returns:** 
>[(@dictionary \| @array)]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `dict` | `@bool` | `false` |Return the pair as a dictionary |
>

### filter

>**Printed**
>
>```spwn
>(self, cb: ((_) -> @bool | @pattern), in_place: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the elements of an array that meet the condition specified in the callback function._
>
>**Example:**
>
>```spwn
>arr = [1, 2, 3, 4, 5]
>$.assert(arr.filter(el => el > 3) == [4, 5])
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array) or `@NULL`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `cb` | a `@macro` that returns `@bool` and takes any as an argument or `@pattern` | | |
>| 2 | `in_place` | `@bool` | `false` | |
>

### flatten

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
>_Flattens any sub-arrays into one big array._
>
>**Example:**
>
>```spwn
>arr = [1, 2, [3, 4], 5, [6, 7, [8]]]
>$.assert(arr.flatten() == [1, 2, 3, 4, 5, 6, 7, 8])
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array)
>

### index

>**Printed**
>
>```spwn
>(self, el, from: @number = 0) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets the index of an element (if it doesn't exist, `null` is returned)_
>
>**Example:**
>
>```spwn
>fruit = ['apple', 'banana', 'mango']
>$.assert(fruit.index('apple') == 0)
>$.assert(fruit.index('carrot') == null)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number) or `@NULL`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `el` |any | | |
>| 2 | `from` | [`@number`](std-docs/number) | `0` |Index to start the search from |
>

### index\_all

>**Printed**
>
>```spwn
>(self, el) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns an array of all occurences of an element_
>
>**Example:**
>
>```spwn
>arr = [1,-5,2,4,2,6]
>$.assert(arr.index_all(2) == [2,4])
>```
>
>
>**Returns:** 
>[@number]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `el` |any | | |
>

### index\_last

>**Printed**
>
>```spwn
>(self, el, until: @number = 0) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets the index of the last occurence of an element (if it doesn't exist, `null` is returned)_
>
>**Example:**
>
>```spwn
>arr = [1,-5,2,4,2,6]
>$.assert(arr.index_last(2) == 4)
>$.assert(arr.index_last(-3) == null)
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number) or `@NULL`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `el` |any | | |
>| 2 | `until` | [`@number`](std-docs/number) | `0` |Index to end the search at |
>

### insert

>**Printed**
>
>```spwn
>(self, index: @number, value) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Pushes a value at a certain index of the array and returns it._
>
>**Example:**
>
>```spwn
>let arr = [1, 5, 3, 2]
>$.assert(arr.insert(2, 7) == 7)
>$.assert(arr == [1, 5, 7, 3, 2])
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
>| 1 | `index` | [`@number`](std-docs/number) | | |
>| 2 | `value` |any | | |
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
>_Returns true if the array has a length of 0, false otherwise._
>
>**Example:**
>
>```spwn
>arr = []
>arr2 = [1, 2, 3]
>$.assert(arr.is_empty())
>$.assert(!arr2.is_empty())
>```
>
>
>**Returns:** 
>`@bool`
>

### join

>**Printed**
>
>```spwn
>(self, joiner: @string = ' ') { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Joins the array using the string._
>
>**Example:**
>
>```spwn
>fruit = ['apple', 'banana', 'mango']
>$.assert(fruit.join(' ') == 'apple banana mango')
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
>| 1 | `joiner` | [`@string`](std-docs/string) | `' '` | |
>

### l\_fold

>**Printed**
>
>```spwn
>(self, cb: ((_, _) -> _ | @builtin)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Calls the specified callback function for all the elements in an array from left to right. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function._
>
>**Example:**
>
>```spwn
>arr = [1, 2, 3, 4, 5]
>sum = arr.l_fold($._plus_)
>$.assert(sum == 15)
>
>arr2 = [2, 1, 5]
>result = arr2.l_fold($._divided_by_)
>$.assert(result == 0.4)
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
>| 1 | `cb` | a `@macro` that returns any and takes any, any as arguments or `@builtin` | | |
>

### map

>**Printed**
>
>```spwn
>(self, cb: (_) -> _, in_place: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Calls a defined callback function on each element of an array, and returns an array that contains the results, or modifies in place if specified._
>
>**Example:**
>
>```spwn
>arr = [1, 2, 3, 4, 5]
>$.assert(arr.map(el => el * 2) == [2, 4, 6, 8, 10])
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array) or `@NULL`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `cb` | a `@macro` that returns any and takes any as an argument | | |
>| 2 | `in_place` | `@bool` | `false` | |
>

### map\_index

>**Printed**
>
>```spwn
>(self, cb: (_, @number) -> _, in_place: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Calls a defined callback function on each element of an array along with its index, and returns an array that contains the results, or modifies in place if specified._
>
>**Example:**
>
>```spwn
>arr = [1, 2, 3, 4, 5]
>$.assert(arr.map_index((el, i) => el + i) == [1, 3, 5, 7, 9])
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array) or `@NULL`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `cb` | a `@macro` that returns any and takes any, [`@number`](std-docs/number) as arguments | | |
>| 2 | `in_place` | `@bool` | `false` | |
>

### max

>**Printed**
>
>```spwn
>(self, key: (_) -> _ = (el) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets the highest number in the array._
>
>**Example:**
>
>```spwn
>arr = [3, 1, 4, 1]
>$.assert(arr.max() == 4)
>
>arr2 = ['abc', 'b', 'abdc']
>$.assert(arr2.max(key = (el: @string) => el.length) == 'abdc')
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
>| 1 | `key` | a `@macro` that returns any and takes any as an argument | `(el) { /* ... */ }` | |
>

### min

>**Printed**
>
>```spwn
>(self, key: (_) -> _ = (el) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets the lowest number in the array._
>
>**Example:**
>
>```spwn
>arr = [3, 1, 4, 1]
>$.assert(arr.min() == 1)
>
>arr2 = ['abc', 'b', 'abdc']
>$.assert(arr2.min(key = (el: @string) => el.length) == 'b')
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
>| 1 | `key` | a `@macro` that returns any and takes any as an argument | `(el) { /* ... */ }` | |
>

### most

>**Printed**
>
>```spwn
>(self, last: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns the item that appears most times._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.assert(arr.most() == 5)
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
>| 1 | `last` | `@bool` | `false` | |
>

### partition

>**Printed**
>
>```spwn
>(self, cb: @macro = (item) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Partitions the array into two arrays where the first array resulted into true and the second array resulted into false._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>let [bigger, smaller] = arr.partition(v => v > 4)
>$.assert(bigger == [5, 5])
>$.assert(smaller == [1, 3, 2])
>```
>
>
>**Returns:** 
>[@array]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `cb` | `@macro` | `(item) { /* ... */ }` | |
>

### pick

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
>_Returns an item from the array by random._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.print(arr.pick())
>```
>
>

### pop

>**Printed**
>
>```spwn
>(self, index: @number = -1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Removes a specific index from the array and returns it._
>
>**Example:**
>
>```spwn
>let arr = [1, 2, 3, 4]
>arr.pop()
>$.assert(arr == [1, 2, 3])
>arr.pop(1)
>$.assert(arr == [1, 3])
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
>| 1 | `index` | [`@number`](std-docs/number) | `-1` | |
>

### push

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
>_Pushes a value to the end of the array._
>
>**Example:**
>
>```spwn
>let arr = [1, 2, 3]
>arr.push(4)
>$.assert(arr == [1, 2, 3, 4])
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `value` |any | | |
>

### r\_fold

>**Printed**
>
>```spwn
>(self, cb: ((_, _) -> _ | @builtin)) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Calls the specified callback function for all the elements in an array from right to left. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function._
>
>**Example:**
>
>```spwn
>arr = [1, 2, 3, 4, 5]
>sum = arr.r_fold($._plus_)
>$.assert(sum == 15)
>
>arr2 = [2, 1, 5]
>result = arr2.r_fold($._divided_by_)
>$.assert(result == 10)
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
>| 1 | `cb` | a `@macro` that returns any and takes any, any as arguments or `@builtin` | | |
>

### reduce

>**Printed**
>
>```spwn
>(self, cb: ((_, _) -> _ | @builtin), default = 0) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Calls the specified callback function for all the elements in an array with a default value. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function._
>
>**Example:**
>
>```spwn
>arr = [1, 2, 3, 4, 5]
>sum = arr.reduce((acum, el) => acum + el)
>$.assert(sum == 15)
>
>arr2 = [5, 1, 5, 3, 2]
>product = arr2.reduce((acum, el) => acum * el, 1)
>$.assert(product == 150)
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
>| 1 | `cb` | a `@macro` that returns any and takes any, any as arguments or `@builtin` | | |
>| 2 | `default` |any | `0` | |
>

### remove

>**Printed**
>
>```spwn
>(self, index: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns array with all elements that match value removed_
>
>**Example:**
>
>```spwn
>let arr = [1, 2, 3, 4, 5]
>$.assert(arr.remove(3) == [1, 2, 4, 5])
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
>| 1 | `index` | [`@number`](std-docs/number) | | |
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
>_Reverses the array._
>
>**Example:**
>
>```spwn
>let arr = [1, 2, 3]
>$.assert(arr.reverse() == [3, 2, 1])
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array)
>

### scan

>**Printed**
>
>```spwn
>(self, state, closure: (_, _) -> _) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Takes in an initial value and a macro which acts on a reference of that value and each array value._
>
>**Example:**
>
>```spwn
>x = [1,2,3]
>x_1 = x.scan(10, (&state, x){
>    state *= x
>    return -state
>})
>$.assert(x_1 == [-10, -20, -60])
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
>| 1 | `state` |any | | |
>| 2 | `closure` | a `@macro` that returns any and takes any, any as arguments | | |
>

### shift

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
>_Removes the first index from the array and returns it._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.assert(arr.shift() == 5)
>$.assert(arr == [1, 5, 3, 2])
>```
>
>
>**Returns:** 
>any
>

### shuffle

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
>_Returns the array in random order._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.print(arr.shuffle())
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array)
>

### sort

>**Printed**
>
>```spwn
>(self, comp: (_, _) -> (@bool | @number) = (a, b) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns a sorted verison of the array_
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.assert(arr.sort() == [1, 2, 3, 5, 5])
>
>let arr = [5, 1, 5, 3, 2]
>$.assert(arr.sort(comp = (a, b) => a >= b) == [5, 5, 3, 2, 1])
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
>| 1 | `comp` | a `@macro` that returns `@bool` or [`@number`](std-docs/number) and takes any, any as arguments | `(a, b) { /* ... */ }` | |
>

### sorted

>**Printed**
>
>```spwn
>(self, comp: (_, _) -> @bool = (a, b) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Returns true if the array is sorted._
>
>**Example:**
>
>```spwn
>$.assert([5, 1, 5, 3, 2].sorted() == false)
>$.assert([1, 2, 3, 5, 5].sorted() == true)
>$.assert([5, 5, 3, 2, 1].sorted(comp = (a, b) => a >= b) == true)
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
>| 1 | `comp` | a `@macro` that returns `@bool` and takes any, any as arguments | `(a, b) { /* ... */ }` | |
>

### split

>**Printed**
>
>```spwn
>(self, indicies: [@number]) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Splits the array on the indicies_
>
>**Example:**
>
>```spwn
>x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>$.assert(x.split([5]) == [[0,1,2,3,4],[5,6,7,8,9]])
>$.assert(x.split([5, 7]) == [[0,1,2,3,4],[5,6],[7,8,9]])
>```
>
>
>**Returns:** 
>[@array]
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `indicies` | `[@number]` | | |
>

### sum

>**Printed**
>
>```spwn
>(self, cb: (_) -> _ = (a) { /* ... */ }) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets the sum of the values in the array._
>
>**Example:**
>
>```spwn
>arr = [1, 2, 3, 4, 5]
>$.assert(arr.sum() == 15)
>arr2 = ['abc', 'ab', 'abcd']
>$.assert(arr2.sum(a => a.length) == 9)
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
>| 1 | `cb` | a `@macro` that returns any and takes any as an argument | `(a) { /* ... */ }` | |
>

### unique

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
>_Returns the array only with items that didn't appear before._
>
>**Example:**
>
>```spwn
>let arr = [5, 1, 5, 3, 2]
>$.assert(arr.unique() == [5, 1, 3, 2])
>```
>
>
>**Returns:** 
>[`@array`](std-docs/array)
>

### unshift

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
>_Pushes a value to the start of the array and returns it._
>
>**Example:**
>
>```spwn
>let arr = [1, 5, 3, 2]
>$.assert(arr.unshift(5) == 5)
>$.assert(arr == [5, 1, 5, 3, 2])
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
>| 1 | `value` |any | | |
>
