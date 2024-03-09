import { User, checkMails, checkUserMails, createRandomUser, readUserMail } from './utils'

const main = async () => {
    const user = await createRandomUser()
    console.info(user)
    // const mails = await checkUserMails(user)

    const mails = await checkMails('test', '1secmail.org')
    console.log(mails)
    console.log({
        user,
        id: mails[0].id
    })
    const mailContents = await readUserMail({ email: 'test@1secmail.org' } as User, mails[0].id)
    console.info(mailContents)
}

main()
