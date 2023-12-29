const schemasDocumentation = {

  
   /*  talentsSchema: {

        email: "talentDocumentation@test.com",
        phone: "123456789",
        first_name: "firstName",
        middle_name: "middleName",
        last_name: "lastName",
        second_last_name: "secondLastName",
        occupation: "occupation",
        occupation_to: "occupationTo",
        'data.aspiration_money': "$1234567",
        skills: [
            {
                "name": "SELECCIÓN DE PERSONAL",
                "level": "3",
                "type": "Fuerte"
            },
            {
                "name": "ESCUCHA ACTIVA",
                "level": "2",
                "type": "Blanda"
            },
            {
                "name": "SERVICIO AL CLIENTE",
                "level": "3",
                "type": "Fuerte"
            }
        ],
        password: "password"

    }, */

    /* talentsUpdateSchema: {
        email: "talentdemo10@gmail.com",
        first_name: 'Alfonso'
    },

    talentUpdateResponse: {
        "error": false,
        "status": 200,
        "action": "success",
        "data": {
            "_id": "636d62436992cefde2158f03",
            "email": "talentdemo10@gmail.com",
            "phone": "3105261540",
            "first_name": "Juan",
            "middle_name": "Felipe",
            "last_name": "Gonzales",
            "second_last_name": "Sosa",
            "occupation": "Developer",
            "occupation_to": "Developer",
            "data": {
                "aspiration_money": "4000000",
                "about": "Soy muy alegre y creativo, siempre dispuesto a ayudar :)",
                "birth": "12/03/1967",
                "civil_status": "Soltero",
                "country": "CO",
                "document": "43509834",
                "gender": "male",
                "hasjob": "no",
                "lenguages": [
                    {
                        "lenguage": "español",
                        "level": "nativo"
                    }
                ],
                "residence": "Medellin",
                "transport": "Carro",
                "type_contract": "contrato_indefinido",
                "work_permit": "9632448",
                "zone_preference": [
                    {
                        "zone": "medellin",
                        "country": "CO"
                    },
                    {
                        "zone": "bogota",
                        "country": "CO"
                    }
                ],
                "exp": [
                    {
                        "country": "Colombia",
                        "company": "2bEcommerce",
                        "sector": "Development",
                        "position": "Developer",
                        "rank": "employee",
                        "salary": "1850000",
                        "date_start": "01/01/2014",
                        "date_finish": "01/01/2017",
                        "description": "Todo al día"
                    },
                    {
                        "country": "Colombia",
                        "company": "sigma",
                        "sector": "Development",
                        "position": "Developer",
                        "rank": "employee",
                        "salary": "1850000",
                        "date_start": "01/02/2017",
                        "date_finish": "01/02/2019",
                        "description": "Todo al día"
                    }
                ],
                "education": [
                    {
                        "academic_level": "Bachillerato",
                        "title": "Bachiller",
                        "institution": "Colegio Nacional",
                        "methodology": "Presencial",
                        "date_start": "01/01/2004",
                        "date_finish": "01/01/2017"
                    },
                    {
                        "academic_level": "Universidad",
                        "title": "Profesional",
                        "institution": "Universidad Nacional",
                        "methodology": "Presencial",
                        "date_start": "01/01/2017",
                        "date_finish": "01/01/2022"
                    }
                ],
                "forpractice": "No",
                "links": "www.instagram.com",
                "profile_picture": "Yes, smile :)",
                "social_media": "www.instagram.com"
            },
            "skills": [
                {
                    "name": "JAVASCRIPT",
                    "level": "2",
                    "type": "fuerte"
                },
                {
                    "name": "PYTHON",
                    "level": "3",
                    "type": "fuerte"
                },
                {
                    "name": "CSS",
                    "level": "3",
                    "type": "fuerte"
                }
            ],
            "cv": null,
            "step_status": "4",
            "verified": false,
            "password": "$2b$08$EoLDTCAvUZdqMzl5omx9ruQ08tUqHeeXSWGNotz1KeumVKyNpTU4K",
            "security_level": "1",
            "plan": "Basic",
            "status": "Active",
            "date_created": "2022-11-10T20:42:43.054Z",
            "date_email_send": "2022-11-02T20:42:43.054Z",
            "__v": 0
        }
    },

    getTalentResponse: {
        "error": false,
        "status": 200,
        "action": "get-Talent",
        "data": {
            "_id": "636d62436992cefde2158f03",
            "email": "talentdemo10@gmail.com",
            "phone": "3105261540",
            "first_name": "Andres",
            "middle_name": "Felipe",
            "last_name": "Gonzales",
            "second_last_name": "Sosa",
            "occupation": "Developer",
            "occupation_to": "Developer",
            "data": {
                "aspiration_money": "4000000",
                "about": "Soy muy alegre y creativo, siempre dispuesto a ayudar :)",
                "birth": "12/03/1967",
                "civil_status": "Soltero",
                "country": "CO",
                "document": "43509834",
                "gender": "male",
                "hasjob": "no",
                "lenguages": [
                    {
                        "lenguage": "español",
                        "level": "nativo"
                    }
                ],
                "residence": "Medellin",
                "transport": "Carro",
                "type_contract": "contrato_indefinido",
                "work_permit": "9632448",
                "zone_preference": [
                    {
                        "zone": "medellin",
                        "country": "CO"
                    },
                    {
                        "zone": "bogota",
                        "country": "CO"
                    }
                ],
                "exp": [
                    {
                        "country": "Colombia",
                        "company": "2bEcommerce",
                        "sector": "Development",
                        "position": "Developer",
                        "rank": "employee",
                        "salary": "1850000",
                        "date_start": "01/01/2014",
                        "date_finish": "01/01/2017",
                        "description": "Todo al día"
                    },
                    {
                        "country": "Colombia",
                        "company": "sigma",
                        "sector": "Development",
                        "position": "Developer",
                        "rank": "employee",
                        "salary": "1850000",
                        "date_start": "01/02/2017",
                        "date_finish": "01/02/2019",
                        "description": "Todo al día"
                    }
                ],
                "education": [
                    {
                        "academic_level": "Bachillerato",
                        "title": "Bachiller",
                        "institution": "Colegio Nacional",
                        "methodology": "Presencial",
                        "date_start": "01/01/2004",
                        "date_finish": "01/01/2017"
                    },
                    {
                        "academic_level": "Universidad",
                        "title": "Profesional",
                        "institution": "Universidad Nacional",
                        "methodology": "Presencial",
                        "date_start": "01/01/2017",
                        "date_finish": "01/01/2022"
                    }
                ],
                "forpractice": "No",
                "links": "www.instagram.com",
                "profile_picture": "Yes, smile :)",
                "social_media": "www.instagram.com"
            },
            "skills": [
                {
                    "name": "JAVASCRIPT",
                    "level": "2",
                    "type": "fuerte"
                },
                {
                    "name": "PYTHON",
                    "level": "3",
                    "type": "fuerte"
                },
                {
                    "name": "CSS",
                    "level": "3",
                    "type": "fuerte"
                }
            ],
            "cv": null,
            "step_status": "4",
            "verified": false,
            "password": "$2b$08$EoLDTCAvUZdqMzl5omx9ruQ08tUqHeeXSWGNotz1KeumVKyNpTU4K",
            "security_level": "1",
            "plan": "Basic",
            "status": "Active",
            "date_created": "2022-11-10T20:42:43.054Z",
            "date_email_send": "2022-11-02T20:42:43.054Z"
        }
    },

    getAllEmailMessagesTalentsSchema: {

        "error": false,
        "status": 200,
        "action": "get-all-email-message",
        "data": [
            {
                "email_talent": "camilozuluaga@gmail.com",
                "message": "En TalentBox tenemos 1 vacantes necesitando tu experencia y tu titulo, anímate a completar tu registro",
                "step_status": "3",
                "_id": "633e12ba4763f1732efbdab0",
                "date_created": "2022-10-05T23:26:50.414Z",
                "__v": 0
            },
            {
                "email_talent": "andrealoaiza@gmail.com",
                "message": "En TalentBox tenemos 1 vacacantes para Pediatra, anímate a completar tu registro",
                "step_status": "0",
                "_id": "633e12ba4763f1732efbdab1",
                "date_created": "2022-10-05T23:26:50.425Z",
                "__v": 0
            }
        ]

    },
    createNewSkillsResponsesTalentsSchema: {

        "error": false,
        "status": 200,
        "action": "create-new-skill",
        "data": {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        }
    },
    createNewSkillsBodyTalentsSchema: {

        "_id": "62ff89ac6a42fc7a15ef9841453 example",
        "skills": [
            {
                "name": "RECURSIVIDAD",
                "level": "3",
                "type": "Blanda"
            }
        ]
    },
    deleteSkillsBodyTalentsSchema: {

        "_id": "62ff89ac6a42fc7a15ef9841453 example",
        "skills": [
            {
                "name": "RECURSIVIDAD",
                "level": "3",
                "type": "Blanda"
            }
        ]
    },
    deleteSkillsResponsesTalentsSchema: {

        "error": false,
        "status": 200,
        "action": "delete-skill",
        "data": {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        }
    }, */

}

module.exports = schemasDocumentation;