const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    login: {
        type: String,
        validate:{
            validator: function(v){
                return /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/.test(v);
            },
            message: props => `${props.value} неверный логин`
        },
        maxlength: [20, 'Максимальная длинна логина 20 символов'],
        minlength: [5, 'Минимальная длинна логина 5 символов'], 
        required: true
    },
    password: {
        type: String,
        validate:{
            validator: function(v){
                return /^[a-z0-9_-]{6,18}$/.test(v);
            },
            message: props => `${props.value} неверный пароль`
        },
        maxlength: [18, 'Максимальная длинна пароля 20 символов'],
        minlength: [6, 'Минимальная длинна пароля 6 символов'],
        required: true
    },
    sessionId: {
        type: String, 
        required: false
    },
    role: {
        type: String,
        enum: ['superuser', 'full', 'read-write', 'view'],
        required: true
    }
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);