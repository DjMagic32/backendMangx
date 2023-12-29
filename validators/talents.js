// PACKAGES
const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate')

// SCHEMAS VALIDATIONS

const validateCreateTalent =
    [
        check('email')
            .exists()
            .isEmail()
            .not()
            .isEmpty()
            .normalizeEmail(),

        check('phone')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('first_name')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('middle_name')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('last_name')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('second_last_name')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('occupation')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('occupation_to')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('data')
            .exists()
            .isArray()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('skills')
            .exists()
            .isArray()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('skills.*.name')
            .exists()
            .isString().
            not()
            .isEmpty()
            .optional({ nullable: true }),

        check('skills.*.level')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('skills.*.type')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('password')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('occupation')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('residence')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('zone_preference')
            .exists()
            .isArray()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('document')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('lenguages')
            .exists()
            .isArray()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('hasjob')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('birth')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('country')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('work_permit')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('gender')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('civil_status')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('about')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('transport')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('type_contract')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('exp')
            .exists()
            .isArray()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('education')
            .exists()
            .isArray()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('forpractice')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('profile_picture')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('links')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        check('social_media')
            .exists()
            .isString()
            .not()
            .isEmpty()
            .optional({ nullable: true }),

        (req, res, next) => {
            validateResult(req, res, next)
        }

    ]


const validateCreateDeleteExperienceTalent = [

    check('email')
        .trim()
        .exists()
        .isEmail()
        .normalizeEmail()
        .not()
        .isEmpty(),

    check('exp')
        .exists()
        .isArray()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateCreateDeleteEducationTalent = [

    check('email')
        .trim()
        .exists()
        .isEmail()
        .normalizeEmail()
        .not()
        .isEmpty(),

    check('education')
        .exists()
        .isArray()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateCreateDeleteSkillsTalent = [

    check('email')
        .trim()
        .exists()
        .isEmail()
        .normalizeEmail()
        .not()
        .isEmpty(),

    check('skills')
        .exists()
        .isArray()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateUpdateSkillsTalent = [

    check('email')
        .trim()
        .exists()
        .isEmail()
        .normalizeEmail()
        .not()
        .isEmpty(),

    check('skills')
        .exists()
        .isArray()
        .not()
        .isEmpty(),

    check('skills.*.name')
        .exists()
        .isString()
        .not()
        .isEmpty(),

    check('skills.*.level')
        .exists()
        .isString()
        .not()
        .isEmpty(),

    check('skills.*.type')
        .exists()
        .isString()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateEmailTalent = [

    check('email')
        .trim()
        .exists()
        .isEmail()
        .normalizeEmail()
        .not()
        .isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {

    validateCreateTalent,
    validateCreateDeleteExperienceTalent,
    validateCreateDeleteEducationTalent,
    validateCreateDeleteSkillsTalent,
    validateUpdateSkillsTalent,
    validateEmailTalent

}