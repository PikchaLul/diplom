import Organizations from './Organizations'
import Projects from './Projects'
import OpenVPN from './OpenVPN'
import Credentials from './Credentials'
import Users from './Users'
import Groups from './Groups'


export default {
    "Организации":{
        subsectionComponent: Organizations,
        subsectionProps: {
            sectionName: "Организации",
            sectionNameCount: "3",
            subsectionData:{
                listOrganizations:[
                    {
                        "0": "Название отдела",
                        "1": "0",
                        "2": "0",
                        "3": "0",
                        "4": "0"
                    },
                    {
                        "0": "ФИТ",
                        "1": "0",
                        "2": "1",
                        "3": "100",
                        "4": "0"
                    },
                    {
                        "0": "ФТ",
                        "1": "50",
                        "2": "1",
                        "3": "100",
                        "4": "0"
                    }
                ],
                links:["Кол-во пользователей", "Кол-во проектов", "Кол-во OpenVPN", "Доступы"]  
            }
        }  
    },
    "Проекты":{
        subsectionComponent: Projects,
        subsectionProps: {
            sectionName: "Проекты",
            sectionNameCount: "3",
            subsectionData:{
                header:[ 
                    {
                        columnName:"Название проекта",
                        position: ""
                    },
                    {
                        columnName:"Организация",
                        position: "center"
                    },
                    {
                        columnName:"Кол-во серверов",
                        position: "center"
                    },
                    {
                        columnName:"Действия",
                        position: "center"
                    }
                ],
                body:[
                    [
                        {type:"projectName", data: "culture_region_ansible"},
                        {type:"organizationName", data: "ФИТ"},
                        {type:"servers", data: {total: 100, online: 70, offline: 30}},
                        {type:"icons", data: ["plus", "minus", "trash"]} 
                    ]
                ]
            }
        }  
        
    },
    "Аккаунтинг":{
        subsectionComponent: Credentials,
        subsectionProps: { 
            sectionName: "Аккаунтинг",
            sectionNameCount: "1",
            subsectionData:{
                header:[ 
                    {
                        columnName:"Имя пользователя",
                        position: ""
                    },
                    {
                        columnName:"Тип",
                        position: "center"
                    },
                    {
                        columnName:"Организация",
                        position: "center"
                    },
                    {
                        columnName:"Проекты",
                        position: "center"
                    },
                    {
                        columnName:"OpenVPN",
                        position: "center"
                    },
                    {
                        columnName:"Действия",
                        position: "center"
                    }
                ],
                body:[
                    [
                        {type:"userName", data: "Имя пользователя"},
                        {type:"type", data: "Machine"},
                        {type:"organizationName", data: "ФИТ"},
                        {type:"projectList", data: "Список проектов"},
                        {type:"serverList", data: "Список OpenVPN"},
                        {type:"icons", data: ["plus", "minus", "pencil-alt", "trash"]} 
                    ]
                ]
            }
        } 
    },
    "OpenVPN":{
        subsectionComponent: OpenVPN,
        subsectionProps: {  
            sectionName: "OpenVPN",
            sectionNameCount: "5",
            subsectionData:{
                header:[ 
                    {
                        columnName:"Имя OpenVPN",
                        position: ""
                    },
                    {
                        columnName:"Тип",
                        position: "center"
                    },
                    {
                        columnName:"Организация",
                        position: "center"
                    },
                    {
                        columnName:"Статус",
                        position: "center"
                    },
                    {
                        columnName:"Кол-во полномочий",
                        position: "center"
                    },
                    {
                        columnName:"Пользователь",
                        position: "center"
                    },
                    {
                        columnName:"Действия",
                        position: "center"
                    }
                ],
                body:[
                    [
                        {type:"openvpnName", data: "Demo Inventory"},
                        {type:"type", data: "Docker"},
                        {type:"organizationName", data: "ФИТ"},
                        {type:"status", data: "online"},
                        {type:"credentialsCount", data: {total: 10, online: 3, offline: 7}},
                        {type:"userIcons", data: ["plus", "minus"]},
                        {type:"actionIcons", data: ["pencil-alt", "trash", "play", "sync", "stop"]} 
                    ]
                ]
            }
        } 
    },
    "Пользователи":{
        subsectionComponent: Users,
        subsectionProps: {        
            sectionName: "Пользователи",
            sectionNameCount: "6",
            subsectionData:{
                header:[ 
                    {
                        columnName:"Имя пользователя",
                        position: ""
                    },
                    {
                        columnName:"Статус",
                        position: "center"
                    },
                    {
                        columnName:"Действия",
                        position: "center"
                    }
                ],
                body:[
                    [
                        {type:"userName", data: "Саша"},
                        {type:"status", data: "online"},
                        {type:"icons", data: ["pencil-alt", "trash", ]} 
                    ]
                ]
            }
        } 
    },
    "Группы":{
        subsectionComponent: Groups,
        subsectionProps: {          
            sectionName: "Группы",
        } 
    }
}