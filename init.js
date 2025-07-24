const mongoose = require('mongoose');
require('dotenv').config();
const Chat = require("./models/chat.js");

// MongoDB Connection
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;
const connectionString = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(connectionString)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });




let allChats = [
    {
        from : "mudasir",
        to : "sheraz",
        msg: "send me the notes for the exam",
        created_at: new Date()
    },
    {
        from : "Arsalan",
        to : "laiba",
        msg: "teach me the js callbacks",
        created_at: new Date()

    },
    {
        from : "farhan",
        to : "usman",
        msg: "bring equipments of repairing",
        created_at: new Date()

    },
    {
        from : "umar",
        to : "ramzan",
        msg: "i want to go lunch with you",
        created_at: new Date()

    },
    {
        from : "hamza",
        to : "usman",
        msg: "please teach me python",
        created_at: new Date()

    },
    {
        from : "hashim",
        to : "shazad",
        msg: "how are you",
        created_at: new Date()

    },
    {
        from : "tahir",
        to : "wamiq",
        msg: "come on play the cricket",
        created_at: new Date()

    }

]


Chat.insertMany(allChats);
 





