const expect = require('chai').expect

const pubg = require('../../')
const responses = require('./responses')

describe('Players', function() {
	describe('200 Response', function() {
		var player = new pubg.Player(responses[200])
		it('should be a Player class', function() {
			expect(player).to.be.instanceOf(pubg.Player)
		})
	})
})