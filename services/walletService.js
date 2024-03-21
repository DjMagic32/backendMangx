// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const wallet   = require( "../models/wallet" ); // Database Model
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class walletService extends modelServices {
	/**
	* @description Create an instance of carService
	*/
	constructor () {
		super( wallet, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( wallet, queryPopulate );
	};
};
module.exports = new walletService();