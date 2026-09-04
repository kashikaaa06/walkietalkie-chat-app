const {resendClient , sender} = require('./lib/resend')
const {createWelcomeEmailTemplate} = require('./emails/template')
const sendEmail = async (email ,names,clientURL) => {
    await resendClient.emails.send({
        from: `${sender.names} <${sender.email}>`,
        to: email,
        subject: 'Welcome to WalkieTalkie! ',
        html: createWelcomeEmailTemplate(names,clientURL)
    });
    if(error) {
    console.error('Error sending email:',error);
    throw new Error('Failed to send email');
    }
    console.log('Email sent successfully',data);

};

