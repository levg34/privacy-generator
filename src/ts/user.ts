import type { SexType } from '@faker-js/faker'
import { listAvailableProviders, type MailData, type MailListData } from './utils/api-utils'
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
    readMail(mailId: number): MailData
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

    checkMails(): Promise<MailListData[]> {
        throw new Error('Method not implemented.')
    }

    readMail(mailId: number): MailData {
        throw new Error('Method not implemented.')
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
