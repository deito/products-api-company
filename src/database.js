import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/companydb")
    .then(db => console.log('Db is conected'))
    .catch(error => console.log(error));