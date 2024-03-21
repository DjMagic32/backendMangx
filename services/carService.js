// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const car   = require( "../models/car" ); // Database Model
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class carService extends modelServices {
	/**
	* @description Create an instance of carService
	*/
	constructor () {
		super( car, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( car, queryPopulate );
	};
};
module.exports = new carService();