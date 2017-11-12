class Account {
    constructor(content, client) {
        this.accountId = content.accountId;
        this.nickname = content.nickname;
        this.steamId = content.steamId;

        this.client = client;
    }
    
    profile(options) {
        return this.client.getProfile(this.nickname, options);
    }

    matchHistory() {
        return this.client.getMatchHistory(this.accountId);
    }

}

module.exports = Account;