
const { body } = require("express-validator");
const {
  
    talentsSchema,
    talentsUpdateSchema,
    talentUpdateResponse,
    getTalentResponse,
    getAllEmailMessagesTalentsSchema,
    createNewSkillsResponsesTalentsSchema,
    createNewSkillsBodyTalentsSchema,
    deleteSkillsBodyTalentsSchema,
    deleteSkillsResponsesTalentsSchema,
} = require("./schemasDocumentation");

const swaggerDocumentation = {

    openapi: "3.0.3",

    info: {

        title: "Swagger Documentation",

        description: "Documentation"
    },

    servers: [

        {
            url: "http://localhost:8086/api/v1",

        },
    ],

    tags: [

        {
            name: "Talents",

        },
    ],
    paths: {
        /* "/talent/getAll": {

            get: {

                tags: ["Talents"],

                summary: "Get all the talents",

                description: "Get all the talents",

                operationId: "getAllTalents",

                responses: {

                    200: {

                        description: "Successful operation",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {
                                        "error": false,
                                        "status": 200,
                                        "action": "get-all",
                                        "data": [
                                            {
                                                "_id": "634ecd4ff7deafb0c4315311",
                                                "email": "andreslopez@gmail.com",
                                                "phone": "12345678",
                                                "first_name": "Andres",
                                                "middle_name": "Felipe",
                                                "last_name": "Lopez",
                                                "second_last_name": "Gomez",
                                                "occupation": "Developer",
                                                "occupation_to": "Developer",
                                                "data": {
                                                    "aspiration_money": "123456789",
                                                    "about": "lorem impsum",
                                                    "birth": "01/01/2017",
                                                    "country": "Venezuela",
                                                    "document": "1122334455",
                                                    "gender": "Male",
                                                    "hasjob": false,
                                                    "lenguages": "Español",
                                                    "transport": "Motorcycle",
                                                    "work_permit": "123335",
                                                    "exp": [
                                                        {
                                                            "country": "Colombia",
                                                            "company": "2b",
                                                            "sector": "Development",
                                                            "position": "Desarrollador web",
                                                            "rank": "employee",
                                                            "salary": "$200 vef",
                                                            "date_start": "01/01/2013",
                                                            "date_finish": "01/01/2017",
                                                            "description": "Todo ok"
                                                        }
                                                    ],
                                                    "residence": "Colombia",
                                                    "type_contract": "contrato_indefinido",
                                                    "zone_preference": "Colombia",
                                                    "forpractice": "Yes",
                                                    "education": [
                                                        {
                                                            "academic_level": "Universidad",
                                                            "title": "Profesional",
                                                            "institution": "Colegio Nacional",
                                                            "methodology": "Presencial",
                                                            "date_start": "01/01/2004",
                                                            "date_finish": "01/01/2017"
                                                        }
                                                    ],
                                                    "links": "www.facebook.com",
                                                    "profile_picture": "Yees, smile :)",
                                                    "social_media": "Linkedin"
                                                },
                                                "skills": [
                                                    {
                                                        "name": "JAVASCRIPT",
                                                        "level": "3",
                                                        "type": "fuerte"
                                                    },
                                                    {
                                                        "name": "PHP",
                                                        "level": "3",
                                                        "type": "blanda"
                                                    },
                                                    {
                                                        "name": "CSS",
                                                        "level": "3",
                                                        "type": "fuerte"
                                                    }
                                                ],
                                                "cv": null,
                                                "step_status": "4",
                                                "verified": "False",
                                                "password": "$2b$08$8hrirREO0pi5CKMDYRhvne2bJ6yntn.jjjhfb8n4iSEb891rC153G",
                                                "security_level": "1",
                                                "plan": "Basic",
                                                "status": "Active",
                                                "date_created": "2022-10-18T15:59:11.595Z",
                                                "date_email_send": "2022-10-10T15:59:11.595Z"
                                            },
                                            {
                                                "_id": "634ecdf4f7deafb0c4315316",
                                                "email": "marianagomez@gmail.com",
                                                "phone": "987654",
                                                "first_name": "Mariana",
                                                "middle_name": "",
                                                "last_name": "Gomez",
                                                "second_last_name": "Loaiza",
                                                "occupation": "Developer",
                                                "occupation_to": "Developer",
                                                "data": {
                                                    "aspiration_money": "123456789",
                                                    "about": "lorem impsum",
                                                    "birth": "01/01/2017",
                                                    "country": "Colombia",
                                                    "document": "1122334455",
                                                    "gender": "Female",
                                                    "hasjob": false,
                                                    "lenguages": "Español",
                                                    "transport": "Motorcycle",
                                                    "work_permit": "2345",
                                                    "type_contract": "contrato_indefinido",
                                                    "exp": [
                                                        {
                                                            "country": "Colombia",
                                                            "company": "Pragma",
                                                            "sector": "Development",
                                                            "position": "Developer",
                                                            "rank": "employee",
                                                            "salary": "$200 vef",
                                                            "date_start": "01/01/2013",
                                                            "date_finish": "01/01/2017",
                                                            "description": "Todo ok"
                                                        }
                                                    ],
                                                    "residence": "Peru",
                                                    "zone_preference": "Peru",
                                                    "forpractice": "No",
                                                    "education": [
                                                        {
                                                            "academic_level": "Tecnologia",
                                                            "title": "Tecnologo",
                                                            "institution": "Colegio Nacional",
                                                            "methodology": "Presencial",
                                                            "date_start": "01/01/2004",
                                                            "date_finish": "01/01/2017"
                                                        }
                                                    ],
                                                    "links": "www.facebook.com",
                                                    "profile_picture": "Yees, smile to camera :)",
                                                    "social_media": "Instagram"
                                                },
                                                "skills": [
                                                    {
                                                        "name": "JAVASCRIPT",
                                                        "level": "3",
                                                        "type": "fuerte"
                                                    },
                                                    {
                                                        "name": "PHP",
                                                        "level": "3",
                                                        "type": "blanda"
                                                    },
                                                    {
                                                        "name": "CSS",
                                                        "level": "3",
                                                        "type": "fuerte"
                                                    }
                                                ],
                                                "cv": null,
                                                "step_status": "4",
                                                "verified": "False",
                                                "password": "$2b$08$gVnrwUe7oOjR7ib51CzUA.t7soif.tzTsNAkAZUUVsxqEbHvTFzT2",
                                                "security_level": "1",
                                                "plan": "Basic",
                                                "status": "Active",
                                                "date_created": "2022-10-18T16:01:56.474Z",
                                                "date_email_send": "2022-10-10T16:01:56.474Z"
                                            }
                                        ]
                                    }
                                },
                            },
                        },
                    },


                    500: {
                        description: "No hay compañías u ocurrió un error",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "No hay compañías u ocurrió un error"
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }, */
        // =============================================================================
        // TALENTS
        // Create a new talent 
        // =============================================================================
        /* "/talent/create": {

            post: {

                tags: ["Talents"],

                summary: "Add a new talent to database",

                description: "Add a new talent to database",

                operationId: "createTalent",

                requestBody: {

                    content: {

                        "application/json": {

                            schema: {

                                type: "object",

                                example: talentsSchema,
                            },
                        },
                    },
                },

                responses: {

                    200: {

                        description: "successfully created",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: talentsSchema,
                                },
                            },
                        },
                    },

                    500: {
                        description: "Este correo ya está registrado",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "Este correo ya está registrado"
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }, */
        // =============================================================================
        // TALENTS
        // Get a talent by email
        // =============================================================================

        /* "/talent/get": {

            get: {

                tags: ["Talents"],

                summary: "Get a talent by email",

                requestBody: {

                    content: {

                        "application/x-www-form-urlencode": {

                            schema: {

                                type: "object",

                                example: {
                                    email: "talentdemo10@gmail.com"
                                }
                            },
                        },
                    },
                },

                responses: {

                    200: {

                        description: "Successful operation",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: getTalentResponse
                                },
                            },
                        },
                    },

                    500: {
                        description: "No existe un Talento con ese correo",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {


                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "No existe un Talento con ese correo"
                                    },
                                },
                            },
                        },
                    },

                },
            },
        }, */


        // =============================================================================
        // TALENTS
        // Update a talent
        // =============================================================================

        /* "/talent/update": {

            post: {

                tags: ["Talents"],

                summary: "update talent",

                description: "Update a existing talent in the database",

                operationId: "updateTalent",

                requestBody: {

                    content: {

                        "application/x-www-form-urlencode": {

                            schema: {

                                type: "object",

                                example: talentsUpdateSchema,

                            },
                        },
                    },
                },

                responses: {

                    200: {

                        description: "Actualizado correctamente",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: talentUpdateResponse,
                                },
                            },
                        },
                    },

                    500: {
                        description: "No se pudo encontrar el talento con ese email",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "No se pudo encontrar el talento con ese email"
                                    },
                                },
                            },
                        },
                    },

                    "500(2)": {
                        description: "Error al actualizar",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "Error al actualizar"
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }, */
        // =============================================================================
        // Talents
        // Delete one talent
        // =============================================================================
        /* "/talent/delete": {

            post: {

                tags: ["Talents"],

                summary: "Delete a existing talent in the database",

                description: "Delete a existing talent in the database",

                operationId: "deleteTalent",

                requestBody: {

                    content: {

                        "application/x-www-form-urlencode": {

                            schema: {

                                type: "object",

                                example: {

                                    email: "talentDocumentation@test.com",

                                },
                            },
                        },
                    },
                },

                responses: {
                    200: {

                        description: "Actualizado correctamente",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": false,
                                        "status": 200,
                                        "action": "delete-talent",
                                        "data": {
                                            "acknowledged": true,
                                            "modifiedCount": 1,
                                            "upsertedId": null,
                                            "upsertedCount": 0,
                                            "matchedCount": 1
                                        }
                                    }
                                },
                            },
                        },
                    },

                    500: {
                        description: "El talento no existe",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "El talento no existe"
                                    },
                                },
                            },
                        },
                    },

                    "500(2)": {
                        description: "Error al actualizar",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "Error al actualizar"
                                    },
                                },
                            },
                        },
                    },


                },
            },
        }, */

        // =============================================================================
        // TALENTS
        // Get all email meesages of talents
        // =============================================================================

        /* "/talent/getEmailMessages": {

            get: {

                tags: ["Talents"],

                summary: "Get all talents and save data in db",

                description: "Get all the talents and save in db collections(mails)  email, message, step_status of each talent",

                operationId: "getEmailMessages",

                responses: {

                    200: {

                        description: "Successful operation",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: getAllEmailMessagesTalentsSchema
                                },
                            },
                        },
                    },

                    500: {
                        description: "No existe talentos u ocurrio un error",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "No existe talentos u ocurrio un error"
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }, */



        // =============================================================================
        // TALENTS
        // Create news skills
        // =============================================================================

        /* "/talent/createNewSkill": {

            post: {

                tags: ["Talents"],

                summary: "Create news skills in talents",

                description: "Create news skills in talents by id",

                operationId: "createNewSkill",

                requestBody: {

                    content: {

                        "application/json": {

                            schema: {

                                type: "object",

                                example: createNewSkillsBodyTalentsSchema,

                            },
                        },
                    },
                },

                responses: {

                    200: {

                        description: "Nueva Skill agregada",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: createNewSkillsResponsesTalentsSchema,
                                },
                            },
                        },
                    },

                    500: {
                        description: "No existe talentos u ocurrio un error",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "No existe talentos u ocurrio un error"
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }, */
        // =============================================================================
        // TALENTS
        // Delete skills
        // =============================================================================

        /* "/talent/deleteSkills": {

            post: {

                tags: ["Talents"],

                summary: "Delete skills existing in the database",

                description: "Delete skills by name, type and level existing in the database by id of talent",

                operationId: "deleteSkills",

                requestBody: {

                    content: {

                        "application/json": {

                            schema: {

                                type: "object",

                                example: deleteSkillsBodyTalentsSchema,

                            },
                        },
                    },
                },

                responses: {

                    200: {

                        description: "Skill eliminada correctamente",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: deleteSkillsResponsesTalentsSchema,
                                },
                            },
                        },
                    },

                    500: {
                        description: "El talento no existe",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "El talento no existe"
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }, */
        // =============================================================================
        // TALENTS
        // Mailer Send
        // =============================================================================
/* 
        "/talent/mailerSend": {

            get: {

                tags: ["Talents"],

                summary: "Send all emails in the db",

                description: "Send all emails in the database collection(mails) and after of sending, clear all data inside the collection",

                operationId: "mailerSend",

                responses: {

                    200: {

                        description: "Correos enviados y datos actualizados",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": false,
                                        "status": 200,
                                        "action": "mails-send",
                                        "data": "Correos enviados"
                                    },
                                },
                            },
                        },
                    },

                    500: {
                        description: "No se encontraron correos por enviar",

                        content: {

                            "application/json": {

                                schema: {

                                    type: "object",

                                    example: {

                                        "error": true,
                                        "status": 500,
                                        "action": "error",
                                        "data": "No se encontraron correos por enviar"
                                    },
                                },
                            },
                        },
                    },
                },
            },
        }, */

    },




};






module.exports = swaggerDocumentation;