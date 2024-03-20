import { fakerFR as faker } from '@faker-js/faker'
import { listAvailableProviders } from './api-utils'
import type { User } from '../user'

export async function createRandomUser(): Promise<User> {
    const sex = faker.person.sexType()
    const firstName = faker.person.firstName(sex)
    const lastName = faker.person.lastName()
    const email = faker.internet.email({
        firstName,
        lastName,
        provider: faker.helpers.arrayElement(await listAvailableProviders())
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
