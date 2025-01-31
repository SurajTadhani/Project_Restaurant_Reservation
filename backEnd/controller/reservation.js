import ErrorHandler from "../error/error.js";
import { sendMail } from "../helpers/sendMail.js";
import { Reservation } from "../models/reservationSchema.js";
import { getThankYouEmail } from "../helpers/getThankYouEmail .js";



const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });

   
    const userName = firstName + " " + lastName;
    sendMail(email, "Thank You For Reservation", "", getThankYouEmail(userName,date,time))
        .catch(err => console.error("Email Sending Error:", err));

} catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return next(error);
}


};


export default send_reservation;