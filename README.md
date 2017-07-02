bootstrap3-datetimepicker
======================

*Forked from* `tsega/meteor-bootstrap3-datetimepicker`

**Changelog**
* v. 4.18
Removed dependencies on Meteor packages of moment, in favor of node package

---

Bootstrap 3 DateTime picker from Eonasdan, https://github.com/Eonasdan/bootstrap-datetimepicker, packaged for Meteor.js

To install
----------

```sh
$ meteor add tsega:bootstrap3-datetimepicker
```

To use
------

Set up your markup, in the example below a grouped calendar icon with text input (bootstrap3)

```html
<template name="tempName">
...
  <div class="input-group datetimepicker">
    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
    <input class="set-due-date form-control" type="text"/>
  </div>
...
</template>
```

Using jQuery initiate the control as datetime picker after the template has been rendered.

```js
Template.tempName.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});
```
