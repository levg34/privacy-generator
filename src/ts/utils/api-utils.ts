import type { IUser } from '../user'

export interface MailData {
    id: number
    from: string
    subject: string
    date: Date
    attachments: Attachment[]
    body: string
    textBody: string
    htmlBody: string
}

export interface Attachment {
    filename: string
    contentType: string
    size: number
}

export interface MailListData {
    id: number
    from: string
    subject: string
    date: string
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

type UserWithEmail = Partial<IUser> & Pick<IUser, 'email'>

export async function checkUserMails(user: UserWithEmail): Promise<MailListData[]> {
    const [login, domain] = user.email.split('@')
    return await checkMails(login, domain)
}

export async function readUserMail(user: UserWithEmail, messageId: number): Promise<MailData> {
    const [login, domain] = user.email.split('@')
    return await apiRequest(`?action=readMessage&login=${login}&domain=${domain}&id=${messageId}`)
}
