let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mernproject601@gmail.com",
    pass: "cqydxbhaafamnqgx",
  },
});

const sendOtpMail = async (user_email, otp) => {
  try {
    await transporter.sendMail({
      from: "mernproject601@gmail.com",
      to: user_email,
      subject: "Your OTP Code 🔐",
      html: `
        <h2>Password Reset OTP</h2>
        <p>Your OTP is:</p>
        <h1 style="color:blue;">${otp}</h1>
        <p>This OTP is valid for 5 minutes.</p>
      `,
    });
  } catch (error) {
    console.log("OTP Mail Error:", error);
  }
};

const sendBookingMail = async (user_email, booking_data) => {
  try {
    await transporter.sendMail({
      from: "mernproject601@gmail.com",
      to: user_email,
      subject: "Bus Booking Confirmation 🎫",
      html: `
        <h2>Booking Confirmed ✅</h2>
        <p><b>Bus:</b> ${booking_data.bus_id}</p>
        <p><b>From:</b> ${booking_data.start_from}</p>
        <p><b>To:</b> ${booking_data.end_point}</p>
        <p><b>Seats:</b> ${booking_data.booked_seats}</p>
        <p><b>Price:</b> ₹${booking_data.ticket_price}</p>
        <p><b>Travel Date:</b> ${booking_data.trave_data}</p>
        <p><b>BookDate:</b> ₹${booking_data.book_date}</p>

      `,
    });
  } catch (error) {
    console.log("Mail Error:", error);
  }
};
module.exports = { sendOtpMail, sendBookingMail };
