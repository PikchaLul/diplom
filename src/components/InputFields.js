export default {
    "Организации": {
        inputTitle: "Новая организация",
        inputBody:[
            {
                fieldType: "common",
                fieldName: "Имя",
                fieldPlaceholder: "Название организации" 
            },
            {
                fieldType: "common",
                fieldName: "Описание",
                fieldPlaceholder: "Описание организации" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Группа",
                fieldPlaceholder: "Выберите группу" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Пользователь",
                fieldPlaceholder: "Выберите пользователя" 
            }
        ]
    },
    "Проекты":{
        inputTitle: "Новый проект",
        inputBody:[
            {
                fieldType: "common",
                fieldName: "Имя",
                fieldPlaceholder: "Название проекта" 
            },
            {
                fieldType: "common",
                fieldName: "Описание",
                fieldPlaceholder: "Описание проекта" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Организация",
                fieldPlaceholder: "Выберите организацию" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Группа",
                fieldPlaceholder: "Выберите группу" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Пользователь",
                fieldPlaceholder: "Выберите пользователя" 
            }
        ]
    },
    "Аккаунтинг":{
        inputTitle: "Новый аккаунт",
        inputBody:[
            {
                fieldType: "common",
                fieldName: "Имя",
                fieldPlaceholder: "Имя аккаунта" 
            },
            {
                fieldType: "common",
                fieldName: "Описание",
                fieldPlaceholder: "Описание аккаунта" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Проект",
                fieldPlaceholder: "Выберите проект" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Организация",
                fieldPlaceholder: "Выберите организацию" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Привилегии",
                fieldPlaceholder: "Выберите тип привилегии" 
            }
        ]
    },
    "Пользователи":{
        inputTitle: "Новый пользователь",
        inputBody:[
            {
                fieldType: "common",
                fieldName: "Имя",
                fieldPlaceholder: "Введите имя" 
            },
            {
                fieldType: "common",
                fieldName: "Фамилия",
                fieldPlaceholder: "Введите фамилию" 
            },
            {
                fieldType: "common",
                fieldName: "Отчество",
                fieldPlaceholder: "Введите отчество" 
            },
            {
                fieldType: "common",
                fieldName: "Логин",
                fieldPlaceholder: "Введите логин" 
            },
            {
                fieldType: "common",
                fieldName: "Пароль",
                fieldPlaceholder: "Введите пароль" 
            },
            {
                fieldType: "common",
                fieldName: "Подтверждение пароля",
                fieldPlaceholder: "Подтвердите пароль" 
            },
            {
                fieldType: "common",
                fieldName: "e-mail",
                fieldPlaceholder: "E-mail" 
            }
        ]
    },
    "Группы":{
        inputTitle: "Новая группа",
        inputBody:[
            {
                fieldType: "common",
                fieldName: "Имя",
                fieldPlaceholder: "Название группы" 
            },
            {
                fieldType: "common",
                fieldName: "Описание",
                fieldPlaceholder: "Описание группы" 
            },
            {
                fieldType: "lookUp",
                fieldName: "Права доступа",
                fieldPlaceholder: "Выберите тип доступа" 
            }
        ]
    }
}