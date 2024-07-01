import { conf } from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.projectId);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, name);
            if (userAccount) {
                // return userAccount
                // call another method
                return this.login(email, password)
            } else {
                return userAccount
            }

        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }
    // Commented
    async getCurrentUser() {
    try {
        await this.account.get()
    } catch (err)
     { throw err }

     return null

}
    async logout() {
    try {
        await this.account.deleteSessions()
    } catch (err)
     { throw err }

     return null
}
}

const AuthService = new AuthService()

export default AuthService