const db = require('../config/db');

const createUser = async (email, username, password) => {
    return db('users').insert({ email, username, password });
};


const findUserByEmail = async (email) => {
    console.log(email);
    return db('users').where({ email }).first();
};


const getbyuser = async(user_id) => {
    return db('blogs').select('*').where({user_id});
}

const findUserById = async (id) => {
    return db('users').where({ id }).first();
};

const getUsers = async () => {
    return db('users').select("*");
}

module.exports = { createUser, findUserByEmail, findUserById , getbyuser};