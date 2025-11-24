const db = require('../config/db');


const getallblogs = async () => {
    return db('blogs').select('*');
};

// const getbyuser = async(user_id) => {
//     return db('blogs').select('*').where({user_id});
// }

const createblog = async (userId, title, blog) => {
    // const [id] = await db('blogs').insert({ user_id: userId, title:title, blog:blog }).returning('id');
    // return id;

    return db('blogs').insert({title: title, blog:blog, user_id: userId});
};

const updateblog = async (userId, title, updates) => {
    return db('blogs').where({ title: title, user_id: userId }).update(updates);
};


const deleteblog = async (userId, title) => {
    return db('blogs').where({ title: title, user_id: userId }).del();
};

module.exports = { getallblogs, createblog, updateblog, deleteblog };