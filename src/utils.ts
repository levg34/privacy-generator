import { SexType, fakerFR as faker } from '@faker-js/faker'

interface User {
    _id: string
    avatar: string
    birthday: Date
    email: string
    firstName: string
    lastName: string
    sex: SexType
}

let availableProvidersList: string[] = []

export async function makeHttpRequest(url: string): Promise<any> {
    return await fetch(url).then((res) => res.json())
}

export async function apiRequest(path: string): Promise<any> {
    const apiUrl = 'https://www.1secmail.com/api/v1/'
    return await makeHttpRequest(apiUrl + path)
}

export async function checkMails(login: string, domain: string) {
    return await apiRequest(`?action=getMessages&login=${login}&domain=${domain}`)
}

export async function listAvailableProviders() {
    if (!availableProvidersList.length) {
        availableProvidersList = await apiRequest('?action=getDomainList')
    }
    return availableProvidersList
}

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

export async function checkUserMails(user: User): Promise<any[]> {
    const [login, domain] = user.email.split('@')
    return await checkMails(login, domain)
}
