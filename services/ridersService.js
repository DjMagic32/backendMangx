// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const riders   = require( "../models/riders" ); // Database Model
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class ridersService extends modelServices {
	/**
	* @description Create an instance of ridersService
	*/
	constructor () {
		super( riders, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( riders, queryPopulate );
	};
};
module.exports = new ridersService();