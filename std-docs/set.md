# **@set**

## Constructors

### new

>**Printed**
>
>```spwn
>() { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a new empty object set_
>
>**Example:**
>
>```spwn
>let object_set = @set::new()
>```
>
>
>**Returns:** 
>[`@set`](std-docs/set)
>

## Macros

### from

>**Printed**
>
>```spwn
>(objects: [@object] = [], center_x: (@number | @NULL) = null, center_y: (@number | @NULL) = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creates a new object set from am optional array of objects, with an optional center x and center y position_
>
>**Example:**
>
>```spwn
>let object_set = @set::from(objects=my_objects, center_x=30, center_y=15)
>//`@set::from(my_objects, 5, 10)` is also valid
>```
>
>
>**Returns:** 
>[`@set`](std-docs/set)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `objects` | `[@object]` | `[]` | |
>| 2 | `center_x` | [`@number`](std-docs/number) or `@NULL` | `null` | |
>| 3 | `center_y` | [`@number`](std-docs/number) or `@NULL` | `null` | |
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
>_Returns true if this set contains no objects, otherwise false._
>

### map

>**Printed**
>
>```spwn
>(self, cb: (@object) -> @object) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Calls a defined callback function on each object of the set, and returns a new set that contains the modified objects_
>
>**Example:**
>
>```spwn
>let shifted_objects = objects.map(o => o[obj_props.X] + 30)
>```
>
>
>**Returns:** 
>[`@set`](std-docs/set)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `cb` | a `@macro` that returns [`@object`](std-docs/object) and takes [`@object`](std-docs/object) as an argument | | |
>

### place

>**Printed**
>
>```spwn
>(self, x: @number, y: @number) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Adds all objects in the set into the level, with a given X and Y offset position_
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `x` | [`@number`](std-docs/number) | | |
>| 2 | `y` | [`@number`](std-docs/number) | | |
>

### push

>**Printed**
>
>```spwn
>(self, object: @object) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Adds a new object to the set_
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `object` | [`@object`](std-docs/object) | | |
>

### replace

>**Printed**
>
>```spwn
>(self, prop: (@object_key | @number), pat: (@pattern | (_) -> @bool), new, default) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Replaces every object that has a specific prop value, with another specified value (or a fallback default value), returning a new set with the modified objects_
>
>**Example:**
>
>```spwn
>let replaced = objects.replace(obj_props.EDITOR_LAYER_1, ==1, 0, 1)
>```
>
>
>**Returns:** 
>[`@set`](std-docs/set)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `prop` | [`@object\_key`](std-docs/object\_key) or [`@number`](std-docs/number) | | |
>| 2 | `pat` | `@pattern` or a `@macro` that returns `@bool` and takes any as an argument | | |
>| 3 | `new` |any | | |
>| 4 | `default` |any | | |
>

### replace\_group

>**Printed**
>
>```spwn
>(self, group: @group, new: @group) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Replaces a given group with another given group, returning a new set with the modified objects_
>
>**Returns:** 
>[`@set`](std-docs/set)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `group` | [`@group`](std-docs/group) | | |
>| 2 | `new` | [`@group`](std-docs/group) | | |
>

### rotated

>**Printed**
>
>```spwn
>(self, degrees: @number, around_x: @number = 0, around_y: @number = 0, lock: @bool = false) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Rotates every object in the set, returning a new set with the modified objects_
>
>**Example:**
>
>```spwn
>let rotated_objects = objects.rotated(90, around_x=30, around_y=30)
>```
>
>
>**Returns:** 
>[`@set`](std-docs/set)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `degrees` | [`@number`](std-docs/number) | | |
>| 2 | `around_x` | [`@number`](std-docs/number) | `0` | |
>| 3 | `around_y` | [`@number`](std-docs/number) | `0` | |
>| 4 | `lock` | `@bool` | `false` | |
>

### with

>**Printed**
>
>```spwn
>(self, prop: (@object_key | @number), value) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Adds or modifies the given prop and value pair for every object in the set, returning a new set with the modified objects_
>
>**Returns:** 
>[`@set`](std-docs/set)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `prop` | [`@object\_key`](std-docs/object\_key) or [`@number`](std-docs/number) | | |
>| 2 | `value` |any | | |
>
