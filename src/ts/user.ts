import type { SexType } from '@faker-js/faker'

export interface User {
    _id: string
    avatar: string
    birthday: Date
    email: string
    firstName: string
    lastName: string
    sex: SexType
}
