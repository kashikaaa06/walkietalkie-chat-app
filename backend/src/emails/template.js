const createWelcomeEmailTemplate = (name, clientURL) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to WalkieTalkie</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f5f5f7;
                    padding: 40px 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                }
                .header {
                    background: #000000;
                    padding: 40px;
                    text-align: center;
                }
                .header h1 {
                    color: #ffffff;
                    font-size: 32px;
                    font-weight: 700;
                    margin: 0;
                }
                .header span {
                    color: #25D366;
                }
                .content {
                    padding: 50px 40px;
                    color: #1a1a1a;
                }
                .greeting {
                    font-size: 26px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: #000000;
                }
                .greeting span {
                    color: #25D366;
                }
                .tagline {
                    font-size: 18px;
                    color: #666666;
                    line-height: 1.6;
                    margin-bottom: 30px;
                }
                .btn-container {
                    text-align: center;
                    margin: 40px 0;
                }
                .btn {
                    display: inline-block;
                    background: #25D366;
                    color: #000000 !important;
                    text-decoration: none;
                    padding: 16px 50px;
                    border-radius: 50px;
                    font-size: 17px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .benefits {
                    margin: 40px 0;
                }
                .benefit {
                    padding: 15px 0;
                    border-bottom: 1px solid #f0f0f0;
                    font-size: 16px;
                    color: #333333;
                }
                .benefit:last-child {
                    border-bottom: none;
                }
                .benefit strong {
                    color: #000000;
                }
                .closing {
                    margin-top: 40px;
                    font-size: 16px;
                    color: #555555;
                    line-height: 1.8;
                }
                .closing strong {
                    color: #25D366;
                    font-size: 18px;
                }
                .footer {
                    background: #f9f9f9;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #eeeeee;
                }
                .footer p {
                    color: #999999;
                    font-size: 13px;
                }
                .footer a {
                    color: #25D366;
                    text-decoration: none;
                    margin: 0 10px;
                    font-size: 13px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <!-- Header -->
                <div class="header">
                    <h1>Walkie<span>Talkie</span></h1>
                </div>

                <!-- Content -->
                <div class="content">
                    <div class="greeting">
                        Hey <span>${name}</span>! 🎉
                    </div>

                    <p class="tagline">
                        You just unlocked the fastest way to stay connected.
                        No delays. No missed moments. Just instant conversations.
                    </p>

                    <!-- CTA -->
                    <div class="btn-container">
                        <a href="${clientURL}" class="btn">Start Chatting →</a>
                    </div>

                    <!-- Benefits -->
                    <div class="benefits">
                        <div class="benefit">
                            ⚡ <strong>Lightning-fast</strong> — messages that arrive before you blink
                        </div>
                        <div class="benefit">
                            🎙️ <strong>Talk instantly</strong> — press, speak, and you're heard
                        </div>
                        <div class="benefit">
                            🔐 <strong>Your privacy, your rules</strong> — you decide who sees what
                        </div>
                        <div class="benefit">
                            👥 <strong>Better together</strong> — bring your whole crew into one chat
                        </div>
                    </div>

                    <!-- Closing -->
                    <div class="closing">
                        <p>Ready to experience communication without limits?</p>
                        <p style="margin-top: 15px;">We're thrilled to have you here.</p>
                        <p style="margin-top: 25px;">
                            Warmly,<br>
                            <strong>The WalkieTalkie Team</strong>
                        </p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="footer">
                    <p>© ${new Date().getFullYear()} WalkieTalkie. All rights reserved.</p>
                    <p style="margin-top: 10px;">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Contact</a>
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;
};

module.exports = { createWelcomeEmailTemplate };