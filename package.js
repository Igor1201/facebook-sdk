Package.describe({
  name: 'borges:facebook-sdk',
  summary: "Facebook SDK packaged for Meteor",
  version: "0.2.3",
  git: "https://github.com/Igor/facebook-sdk"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.0");
    api.use(['jquery', 'spacebars', 'templating', 'coffeescript', 'tracker', 'session']);
    api.add_files([
      'vendor/sdk.js',
      'client/templates.html',
      'client/startup.coffee',
    ], 'client');
});
