
let mongoose = require('../../config/mongodb/db.js');


let postSchema = mongoose.Schema({
    host : String,
    dola : {
        value : String,
        time : StringY
    },
    star : Number,
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
