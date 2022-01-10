const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { to, from, subject, text, phone, name } = req.body;

  const mailText = `You've been contacted by ${name} :: ${phone} <br/> <br/> ${text}`;

  const mailBody = {
    to: to,
    from: from,
    subject: subject,
    text: mailText,
    html: `<strong>${mailText}</strong>`,
  };

  sgMail
    .send(mailBody)
    .then((response) => {
      console.log("response", response);
      res.status(200).json({ message: "Message Sent" });
    })
    .catch((err) => {});
};
