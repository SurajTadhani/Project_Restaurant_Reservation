export const getThankYouEmail = (userName, reservationDate, reservationTime) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reservation Confirmed</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              
            }
            .container {
                max-width: 600px;
                margin: 30px auto;
                background: #ffffff;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
               
            }
            h1 {
                color: #333;
                font-size: 24px;
                margin-bottom: 10px;
            }
            p {
                font-size: 16px;
                color: #555;
                margin: 8px 0;
            }
            .highlight {
                font-weight: bold;
                color: #222;
            }
            .reservation-details {
                background: #f8f8f8;
                padding: 15px;
                border-radius: 8px;
                margin: 20px 0;
            }
            .footer {
                margin-top: 20px;
                font-size: 14px;
                color: #777;
            }
            .btn {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                background: #000;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🎉 Reservation Confirmed!</h1>
            <p>Dear <span class="highlight">${userName}</span>,</p>
            <p>Thank you for reserving a table with us. We are excited to welcome you!</p>
            <div class="reservation-details">
                <p><span class="highlight">📅 Date:</span> ${reservationDate}</p>
                <p><span class="highlight">⏰ Time:</span> ${reservationTime}</p>
            </div>
            <p>If you have any questions or need to modify your reservation, feel free to contact us.</p>
            <a href="tel:+1234567890" class="btn">Call Us 📞</a>
            <div class="footer">
                <p>Best Regards,</p>
                <p><strong>Dreamcatcher</strong></p>
            </div>
        </div>
    </body>
    </html>
    `;
};


