/* Usage:

  Meteor.startup(function(){
    Meteor.Mailgun.config({
      username = 'MAILGUN_USERNAME',
      password = 'MAILGUN_PASSWORD'
    });
  });

 * In server directory:

    Meteor.Mailgun.send({
      to: 'something@something.com',
      from: 'you@yourdomain.com',
      subject: 'A subject',
      text: 'This is the text',
      html: 'With meteor it''s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
    });
 *
 */

Meteor.Mailgun = {
  config: function(options){
    var protocol = "smtps";
    username = options['username'];
    password = options['password'];
    host = 'smtp.mailgun.org';
    port = '465';
    process.env.MAIL_URL = `${protocol}://${username}:${password}@${host}:${port}/`;
  },
  // a wrapper for Email just to be consistent.
  send: function(options){
    Email.send(options);
  }
};
