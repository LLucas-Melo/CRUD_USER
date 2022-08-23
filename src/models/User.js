const fs = require('fs');
const{v4}= require('uuid');

let db =require('../database/db.json');

const writetoDB = ()=>{
    const json = JSON.stringify(db);

    fs.writeFileSync('scr/database/db.json',json)
}

const User ={
   create:(user)=>{
    db.users.push({id: v4(), ...user});
    writetoDB()
   }
};
module.exports = User