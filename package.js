Package.describe({
  "name": "carlosolivera:mailgun",
  "description": "Wrapper for configuring and easily sending emails using Mailgun.",
  "homepage": "https://github.com/carlos-olivera/meteor-mailgun",
  "author": "Carlos Olivera",
  "version": "1.0.0",
  "git": "https://github.com/carlos-olivera/meteor-mailgun.git",
  summary: 'Easily send emails using Mailgun as your email provider.'
});

Package.on_use(function(api){
  api.use(['email@2.0.0','ecmascript@0.7.3'], 'server');
  api.add_files('mailgun.js', 'server');
  api.export('Mailgun', 'client');
});
