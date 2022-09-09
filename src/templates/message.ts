export interface MessageUser {
    /**
 * The username of the user
 */
    username: string;
    /**
     * The nickname of the user. If the user has no nickname, the username is used.
     */
    nickname?: string;
    /**
     * The avatar **URL** of this user.
     * Defaults to https://cdn.discordapp.com/embed/avatars/0.png
     */
    avatarURL?: string;
}

export interface MessageOptions {
    text: string;
}