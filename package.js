Package.describe({
    name: 'matadur:meteor-bootstrap3-datetimepicker',
    summary: "Bootstrap 3 DateTime picker from @Eonasdan, packaged for Meteor.js",
    version: "4.18.0",
    git: "https://github.com/matadur/meteor-bootstrap3-datetimepicker"
});

Package.on_use(function (api, where) {
    api.versionsFrom('METEOR@0.9.0');

    api.use('jquery', 'client');

    api.add_files([
      'lib/css/bootstrap-datetimepicker.css', // Add Date Time Picker CSS and JS files
      'lib/js/bootstrap-datetimepicker.js',
    ], 'client');
});
