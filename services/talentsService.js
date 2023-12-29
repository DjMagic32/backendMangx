// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const talents   = require( "../models/talents" ); // Database Model
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class talentsService extends modelServices {
	/**
	* @description Create an instance of talentsService
	*/
	constructor () {
		super( talents, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( talents, queryPopulate );
	};
};
module.exports = new talentsService();