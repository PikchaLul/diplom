const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema({
    login: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/.test(v);
            },
            message: props => `${props.value} неверный логин`
        },
        maxlength: [20, 'Максимальная длинна логина 20 символов'],
        minlength: [5, 'Минимальная длинна логина 5 символов'],
        required: true
    },
    description: {
        type: String,
        maxlength: [100, 'Максимальная длинна имени 100 символов'],
        required: false
    },
    name: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(v);
            },
            message: props => `${props.value} неверное Имя`
        },
        maxlength: [30, 'Максимальная длинна имени 30 символов'],
        minlength: [3, 'Минимальная длинна имени 3 символа'],
        required: false
    },
    surname: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(v);
            },
            message: props => `${props.value} не верное Имя`
        },
        maxlength: [30, 'Максимальная длинна имени 30 символов'],
        minlength: [2, 'Минимальная длинна имени 2 символа'],
        required: false
    },
    patronymic: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(v);
            },
            message: props => `${props.value} неверное Имя`
        },
        maxlength: [30, 'Максимальная длинна имени 30 символов'],
        minlength: [2, 'Минимальная длинна имени 2 символа'],
        required: false
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(v)
            },
            message: props => `${props.value} неверный e-mail`
        },
        maxlength: [320, 'Максимальная длинна e-mail 320 символов'],
        minlength: [3, 'Минимальная длинна e-mail 3 символа'],
        required: false
    },
    password: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-z0-9_-]{6,18}$/.test(v);
            },
            message: props => `${props.value} неверный пароль`
        },
        maxlength: [18, 'Максимальная длинна пароля 20 символов'],
        minlength: [6, 'Минимальная длинна пароля 6 символов'],
        required: true
    },
    sshKey: {
        type: String,
        required: false
    },
    sessionId: {
        type: String,
        required: false
    },
    accessRights: {
        type: String,
        enum: ['machine', 'docker', 'microtic'],
        required: true
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Account', accountSchema);