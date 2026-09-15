const { resendClient, sender } = require('../lib/resend.js');
const { createWelcomeEmailTemplate } = require('./template.js');  // ✅ FIXED
const env = require('../lib/env.js');

const sendWelcomeEmail = async ({ to, name }) => {
    try {
        const html = createWelcomeEmailTemplate(name, env.CLIENT_URL);

        const { data, error } = await resendClient.emails.send({
            from: `${sender.name} <${sender.email}>`,
            to: [to],
            subject: 'Welcome to Messenger! 🎉',
            html: html,
        });

        if (error) {
            console.error('❌ Resend error:', error);
            return;
        }

        console.log('✅ Email sent:', data);

    } catch (error) {
        console.error('❌ Error sending email:', error);
    }
};

module.exports = { sendWelcomeEmail };