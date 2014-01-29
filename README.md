Mailgun for Meteor
===============

#### A meteorite package for sending emails easily using Mailgun. Forked from David Brear's [Sendgrid](https://github.com/DavidBrear/meteor-sendgrid) package.

### Setup Mailgun (if you haven't done so already)

* Visit [Mailgun](http://mailgun.com) and create an account.
* Activate your account.
* Navigate to the **Control Panel** and **Add a Custom Domain** .
* I used a dedicated subdomain for Mailgun, but you can set it up with your primary domain if you like (if you don't already have email set up for your primary domain). Do not configure Receiving MX DNS records if you already have another provider handling inbound mail delivery.
* Update the DNS records for your domain as [instructed by Mailgun](http://documentation.mailgun.com/user_manual.html#verifying-your-domain)
* From the **Control Panel**, Click on the domain you added. 
* Under **SMTP Authentication**, make a note of your mailgun login and password.
* Fill in the usage below.

### Usage

in `server/mailgun_config.js` add:
```javascript
  Meteor.startup(function(){
    Meteor.Mailgun.config({
      username: 'YOUR_MAILGUN_USERNAME',
      password: 'YOUR_MAILGUN_PASSWORD'
    });
  });

  // In your server code: define a method that the client can call
  Meteor.methods({
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }
  });
```

Anywhere you want to send an email:

```javascript

  Meteor.call('sendEmail',{
    to: 'whoItsTo@theDomain.com',
    from: 'no-reply@where-ever.com',
    subject: 'I really like sending emails with Mailgun!',
    text: 'Mailgun is totally awesome for sending emails!',
    html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
  });
```

## Special Thanks
Thanks to [@DavidBrear](https://twitter.com/davidbrear04) for the Sendgrid version (of which this is a fork).
Thanks go out to [@scottmotte](https://twitter.com/scottmotte) for his help in figuring out how to do this without using the NPM module.
