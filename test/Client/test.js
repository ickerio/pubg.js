const expect = require('chai').expect

const pubg = require('../../')
const Errors = require('../../src/util/Errors')
const Constants = require('../../src/util/Constants')

const Client = pubg.Client

describe('Client', function() {
	it('should throw an error when an API key is not passed to it', function() {
		expect(function() {
			client = new Client()
		}).to.throw(Error).with.property('message', Errors.NO_API_KEY)
	})

	it('should throw an error when a non-string is passed as an API key', function() {
		expect(function() {
			client = new Client(123)
		}).to.throw(Error).with.property('message', Errors.INVALID_API_KEY)
	})

	it('should throw an error if an invalid region is passed to it', function() {
		expect(function() {
			client = new Client('non-existent-key', 'france')
		}).to.throw(Error).with.property('message', Errors.NON_EXISTENT_SHARD_ID)
	})

	it('should store the API key and shard correctly', function() {
		ApiKey = 'non-existent-key'
		region = 'pc-na'
		client = new Client(ApiKey, region)
		expect(client).to.have.property('key').that.equals(ApiKey)
		expect(client).to.have.property('defaultShard').that.equals(region)
	})

	it('should set a defaultShard if one is not specified', function() {
		client = new Client('non-existent-key')
		expect(client).to.have.property('defaultShard', Constants.DEFAULT_SHARD)
	})
})