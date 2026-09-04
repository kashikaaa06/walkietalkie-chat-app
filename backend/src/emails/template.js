const createWelcomeEmailTemplate = (name, clientURL) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                .header { text-align: center; margin-bottom: 30px; }
                .header h1 { font-size: 28px; margin: 0; background: linear-gradient(to right, #360D1C, #5806E5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .content { color: #333; line-height: 1.6; }
                .btn-container { text-align: center; margin: 30px 0; }
                .btn { background: linear-gradient(to right, #360D1C, #5806E5); color: #fff; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block; }
                .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; border-top: 1px solid #eee; margin-top: 30px; }
                .footer a { color: #5B86E5; text-decoration: none; margin: 0 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>📻 Messenger</h1>
                </div>
                <div class="content">
                    <h2>Welcome, ${name}! 🎉</h2>
                    <p>Thank you for joining Messenger – the real-time communication app.</p>
                    <div class="btn-container">
                        <a href="${clientURL}" class="btn">Open Messenger</a>
                    </div>
                    <p>If you need any help or have questions, we're always here to assist you.</p>
                    <p>Happy messaging!</p>
                    <p>Best regards,<br>The Messenger Team</p>
                </div>
                <div class="footer">
                    <p>© ${new Date().getFullYear()} Messenger. All rights reserved.</p>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </body>
        </html>
    `;
};

module.exports = { createWelcomeEmailTemplate };