import { fakerFR as faker } from '@faker-js/faker'
import type { IAddress, IUser } from '../user'

export function createRandomUser(availableProvidersList?: string[]): IUser {
    const sex = faker.person.sexType()
    const firstName = faker.person.firstName(sex)
    const lastName = faker.person.lastName()
    const email = faker.internet.email({
        firstName,
        lastName,
        provider: availableProvidersList ? faker.helpers.arrayElement(availableProvidersList) : undefined
    })
    const address: IAddress = {
        street: faker.location.street(),
        zipCode: faker.location.zipCode(),
        city: faker.location.city(),
        country: faker.location.country(),
        number: faker.number.int({ min: 1, max: 150 })
    }

    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email,
        firstName,
        lastName,
        sex,
        address
    }
}
