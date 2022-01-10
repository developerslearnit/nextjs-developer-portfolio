// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
      res.status(200).json({ message: "Message Sent" });
    })
    .catch((err) => {});

  res.status(200).json({ name: "John Doe" });
};

// function getMessage() {
//   const body = 'This is a test email using SendGrid from Node.js';
//   return {
//     to: 'you@domain.com',
//     from: 'verifiedemail@previousstep.com',
//     subject: 'Test email with Node.js and SendGrid',
//     text: body,
//     html: `<strong>${body}</strong>`,
//   };
// }

// async function sendEmail() {
//   try {
//     await sendGridMail.send(getMessage());
//     console.log('Test email sent successfully');
//   } catch (error) {
//     console.error('Error sending test email');
//     console.error(error);
//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// }

// (async () => {
//   console.log('Sending test email');
//   await sendEmail();
// })();
