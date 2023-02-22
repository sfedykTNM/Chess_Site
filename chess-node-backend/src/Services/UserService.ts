const express = require('express');
const db = require('../Models/init.ts');
const User = db.users;

const findUser = async (user_id) => {
    console.log('finding user');
    return await User.findOne({
        where: {
            id: 'b141f153-d95f-4081-8590-cfe4c496bdd6'
        }
    }).then(user => {
        console.log(user)
    });
};

module.exports = {
    findUser,
};