const mongoose = require('mongoose') ;


mongoose.Promise = global.Promise ;
mongoose.connect('mongodb+srv://solly:Saurav7$@cluster0.7bvqw.mongodb.net/TodoApp?retryWrites=true&w=majority',{useNewUrlParser: true}, { useUnifiedTopology: true });

module.exports = {
    mongoose :mongoose
} ;