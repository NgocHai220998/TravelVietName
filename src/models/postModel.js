
let mongoose = require('../../config/mongodb/db.js');


let postSchema = Schema({
    host : String,
    post : {
        title : String,
        about : String,
        images : [
            {
                src : String
            }
        ],
        toDo : String,
        provide : String,
        who : String,
        why : String,
        where : {
            city : String,
            image : String
        },
        comments : [
            {
                name : String,
                star : Number,
                content : String
            }
        ]
    }
});


const Post = mongoose.model('post',postSchema);


module.exports = Post;
