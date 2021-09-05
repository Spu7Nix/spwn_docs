# **@string**:

## **contains**:

> **Value:**
>
> ```spwn
> (self, substr: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Checks if the string contains a string._
>
> ## Arguments:
>
> | #   | name         | type    | default value | description |
> | --- | ------------ | ------- | ------------- | ----------- |
> | 1   | **`substr`** | @string |               |             |

## **ends_with**:

> **Value:**
>
> ```spwn
> (self, substr: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Checks does the string starts with a string._
>
> ## Arguments:
>
> | #   | name         | type    | default value | description |
> | --- | ------------ | ------- | ------------- | ----------- |
> | 1   | **`substr`** | @string |               |             |

## **find**:

> **Value:**
>
> ```spwn
> (self, re: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Arguments:
>
> | #   | name     | type    | default value | description |
> | --- | -------- | ------- | ------------- | ----------- |
> | 1   | **`re`** | @string |               |             |

## **findall**:

> **Value:**
>
> ```spwn
> (self, re: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Arguments:
>
> | #   | name     | type    | default value | description |
> | --- | -------- | ------- | ------------- | ----------- |
> | 1   | **`re`** | @string |               |             |

## **fmt**:

> **Value:**
>
> ```spwn
> (self, subs) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns a formatted version of the string. Accepts either a single argument or an array_
>
> ### Example:
>
> ```spwn
> name1 = 'bob'
> name2 = 'alice'
> $.assert('hi {}'.fmt(name1) == 'hi bob')
> $.assert('hi {} and {}'.fmt([name1, name2]) == 'hi bob and alice')
> $.assert('hi {1} and {0}'.fmt([name1, name2]) == 'hi alice and bob')
> $.assert('{} has {} apples'.fmt([name1, 5]) == 'bob has 5 apples')
> ```
>
> ## Arguments:
>
> | #   | name       | type | default value | description |
> | --- | ---------- | ---- | ------------- | ----------- |
> | 1   | **`subs`** | any  |               |             |

## **index**:

> **Value:**
>
> ```spwn
> (self, substr: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Gets the index of a string, if it doesn't exists returns null._
>
> ## Arguments:
>
> | #   | name         | type    | default value | description |
> | --- | ------------ | ------- | ------------- | ----------- |
> | 1   | **`substr`** | @string |               |             |

## **is_empty**:

> **Value:**
>
> ```spwn
> (self) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns true if the string has a length of 0, false otherwise_
>
> ### Example:
>
> ```spwn
> $.assert(''.is_empty())
> $.assert(!('x'.is_empty()))
> ```

## **is_lower**:

> **Value:**
>
> ```spwn
> (self) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Checks if whole string is lowercase, ignores characters that is not in the alphabet._

## **is_upper**:

> **Value:**
>
> ```spwn
> (self) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Checks if whole string is uppercase, ignores characters that is not in the alphabet._

## **isdigit**:

> **Value:**
>
> ```spwn
> (self) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns true if string is numeric, false otherwise_
>
> ### Example:
>
> ```spwn
> let num = "123"
> num.isdigit() // true
> ```

## **join**:

> **Value:**
>
> ```spwn
> (self, list: @array) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Joins a list using the string._
>
> ### Example:
>
> ```spwn
> $.assert(''.join(['a', 'b']) == 'ab')
> $.assert('current'.join(['string', ' element', ' join']) == 'currentstring element join')
> ```
>
> ## Arguments:
>
> | #   | name       | type   | default value | description |
> | --- | ---------- | ------ | ------------- | ----------- |
> | 1   | **`list`** | @array |               |             |

## **l_pad**:

> **Value:**
>
> ```spwn
> (self, times: @number, seq: @string = ' ') { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns a left-padded version of the string_
>
> ## Arguments:
>
> | #   | name        | type    | default value | description |
> | --- | ----------- | ------- | ------------- | ----------- |
> | 1   | **`times`** | @number |               |             |
> | 2   | `seq`       | @string | `' '`         |             |

## **l_trim**:

> **Value:**
>
> ```spwn
> (self, tokens: @string | [@string] = [' ','
> ']) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns a left-trimmed version of the string_
>
> ### Example:
>
> ```spwn
> str1 = '      abcd g    '
> str2 = '   pog  __'
> $.assert(str1.l_trim() == 'abcd g    ')
> $.assert(str2.l_trim() == 'pog  __')
> ```
>
> ## Arguments:
>
> | #   | name     | type                 | default value | description |
> | --- | -------- | -------------------- | ------------- | ----------- |
> | 1   | `tokens` | @string or [@string] | `[' ','']`    |             |

## **lowercase**:

> **Value:**
>
> ```spwn
> (self) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Makes whole string lowercase._

## **r_pad**:

> **Value:**
>
> ```spwn
> (self, times: @number, seq: @string = ' ') { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns a right-padded version of the string_
>
> ## Arguments:
>
> | #   | name        | type    | default value | description |
> | --- | ----------- | ------- | ------------- | ----------- |
> | 1   | **`times`** | @number |               |             |
> | 2   | `seq`       | @string | `' '`         |             |

## **r_trim**:

> **Value:**
>
> ```spwn
> (self, tokens: @string | [@string] = [' ','
> ']) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns a right-trimmed version of the string_
>
> ### Example:
>
> ```spwn
> str = 'abcd      '
> str2 = '      abcd g    '
> str3 = '   pog  __'
> $.assert(str.r_trim() == 'abcd')
> $.assert(str2.r_trim() == '      abcd g')
> $.assert(str3.r_trim(tokens = [' ', '_']) == '   pog')
> ```
>
> ## Arguments:
>
> | #   | name     | type                 | default value | description |
> | --- | -------- | -------------------- | ------------- | ----------- |
> | 1   | `tokens` | @string or [@string] | `[' ','']`    |             |

## **replace**:

> **Value:**
>
> ```spwn
> (self, re: @string, replacement: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Arguments:
>
> | #   | name              | type    | default value | description |
> | --- | ----------------- | ------- | ------------- | ----------- |
> | 1   | **`re`**          | @string |               |             |
> | 2   | **`replacement`** | @string |               |             |

## **reverse**:

> **Value:**
>
> ```spwn
> (self) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Reverses the string._

## **split**:

> **Value:**
>
> ```spwn
> (self, spstr: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Splits the string by the specified separator._
>
> ### Example:
>
> ```spwn
> $.assert('a b c'.split(' ') == ['a', 'b', 'c'])
> $.assert('example'.split('') == ['e', 'x', 'a', 'm', 'p', 'l', 'e'])
> ```
>
> ## Arguments:
>
> | #   | name        | type    | default value | description |
> | --- | ----------- | ------- | ------------- | ----------- |
> | 1   | **`spstr`** | @string |               |             |

## **starts_with**:

> **Value:**
>
> ```spwn
> (self, substr: @string) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Checks does the string starts with a string._
>
> ## Arguments:
>
> | #   | name         | type    | default value | description |
> | --- | ------------ | ------- | ------------- | ----------- |
> | 1   | **`substr`** | @string |               |             |

## **substr**:

> **Value:**
>
> ```spwn
> (self, start: @number, end: @number) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Gets a substring beginning at the specified start and ending at the specified end._
>
> ## Arguments:
>
> | #   | name        | type    | default value | description |
> | --- | ----------- | ------- | ------------- | ----------- |
> | 1   | **`start`** | @number |               |             |
> | 2   | **`end`**   | @number |               |             |

## **trim**:

> **Value:**
>
> ```spwn
> (self, tokens: @string | [@string] = [' ','
> ']) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Returns a trimmed version of the string_
>
> ### Example:
>
> ```spwn
> str = 'abcd      '
> str2 = '      abcd g    '
> str3 = '   pog  __'
> $.assert(str.trim() == 'abcd')
> $.assert(str2.trim() == 'abcd g')
> $.assert(str3.trim(tokens = [' ', '_']))
> ```
>
> ## Arguments:
>
> | #   | name     | type                 | default value | description |
> | --- | -------- | -------------------- | ------------- | ----------- |
> | 1   | `tokens` | @string or [@string] | `[' ','']`    |             |

## **uppercase**:

> **Value:**
>
> ```spwn
> (self) { /* code omitted */ }
> ```
>
> **Type:** `@macro`
>
> ## Description:
>
> _Makes whole string uppercase._

## **length**:

> **Type:** `@number`
>
> ## Description:
>
> _Returns the length of the string_
