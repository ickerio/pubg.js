class Account {
    constructor(content) {
        this.accountId = content.AccountId;
        this.nickname = content.Nickname;
        this.avatarUrl = content.AvatarUrl;
        this.steamName = content.SteamName;
        this.state = content.State;
        this.inviteAllow = content.InviteAllow;
    }
}

module.exports = Account;