import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, time, date } = req.body;
    if (!firstName || !lastName || !email || !phoneNumber || !time || !date) {
        return next(new ErrorHandler("Please fill all the fields", 400));
    }
    try {
        const reservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            time,
            date,
        });

        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
            reservation,
        });
    } catch (error) {
        console.error("Error creating reservation:", error);
        return next(new ErrorHandler("Failed to create reservation", 500));
    }
}
export default sendReservation;