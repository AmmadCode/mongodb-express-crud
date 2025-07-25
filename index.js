const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chat.js");
require('dotenv').config();
const methodOverride = require("method-override");



app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



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




app.get("/", (req, res) => {
  res.render("main.ejs")
});


app.get("/chats", async (req, res) => {
  let datas = await Chat.find();
  res.render("index.ejs", { datas })

});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs")
});


app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
  });
  newChat.save().then((res) => {
    console.log("Chat saved sucessfully");
  }).catch((err) => {
    console.log(err);
  })
  res.redirect("/chats")


});



app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id)
  res.render("edit.ejs", { chat })
})

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg : newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
  console.log(updatedChat);
  res.redirect("/chats");
})


app.delete("/chats/:id",  async (req,res) => {
  let { id } = req.params;
  let deleted =  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");


})


app.listen(8080, () => {
  console.log("Server is running on port 8080")
})




