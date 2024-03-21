// =============================================================================
// SERVICES
// =============================================================================
const modelServices     = require( "./main/model" );
// =============================================================================
// MODEL
// =============================================================================
const transaction   = require( "../models/transaction" ); // Database Model
// =============================================================================
// CONSTANTS
// =============================================================================
const queryPopulate  = null;

class transactionService extends modelServices {
	/**
	* @description Create an instance of carService
	*/
	constructor () {
		super( transaction, queryPopulate );
		// Create instance of Data Access layer using our desired model
		this.modelServices = new modelServices( transaction, queryPopulate );
	};
};
module.exports = new transactionService();