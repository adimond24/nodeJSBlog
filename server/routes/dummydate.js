const Post = require("../models/Post");

function insertPostData(){
    Post.insertMany([
        {
            titles: "Post One",
            body: "this is the first post we will be adding. ",
        },
        {
            titles: "Post Two",
            body: "This is another post we will be including in our database",
        },
    ]);
}

insertPostData();  