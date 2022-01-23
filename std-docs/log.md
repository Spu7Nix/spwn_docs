# **@log**

## Macros

### count

>**Printed**
>
>```spwn
>(label: @string = 'default') { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Logs how many times the label got counted._
>
>**Example:**
>
>```spwn
>for i in 0..10 {
>    @log::count('my loop')
>}
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `label` | [`@string`](std-docs/string) | `'default'` | |
>

### reset\_count

>**Printed**
>
>```spwn
>(label: @string = 'default') { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Resets the counted amount of the label._
>
>**Example:**
>
>```spwn
>for i in 0..10 {
>    @log::count('loop')
>}
>
>@log::reset_count('loop')
>
>for i in 0..10 {
>    @log::count('loop')
>}
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `label` | [`@string`](std-docs/string) | `'default'` | |
>

### time

>**Printed**
>
>```spwn
>(label: @string = 'default') { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Saves the current time to a given label._
>
>**Example:**
>
>```spwn
>@log::time('heavy calculation')
>// <insert your heavy code here>
>@log::time_end('heavy calculation')
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `label` | [`@string`](std-docs/string) | `'default'` | |
>

### time\_end

>**Printed**
>
>```spwn
>(label = 'default') { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Logs the time between now and the start of the label and destroys it (it doesn't for now 💀)._
>
>**Example:**
>
>```spwn
>@log::time('huge loop')
>
>for i in 0..100000 {}
>
>@log::time_end('huge loop')
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `label` |any | `'default'` | |
>

### time\_log

>**Printed**
>
>```spwn
>(label: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Logs the time between now and the start of the label._
>
>**Example:**
>
>```spwn
>@log::time('for')
>
>for i in 0..10 {
>    @log::time_log('for')
>}
>```
>
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `label` | [`@string`](std-docs/string) | | |
>

## Values

### runtime

>**Printed**
>
>```spwn
>@runtime_log
>```
>
>**Type:** `@type_indicator`
>
