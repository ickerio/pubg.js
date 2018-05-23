const expect = require('chai').expect

const pubg = require('../../')
const Errors = require('../../src/util/Errors')

const Client = pubg.Client

describe('Client', function() {
	it('should throw an error when an API key is not passed to it', function() {
		expect(function() {
			client = new Client()
		}).to.throw(Error).with.property('message', Errors.NO_API_KEY)
	})

	it('should throw an error if an invalid region is passed to it', function() {
		expect(function() {
			client = new Client('non-existent-key', 'france')
		}).to.throw(Error).with.property('message', Errors.INVALID_SHARD_ID)
	})

	it('should store the API key and shard correctly', function() {
		ApiKey = 'mykey'
		region = 'pc-na'
		client = new Client(ApiKey, region)
		expect(client).to.have.property('key').that.equals(ApiKey)
		expect(client).to.have.property('defaultShard').that.equals(region)
	})

	it('should set a defaultShard if one is not specified', function() {
		client = new Client('mykey')
		expect(client).to.have.property('defaultShard', 'pc-oc')
	})
})