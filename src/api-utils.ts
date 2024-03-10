import type { User } from './user'

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

export async function checkUserMails(user: User): Promise<any[]> {
    const [login, domain] = user.email.split('@')
    return await checkMails(login, domain)
}

export async function readUserMail(user: User, messageId: number): Promise<any[]> {
    const [login, domain] = user.email.split('@')
    return await apiRequest(`?action=readMessage&login=${login}&domain=${domain}&id=${messageId}`)
}