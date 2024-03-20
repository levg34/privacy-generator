import { fakerFR as faker } from '@faker-js/faker'
import type { IUser } from '../user'

export function createRandomUser(availableProvidersList?: string[]): IUser {
    const sex = faker.person.sexType()
    const firstName = faker.person.firstName(sex)
    const lastName = faker.person.lastName()
    const email = faker.internet.email({
        firstName,
        lastName,
        provider: availableProvidersList ? faker.helpers.arrayElement(availableProvidersList) : undefined
    })

    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email,
        firstName,
        lastName,
        sex
    }
}
