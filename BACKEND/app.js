import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.json({ success: true, message: "Hello from server" });
});

router.post("/send/mail", async (req, res) => {
    const { name, email, message } = req.body;
console.log(email)
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }

    try {
        const subject = "GYM WEBSITE CONTACT";
        const text = message;

        await sendEmail({
            to: process.env.SMTP_MAIL,
            subject,
            text,
            name,
            from: email
        }
    );

        res.status(200).json({
            success: true,
            message: "Message Sent Successfully.",
        });
    } catch (error) {
        console.error("Error in sending email:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at PORT ${process.env.PORT}`);
});
