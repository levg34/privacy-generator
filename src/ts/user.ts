import type { SexType } from '@faker-js/faker'
import {
    checkUserMails,
    listAvailableProviders,
    readUserMail,
    type MailData,
    type MailListData
} from './utils/api-utils'
import { createRandomUser } from './utils/faker-utils'

export interface IUser {
    _id: string
    avatar: string
    birthday: Date
    email: string
    firstName: string
    lastName: string
    sex: SexType
}

export interface IUserFunctions {
    checkMails(): Promise<MailListData[]>
    readMail(mailId: number): Promise<MailData>
}

export class User implements IUser, IUserFunctions {
    _id: string
    avatar: string
    birthday: Date
    email: string
    firstName: string
    lastName: string
    sex: SexType

    constructor(userData: IUser) {
        this._id = userData._id
        this.avatar = userData.avatar
        this.birthday = userData.birthday
        this.email = userData.email
        this.firstName = userData.firstName
        this.lastName = userData.lastName
        this.sex = userData.sex
    }

    async checkMails(): Promise<MailListData[]> {
        return await checkUserMails(this)
    }

    async readMail(mailId: number): Promise<MailData> {
        return await readUserMail(this, mailId)
    }
}

export class UserFactory {
    static availableProvidersList: string[] | undefined

    static async init(): Promise<UserFactory> {
        if (!this.availableProvidersList) {
            this.availableProvidersList = await listAvailableProviders()
        }
        return new UserFactory()
    }

    createUser(): User {
        return new User(createRandomUser(UserFactory.availableProvidersList))
    }
}
