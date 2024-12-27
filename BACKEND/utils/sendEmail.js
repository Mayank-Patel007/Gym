import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        service: "Gmail",
        secure: true,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    }); 

    const mailOptions = {
        from: `${options.name} <${options.from}>`, // Correctly formatted sender name and email
        to: process.env.SMTP_MAIL, // Your email address
        subject: options.subject,
        text: `Name: ${options.name}\nEmail: ${options.from}\nMessage:\n${options.text}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Message sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
