# **@object**

## Macros

### add

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>

### add\_groups

>**Printed**
>
>```spwn
>(self, groups: (@group | [@group])) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `groups` | [`@group`](std-docs/group) or an [`@array`](std-docs/array) of [`@group`](std-docs/group) elements | | |
>

### has\_key

>**Printed**
>
>```spwn
>(self, key: @object_key) { /* ... */ }
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
>| 1 | `key` | [`@object_key`](std-docs/object_key) | | |
>

### set

>**Printed**
>
>```spwn
>(self, key: @object_key, value) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `key` | [`@object_key`](std-docs/object_key) | | |
>| 2 | `value` |any | | |
>

### with

>**Printed**
>
>```spwn
>(self, key: @object_key, value) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@object`](std-docs/object)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `key` | [`@object_key`](std-docs/object_key) | | |
>| 2 | `value` |any | | |
>
