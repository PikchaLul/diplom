const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
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
    organizations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Organization',
            required: true
        }
    ],
    accounts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Account',
          autopopulate: true
        }
    ],
    projects:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            autopopulate: true
        }
    ],
    servers:[
        {
            type: Schema.Types.ObjectId,
            ref: 'OpenVPN',
            autopopulate: true
        }
    ]
})

module.exports = mongoose.model('Project', projectSchema);