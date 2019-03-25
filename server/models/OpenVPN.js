const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const openvpnSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[А-ЯA-Zа-яa-z](.[а-яa-zА-ЯA-Z]*)$/.test(v);
            },
            message: props => `${props.value} не верное Имя`
        },
        maxlength: [30, 'Максимальная длинна имени 30 символов'],
        minlength: [3, 'Минимальная длинна имени 3 символа'],
        required: true
    },
    type: {
        type: String,
        enum: ["machine", "docker", "microtic"],
        required: true
    },
    serverAddressIP: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v);
            },
            message: props => `${props.value} не верное IP`
        },
        maxlength: [45, 'Максимальная длинна ip-адреса 45 символов'],
        minlength: [7, 'Минимальная длинна ip-адреса 7 символа'],
        required: true
    },
    serverAddressHOST: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/.test(v);
            },
            message: props => `${props.value} не верное FQDN`
        },
        maxlength: [255, 'Максимальная длинна FQDN 255 символов'],
        minlength: [3, 'Минимальная длинна FQDN 3 символа'],
        required: true
    },
    sshPort: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[1-9](.[0-9]*){1,5}?$/.test(v);
            },
            message: props => `${props.value} не верный порт`
        },
        maxlength: [5, 'Максимальная длинна имени 5 символов'],
        minlength: [1, 'Минимальная длинна имени 1 символ'],
        required: true
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        autopopulate: true
    },
    scriptDirectoryAddUsers: {
        type: String,
        maxlength: [255, 'Максимальная длинна пути 255 символов'],
        minlength: [1, 'Минимальная длинна пути 1 символ'],
        required: true
    },
    scriptDirectoryMonitoringClients: {
        type: String,
        maxlength: [255, 'Максимальная длинна имени 255 символов'],
        minlength: [1, 'Минимальная длинна имени 1 символ'],
        required: true
    },
    verbose: {
        type: Boolean,
        required: false
    },
    project: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            autopopulate: true
        }
    ]
})

module.exports = mongoose.model('OpenVPN', openvpnSchema);