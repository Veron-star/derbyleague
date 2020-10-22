exports.emailTpl = data => ({
    subject: 'Welcome to DerbyLeague!',
    html: `Hello ${data.firstName}, welcome to DerbyLeague!`,
    text: `Hello ${data.firstName}, welcome to DerbyLeague!`
 });