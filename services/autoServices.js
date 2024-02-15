// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const auto   = require( "../models/auto" ); // Database Model
const autos = require("../controllers/autos");
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class autoService extends modelServices {
	/**
	* @description Create an instance of autoService
	*/
	constructor () {
		super( autos, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( autos, queryPopulate );
	};
};
module.exports = new autoService();