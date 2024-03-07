// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const user   = require( "../models/user" ); // Database Model
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class userService extends modelServices {
	/**
	* @description Create an instance of userService
	*/
	constructor () {
		super( user, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( user, queryPopulate );
	};
};
module.exports = new userService();