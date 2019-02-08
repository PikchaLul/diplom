const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const organizationSchema = new Schema({
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
    groups: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Group',
          autopopulate: true
        }
    ],
    projects:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            autopopulate: true
        }
    ]
})

module.exports = mongoose.model('Organization', organizationSchema);