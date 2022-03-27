const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
      type: String,
      required: [true, 'Please add id value'],
      unique: true,
    },
    firstname: {
      type: String,
      required: [true, 'Please add firstname value'],
    },
    lastname: {
      type: String,
      required: [true, 'Please add lastname value'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Please add phoneNumber value'],
      unique: true,
    },
    sex: {
      type: String,
      enum : ['M', 'F'],
      required: [true, 'Please add sex value'],
    },
    address: {
      type: String,
      required: [true, 'Please add address value'],
    },
    profile: {
      type: String,
      required: [true, 'Please add profile value'],
      unique: true,
    },
    isAW80D: {
      type: Boolean,
      required: [true, 'Please add isAW80D value'],
    },
    userType: {
        type: String,
        enum : ['user', 'admin'],
        default: 'user',
        required: [true, 'Please add isAW80D value'],
    },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
