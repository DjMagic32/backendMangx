// =============================================================================
// SERVICES
// =============================================================================
const mongooseService = require( "./mongoose" ); // Data Access Layer

class modelServices{
	/**
	* @description Create an instance of userService
	*/
	constructor ( model, queryPopulate = null) {
		// Create instance of Data Access layer using our desired model
		this.modelService = new mongooseService( model );
        this.queryPopulate = queryPopulate;
	};
	/**
	* @description Create a new document on the Model
	* @param {array} [pipeline] Aggregate pipeline to execute
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async aggregate ( pipeline ) {
		try {
			const result = await this.modelService.aggregate( pipeline );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Create a new document on the Model
	* @param {object} [body] Body object to create the new document with
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async create ( body ) {
		try {
			const result = await this.modelService.create( body );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Count the number of documents matching the query criteria
	* @param {object} [query] Query to be performed on the Model
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async count ( query ) {
		try {
			const result = await this.modelService.count( query );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Delete an existing document on the Model
	* @param {string} [id] ID for the object to delete
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async delete ( id ) {
		try {
			const result = await this.modelService.delete( id );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Retrieve distinct "fields" which are in the provided status
	* @param {object} [query] Object that maps to the status to retrieve docs for
	* @param {string} [field] The distinct field to retrieve
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async findDistinct ( query, field ) {
		try {
			options.populate = this.queryPopulate;
			const result = await this.modelService.findDistinct( query, field );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Retrieve a single document from the Model with the provided query
	* @param {object} [query] Query to be performed on the Model
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [options] Optional options to provide query
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async findOne ( query, projection = { __v: 0 }, options = { lean: true } ) {
		try {
			options.populate = this.queryPopulate;
			const result = await this.modelService.findOne( query, projection, options );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Retrieve multiple documents from the Model with the provided query
	* @param {object} [query] - Query to be performed on the Model
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [sort] - Optional argument to sort data
	* @param {object} [options] Optional options to provide query
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async find ( query, projection = { __v: 0 }, sort = { _id: 1 }, options = { lean: true } ) {
		try {
			if( this.queryPopulate != null ){

				options.populate = this.queryPopulate;
			}
			const result = await this.modelService.find( query, projection, sort, options );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Retrieve multiple documents from the Model with the provided query
	* @param {object} [query] - Query to be performed on the Model
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [sort] - Optional argument to sort data
	* @param {object} [options] Optional options to provide query
	* @param {object} [page] - Optional argument to page number
	* @param {object} [limit] - Optional argument to limit data
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/					 
	async findPaginate ( query, projection = { __v: 0 }, sort = { _id: 1 }, options = { lean: true }, page = 1, limit = 150 ) {
		try {
			let skip_page   = ( page - 1 ) * limit;
			options.populate = this.queryPopulate;
			const result_page = await this.modelService.findPaginate( query, projection, sort, options, skip_page, page == 1 ? 0 : limit );
			try {
				const result_count 	= await this.modelService.count( query );
                let total_pages    	= Math.ceil(result_count / limit );
				total_pages 		= total_pages * limit < result_count ? total_pages + 1 : total_pages;
				let result_body = {
					docs: result_page,
					total_docs: result_count,
					total_pages: total_pages,
					next_page: total_pages != null && page == total_pages ? null : page + 1,
					prev_page: limit ? page - 1 : null
				};
				return { success: true, body: result_body };
			} catch (error) {
				
				return { success: false, error: error };
			}
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Retrieve a single document matching the provided ID, from the Model
	* @param {string} [id] Required: ID for the object to retrieve
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [options] Optional: options to provide query
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async findById ( id, projection = { __v: 0 }, options = { lean: true } ) {
		try {
			options.populate = this.queryPopulate;
			const result = await this.modelService.findById( id, projection, options );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description Update a document matching the provided ID, with the body
	* @param {object} [query] Required: Query to be performed on the Model
	* @param {object} [body] Required: Body to update the document with
	* @param {object} [options] Optional: Options to provide query
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async update ( query, body, options = { lean: true, new: true } ) {
		try {
			const result = await this.modelService.update( query, body, options );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description
	* @param {*} [array_docs] Required: Documents to insert in the model
	* @param {*} [options] Optional: options to provide query
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async insertMany ( array_docs, options = null ){
		try {
			const result = await this.modelService.insertMany( array_docs, options );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description
	* @param {object} [query] Required: Query to be performed on the Model
	* @param {*} [array_docs] Required: Documents to insert in the model
	* @param {*} [options] Optional: options to provide query
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async updateMany ( query, array_docs, options = null ){
		try {
			const result = await this.modelService.updateMany( query, array_docs, options );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
	/**
	* @description
	* @param {object} [conditions] Conditions for selecting the documents to delete
	* @param {object} [options] Optional: options to provide query
	* @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>} Promise<{ success: boolean, error: any } | { success: boolean, body: any }>
	*/
	async deleteMany ( conditions, options = null ){
		try {
			const result = await this.modelService.deleteMany( conditions, options );
			return { success: true, body: result };
		} catch (error) {

			return { success: false, error: error };
		}
	}
};
module.exports = modelServices;