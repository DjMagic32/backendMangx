// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const company   = require( "../models/company" ); // Database Model
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class companyService extends modelServices {
	/**
	* @description Create an instance of companyService
	*/
	constructor () {
		super( company, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( company, queryPopulate );
	};
};
module.exports = new companyService();