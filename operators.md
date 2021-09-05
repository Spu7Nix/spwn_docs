# Operators

This is a list of operators in SPWN, what they do and how to use them, for reference.

> **Note:** The precedence of an operator decides the order in which they are calculated. Higher precedences are calculated first, and lower precedences are calculated after. For example, `10 * 10 + 2 * 3` is equal to `(10 * 10) + (2 * 3)` because `*` has a higher precedence than `+`.

| symbol   | description                                                    | example               | placement      | precedence | builtin name                        |
| -------- | -------------------------------------------------------------- | --------------------- | -------------- | ---------- | ----------------------------------- |
| `\|`     | Used to create multiple options in a pattern                   | `@number \| @counter` | `a \| b`       | 8          | `_either_`                          |
| `\|\|`   | Logical OR                                                     | `true \|\| false`     | `a \|\| b`     | 1          | `_or_`                              |
| `&&`     | Logical AND                                                    | `true && true`        | `a && b`       | 1          | `_and_`                             |
| `==`     | Checks if two values are equal                                 | `100 == 100`          | `a == b`       | 2          | `_equal_`                           |
| `!=`     | Checks if two values are not equal                             | `100 != 50`           | `a != b`       | 2          | `_not_equal_`                       |
| `>=`     | Checks if one value is greater or equal to another             | `100 >= 100`          | `a >= b`       | 4          | `_more_or_equal_`                   |
| `<=`     | Checks if one value is smaller or equal to another             | `100 <= 100`          | `a <= b`       | 4          | `_less_or_equal_`                   |
| `>`      | Checks if one value is greater than another                    | `100 > 50`            | `a > b`        | 3          | `_more_`                            |
| `<`      | Checks if one value is smaller than another                    | `50 < 100`            | `a < b`        | 3          | `_less_`                            |
| `*`      | Calculates the product of two values                           | `100 * 100`           | `a * b`        | 7          | `_times_`                           |
| `%`      | Calculates the modulo of two values                            | `100 % 10`            | `a % b`        | 7          | `_mod_`                             |
| `^`/`**` | Calculates the result of a value to the power of another value | `100 ^ 2`             | `a ^ b`        | 9          | `_pow_`                             |
| `+`      | Calculates the sum of two values                               | `100 + 100`           | `a + b`        | 6          | `_plus_`                            |
| `-`      | Calculates the difference of two values                        | `100 - 100`           | `a - b`        | 6          | `_minus_`                           |
| `/`      | Calculates the quotient of two values                          | `100 / 2`             | `a / b`        | 7          | `_divided_by_`                      |
| `!`      | Logical NOT                                                    | `!true`               | `!a`           |            | `_not_`                             |
| `=`      | Assigns a value to a variable                                  | `val = 100`           | `a = b`        | 0          | `_assign_`                          |
| `+=`     | Adds a value to a variable                                     | `val += 100`          | `a += b`       | 0          | `_add_`                             |
| `-=`     | Subtracts a value from a variable                              | `val -= 100`          | `a -= b`       | 0          | `_subtract_`                        |
| `*=`     | Multiplies a variable by a value                               | `val *= 100`          | `a *= b`       | 0          | `_multiply_`                        |
| `/=`     | Divides a variable by a value                                  | `val /= 100`          | `a /= b`       | 0          | `_divide_`                          |
| `^=`     | Seta a variable to the power of a value                        | `val ^= 2`            | `a ^= b`       | 0          | `_exponate_`                        |
| `%=`     | Sets a variable to its modulo of a value                       | `val %= 100`          | `a %= b`       | 0          | `_modulate_`                        |
| `++`     | Increments a variable by 1                                     | `val++`               | `a++` or `++a` |            | `_increment_` and `_pre_increment_` |
| `--`     | Decrements a variable by 1                                     | `val--`               | `a--` or `--a` |            | `_decrement_` and `_pre_decrement_` |
| `as`     | Converts a value to another type                               | `100 as @string`      | `a as b`       | 10         | `_as_`                              |
| `has`    | Checks if one value contains another                           | `number_list has 4`   | `a has b`      | 2          | `_has_`                             |
| `..`     | Creates a range between two values                             | `0..10`               | `a..b`         | 5          | `_range_`                           |
| `/%`     | Calculates the integer quotient of two values                  | `100 /% 2`            | `a /% b`       | 7          | `_intdivide_`                       |
| `/%=`    | Integer-divides a variable by a value                         | `val /%= 3`           | `a /%= b`      | 0          | `_intdivided_by_`                   |
| `<=>`    | Swaps the values of two variables                              | `val1 <=> val2`       | `a <=> b`      | 0          | `_swap_`                            |
