class MongooseService {
	/**
	* @description Create an instance of the MongooseService class
	* @param Model {mongoose.model} Mongoose Model to use for the instance
	*/
	constructor ( Model ) {
		this.model = Model;
	}
	/**
	* @description Create a new document on the Model
	* @param {array} [pipeline] Aggregate pipeline to execute
	* @returns {Promise} Returns the results of the query
	*/
	aggregate ( pipeline ) {
		return this.model
		.aggregate( pipeline )
		.exec();
	}
	/**
	* @description Create a new document on the Model
	* @param {object} [body] Body object to create the new document with
	* @returns {Promise} Returns the results of the query
	*/
	create ( body ) {
		return this.model
		.create( body );
	}
	/**
	* @description Count the number of documents matching the query criteria
	* @param {object} [query] Query to be performed on the Model
	* @returns {Promise} Returns the results of the query
	*/
	count ( query ) {
		return this.model
		.countDocuments( query )
		.exec();
	}
	/**
	* @description Delete an existing document on the Model
	* @param {string} [id] ID for the object to delete
	* @returns {Promise} Returns the results of the query
	*/
	delete ( id ) {
		return this.model
		.deleteOne( { _id: id } )
		.exec();
	}
	/**
	* @description Retrieve distinct "fields" which are in the provided status
	* @param {object} [query] Object that maps to the status to retrieve docs for
	* @param {string} [field] The distinct field to retrieve
	* @returns {Promise} Returns the results of the query
	*/
	findDistinct ( query, field ) {
		return this.model
		.find( query )
		.distinct( field )
		.exec();
	}
	/**
	* @description Retrieve a single document from the Model with the provided query
	* @param {object} [query] Query to be performed on the Model
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [options] Optional options to provide query
	* @returns {Promise} Returns the results of the query
	*/
	findOne ( query, projection = { __v: 0 }, options = { lean: true } ) {
		return this.model
		.findOne( query, projection, options )
		.select( { __v: 0 } )
		.exec();
	}
	/**
	* @description Retrieve multiple documents from the Model with the provided query
	* @param {object} [query] - Query to be performed on the Model
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [sort] - Optional argument to sort data
	* @param {object} [options] Optional options to provide query
	* @returns {Promise} Returns the results of the query
	*/
	find ( query, projection = { __v: 0 }, sort = { _id: 1 }, options = { lean: true } ) {
		return this.model
		.find( query, projection, options )
		.sort( sort )
		.select( { __v: 0 } )
		.exec();
	}
	/**
	* @description Retrieve multiple documents from the Model with the provided query
	* @param {object} [query] - Query to be performed on the Model
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [sort] - Optional argument to sort data
	* @param {object} [options] Optional options to provide query
	* @param {object} [skip] - Optional argument to skip data
	* @param {object} [limit] - Optional argument to limit data
	* @returns {Promise} Returns the results of the query
	*/
	findPaginate ( query, projection = { __v: 0 }, sort = { _id: 1 }, options = { lean: true }, skip = 0, limit = 150 ) {
		return this.model
		.find( query, projection, options )
		.sort( sort )
		.skip( skip )
		.limit( limit )
		.select( { __v: 0 } )
		.exec();
	}
	/**
	* @description Retrieve a single document matching the provided ID, from the Model
	* @param {string} [id] Required: ID for the object to retrieve
	* @param {object} [projection] Optional: Fields to return or not return from query
	* @param {object} [options] Optional: options to provide query
	* @returns {Promise} Returns the results of the query
	*/
	findById ( id, projection = { __v: 0 }, options = { lean: true } ) {
		return this.model
		.findById( id, projection, options )
		.exec();
	}
	/**
	* @description Update a document matching the provided ID, with the body
	* @param {object} [query] Query to be performed on the Model
	* @param {object} [body] Body to update the document with
	* @param {object} [options] Optional options to provide query
	* @returns {Promise} Returns the results of the query
	*/
	update ( query, body, options = null ) {
		return this.model
		.updateOne( query, body, options )
		.exec();
	}
	/**
	* @description
	* @param {array} [array_docs] Documents to insert in the model
	* @param {object} [options] Optional: options to provide query
	* @returns  {Promise} Returns the results of the query
	*/
	insertMany ( array_docs, options = null ){
		
		return this.model
		.insertMany( array_docs, options );
	}
	/**
	* @description
	* @param {object} [query] Query to be performed on the Model
	* @param {array} [array_docs] Documents to insert in the model
	* @param {object} [options] Optional: options to provide query
	* @returns  {Promise} Returns the results of the query
	*/
	updateMany ( query, array_docs, options = null ){
		
		return this.model
		.updateMany( query, array_docs, options );
	}
	/**
	* @description
	* @param {object} [conditions] Conditions for selecting the documents to delete
	* @param {object} [options] Optional: options to provide query
	* @returns  {Promise} Returns the results of the query
	*/
	deleteMany ( conditions, options = null ){
		
		return this.model
		.deleteMany( conditions, options )
		.exec();
	}
}
module.exports = MongooseService;