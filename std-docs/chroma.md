# **@chroma**
?> Represents a color value, used in for example color triggers and pulse triggers.

## Macros

### a

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### a100

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### a8

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### b

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### b8

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### from\_hex

>**Printed**
>
>```spwn
>(s: @string) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from a hex string_
>
>**Example:**
>
>```spwn
>white = @chroma::from_hex('ffffff')
>black = @chroma::from_hex('#000000')
>semitransparent_gray = @chroma::from_hex('7f7f7fee')
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `s` | [`@string`](std-docs/string) | | |
>

### from\_hsv

>**Printed**
>
>```spwn
>(h: @number, s: @number, v: @number, a: @number = 1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from hsv values (0-1)_
>
>**Example:**
>
>```spwn
>blue = @chroma::from_hsv(2/3, 1, 1)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `h` | [`@number`](std-docs/number) | | |
>| 2 | `s` | [`@number`](std-docs/number) | | |
>| 3 | `v` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `1` | |
>

### from\_hsv2

>**Printed**
>
>```spwn
>(h: @number, s: @number, v: @number, a: @number = 100) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from hsv values (0-360, 0-100, 0-100)_
>
>**Example:**
>
>```spwn
>yellow = @chroma::from_hsv2(60, 100, 100)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `h` | [`@number`](std-docs/number) | | |
>| 2 | `s` | [`@number`](std-docs/number) | | |
>| 3 | `v` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `100` | |
>

### from\_rgb

>**Printed**
>
>```spwn
>(r: @number, g: @number, b: @number, a: @number = 1) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from rgb values (0-1)_
>
>**Example:**
>
>```spwn
>orange = @chroma::from_rgb(1, 0.5, 0)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `r` | [`@number`](std-docs/number) | | |
>| 2 | `g` | [`@number`](std-docs/number) | | |
>| 3 | `b` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `1` | |
>

### from\_rgb8

>**Printed**
>
>```spwn
>(r: @number, g: @number, b: @number, a: @number = 255) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Creatss a new chroma from 8-bit rgb values (0-255)_
>
>**Example:**
>
>```spwn
>cyan = @chroma::from_rgb8(0, 255, 255)
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `r` | [`@number`](std-docs/number) | | |
>| 2 | `g` | [`@number`](std-docs/number) | | |
>| 3 | `b` | [`@number`](std-docs/number) | | |
>| 4 | `a` | [`@number`](std-docs/number) | `255` | |
>

### g

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### g8

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### h

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets or sets a chroma's hue value_
>
>**Example:**
>
>```spwn
>let a = rgb(1,1,1)
>$.print(a.h()) // gets the value
>a.h(1/3) // sets the value
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### h360

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### hex

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
>_Returns a string of the chroma's hex code_
>
>**Returns:** 
>[`@string`](std-docs/string)
>

### hsv

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
>_Returns an array of the chroma's HSV values_
>
>**Returns:** 
>[@number]
>

### hsv2

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[@number]
>

### hsva

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
>_Returns an array of the chroma's HSVA values_
>
>**Returns:** 
>[@number]
>

### hsva2

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[@number]
>

### over

>**Printed**
>
>```spwn
>(self, o: @chroma, mode: @blend_mode = @blend_mode::{func: (b, o) { /* ... */ }}) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Blends this chroma with another chroma as if layered above it_
>
>**Example:**
>
>```spwn
>a = rgb(1,0.5,1)
>b = rgb(0,0.5,1)
>
>c = a.over(b, blend_modes.multiply)
>
>$.assert(c.rgb() == [0, 0.25, 1])
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `o` | [`@chroma`](std-docs/chroma) | | |
>| 2 | `mode` | `@blend_mode` | `@blend_mode::{func: (b, o) { /* ... */ }}` | |
>

### r

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets or sets a chroma's red value_
>
>**Example:**
>
>```spwn
>let a = rgb(1,1,1,0.5)
>$.print(a.r()) // gets the value
>a.r(0.5) // sets the value
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### r8

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Gets or sets a chroma's 8-bit red value_
>
>**Example:**
>
>```spwn
>let a = rgb(1,1,1)
>$.print(a.r8()) // gets the value
>a.r8(127) // sets the value
>```
>
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### rgb

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
>_Returns an array of the chroma's RGB values_
>
>**Returns:** 
>[@number]
>

### rgb8

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
>_Returns an array of the chroma's 8-bit RGB values_
>
>**Returns:** 
>[@number]
>

### rgba

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
>_Returns an array of the chroma's RGBA values_
>
>**Returns:** 
>[@number]
>

### rgba8

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
>_Returns an array of the chroma's 8-bit RGBA values_
>
>**Returns:** 
>[@number]
>

### s

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### s100

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### under

>**Printed**
>
>```spwn
>(self, o: @chroma, mode: @blend_mode = @blend_mode::{func: (b, o) { /* ... */ }}) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Description:**
>
>_Blends this chroma with another chroma as if layered under it_
>
>**Example:**
>
>```spwn
>a = rgb(1,0.5,1)
>b = rgb(0,0.5,1)
>
>c = a.under(b, blend_modes.normal)
>
>$.assert(c.rgb() == [0, 0.5, 1])
>```
>
>
>**Returns:** 
>[`@chroma`](std-docs/chroma)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `o` | [`@chroma`](std-docs/chroma) | | |
>| 2 | `mode` | `@blend_mode` | `@blend_mode::{func: (b, o) { /* ... */ }}` | |
>

### v

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

### v100

>**Printed**
>
>```spwn
>(self, v: @number = null) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@number`](std-docs/number)
>
>**Arguments:**
>
>| # | name | type | default value | description |
>| - | ---- | ---- | ------------- | ----------- |
>| 1 | `v` | [`@number`](std-docs/number) | `null` | |
>

## Operator Implementations

### \_display\_

>**Printed**
>
>```spwn
>(self) { /* ... */ }
>```
>
>**Type:** `@macro`
>
>**Returns:** 
>[`@string`](std-docs/string)
>
