Package.describe({
  "name": "cunneen:mailgun",
  "description": "Wrapper for configuring and easily sending emails using Mailgun.",
  "homepage": "https://github.com/cunneen/meteor-mailgun",
  "author": "Mike Cunneen",
  "version": "1.0.0",
  "git": "https://github.com/cunneen/meteor-mailgun.git",
  summary: 'Easily send emails using Mailgun as your email provider.'
});

Package.on_use(function(api){
  api.use(['email@1.2.1','ecmascript'], 'server');
  api.add_files('mailgun.js', 'server');
  api.export('Mailgun', 'client');
});
