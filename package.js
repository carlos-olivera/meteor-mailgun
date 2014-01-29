Package.describe({
  summary: 'Easily send emails using Mailgun as your email provider.'
});

Package.on_use(function(api){
  api.add_files('mailgun.js', 'server');
  api.export('Mailgun', 'client');
});
