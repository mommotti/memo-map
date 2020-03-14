const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const requiredNum = {
    type: String,
    required: true
}

const LogEntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    comments: String,
    image: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    latitude: {
        ...requiredNum,
        min: -90,
        max: 90
    },
    longitude: {
        ...requiredNum,
        min: -180,
        max: 180
    },
    visitDate: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    });

const LogEntry = mongoose.model('LogEntry', LogEntrySchema)

module.exports = LogEntry