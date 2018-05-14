const expect = require('chai').expect

const pubg = require('../../')
const responses = require('./responses')

describe('Players', function() {
	describe('200 Response', function() {
		const data = responses[200]
		const player = new pubg.Player(data)
		it('should be a Player class', function() {
			expect(player).to.be.instanceOf(pubg.Player)
		})

		it('should have a valid ID', function() {
			expect(player).to.have.property('id', data.id)
			expect(player.id).to.be.a('string')
		})

		it('should have a valid assets property', function() {
			expect(player.relationships).to.have.property('assets').and.to.be.an('array')
		})

		it('should have a valid matches array', function() {
			expect(player.relationships).to.have.property('matches').and.to.be.an('array')
		})

		describe('Attributes', function() {
			const attributes = player.attributes
			it('should have a valid name', function() {
				expect(attributes).to.have.property('name', data.attributes.name).and.to.be.a('string')
				
			})

			it('should have a valid shardId', function() {
				expect(attributes).to.have.property('shardId', data.attributes.shardId).and.to.be.a('string')
			})

			it('should have a valid creation date', function() {
				expect(attributes).to.have.property('createdAt').and.to.be.a('Date')
			})

			it('should have a valid patch version', function() {
				expect(attributes).to.have.property('patchVersion', data.attributes.patchVersion).and.to.be.a('string')
			})

			it('should have a valid titleId', function() {
				expect(attributes).to.have.property('titleId', data.attributes.titleId).and.to.be.a('string')
			})
		})
	})
})