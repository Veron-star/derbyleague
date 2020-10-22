exports.emailTpl = data => ({
    subject: '[DerbyLeague] New password has been set',
    html: `Hello ${data.firstName}, you have just successfully set a new password for your account`,
    text: `Hello ${data.firstName}, you have just successfully set a new password for your account`
 });