const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        validate:{
            validator: function(v){
                return /^[А-ЯA-Zа-яa-z](.[а-яa-zА-ЯA-Z]*)$/.test(v);
            },
            message: props => `${props.value} не верное Имя`
        },
        maxlength: [30, 'Максимальная длинна имени 30 символов'],
        minlength: [3, 'Минимальная длинна имени 3 символа'], 
        required: true
    },
    description: {
        type: String,
        maxlength: [100, 'Максимальная длинна имени 100 символов'],
        required: false
    },
    accounts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Account',
          autopopulate: true
        }
    ],
    organizations:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Organization',
            autopopulate: true
        }
    ]
})

module.exports = mongoose.model('Group', groupSchema);