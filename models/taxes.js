const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const Money = require("../models/money.js");




Money.findOne({
    userID: "247043627501486084"
}, (err, money) => {
    if(err) console.log(err);
    
    money.money = money.money + imposto;
    money.save().catch(err => console.log(err));
    console.log(`Recebidos ${imposto} RazzorCoins.`)
});