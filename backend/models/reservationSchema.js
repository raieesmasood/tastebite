import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"],
        minLength: [3, "Last name must be at least 3 characters"],
        maxLength: [30, "Last name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please enter your phone number"],
        minLength: [10, "Phone number must be at least 10 characters"],
        maxLength: [10, "Phone number cannot exceed 15 characters"],
    },
    time: {
        type: String,
        required: [true, "Please select a time"],
    },
    date: {
        type: Date,
        required: [true, "Please select a date"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);