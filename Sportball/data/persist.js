const mongoose = require("mongoose");

const order_details = new mongoose.Schema({
    adedItems: [
        {
            type: Object,
            defult: "empty",
        },
    ],
    userRole: {
        type: String,
        defult: "empty",
    },
    userName: {
        type: String,
        defult: "empty",
    },
    userEmail: {
        type: String,
        defult: "empty",
    },
    purCas: [
        {
            type: Object,
            defult: "empty",
        },
    ],
    inTime: {
        type: Date,
        defult: "empty",
    },
    OutTime: {
        type: Date,
        defult: "empty",
    },
});

const OrderDetails = mongoose.model("order_details", order_details);

const pruducts = new mongoose.Schema({
    Type: {
        type: String,
        defult: "empty",
    },
    Name: {
        type: String,
        defult: "empty",
    },
    street: {
        type: String,
        defult: "empty",
    },
    HouseNumbe: {
        type: String,
        defult: "empty",
    },
    neighborhor: {
        type: String,
        defult: "empty",
    },
    Operator: {
        type: String,
        defult: "empty",
    },
    Seats: {
        type: String,
        defult: "empty",
    },
    Activity: {
        type: String,
        defult: "empty",
    },
    fencing: {
        type: String,
        defult: "empty",
    },
    lighting: {
        type: String,
        defult: "empty",
    },
    handicappe: {
        type: String,
        defult: "empty",
    },
    condition: {
        type: String,
        defult: "empty",
    },
    Owner: {
        type: String,
        defult: "empty",
    },

    ForSchool: {
        type: String,
        defult: "empty",
    },
    associatio: {
        type: String,
        defult: "empty",
    },
    SportType: {
        type: String,
        defult: "empty",
    },
    lat: {
        type: String,
        defult: "empty",
    },
    lon: {
        type: String,
        defult: "empty",
    },
});

const Order = mongoose.model("pruducts", pruducts);

const userData = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        // user/admin
        role: {
            type: String,
            default: "user",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("users", userData);

module.exports = {
    OrderDetails: OrderDetails,
    User: User,
    Order: Order,
};