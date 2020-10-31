const nodemailer = require("nodemailer");

const from = '"ReactApp" <info@reactapp.com>';

function setup() 
 {        return nodemailer.createTransport({
                    host: "smtp.mailtrap.io",
                    port: 2525,
                    auth: {  user: "7c357ed86ea686",  pass: "d44689610a4275"  }
                });

}

function sendConfirmationEmail(user) 
{   const tranport = setup();
    const email = { from, to: user.email, subject: "Welcome", 
                    text: `Welcome. Please, confirm your email.${user.generateConfirmationUrl()}`
                  };
      tranport.sendMail(email) .then(res => { console.log('sent', res) ; })
                               .catch(e => { console.log('not sent- ',e); });
    
}

function sendResetPasswordEmail(user) 
{  const tranport = setup();
   const email = {    from,    to: user.email,    subject: "Reset Password",
                     text: `To reset password follow this link    ${user.generateResetPasswordLink()}`
                };
   tranport.sendMail(email);
}
