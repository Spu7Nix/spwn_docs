# Object/Trigger Values

To place an object programmaticly, it's practical to have some datatype to represent the object itself. In SPWN, there are 2 datatypes that represent Geometry Dash objects: *object*s and *trigger*s. Both look pretty similar: either of the keywords `obj` and `trigger`, followed by a structure that looks pretty similar to the _dictionary_ type you might already know. Let's take a look at a typical _object_ value:

```spwn
$.obj {
    obj_props.OBJ_ID: 54,
    obj_props.X: 300,
    obj_props.Y: 90,
    obj_props.SCALING: 1.5,
    obj_props.ROTATION: 45,
}
```

The data inside the `{}` curly braces represents properties of the object. Each property has the syntax `key: value,`, where `key` is an **object_key** value, and the value can be a value of a specific datatype decided by the key. These object_keys come from the standard library, inside the `obj_props` dictionary.

Most of these are pretty easy to understand. `X` and `Y` are the position, `ROTATION` is the angle of the object in degrees, et cetera. One that might confuse though, is `OBJ_ID`. This actually decides what kind of object it is. To find out what `OBJ_ID` a specific object has, you can use this level by [Colon](https://www.youtube.com/c/GDColon): 58079690.
<details>
  <summary>Here are some useful object ids</summary>
    https://user-images.githubusercontent.com/43052612/124507879-9c706d00-dd83-11eb-81f4-2ba385cf3e75.png
    
    https://user-images.githubusercontent.com/43052612/124507895-a2664e00-dd83-11eb-9b53-52e515cd0e8a.png
</details>

> **Note:** To avoid typing `obj_props.` all the time, you will usually start your file with `extract obj_props` when you will be working with objects and triggers.

> **Note:** To find out what a specific key from `obj_props` does, you can use [this lookup table](../object_keys.md)
<!--while the (../object_keys.md) link work here. it's actually broken in the web-->

A `trigger` is very similar to an `obj`, but it has a slightly different usecase. You will learn more about this in a later chapter.

# Changing Object Properties

If you ever need to change an object's properties after creating it, you can do so by calling the `set` method:

```spwn
let my_object = obj {
    OBJ_ID: 54,
    X: 300,
    Y: 90,
    SCALING: 1.5,
}
my_object.set(SCALING, 2)
```
