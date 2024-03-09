import { checkUserMails, createRandomUser } from './utils'

const main = async () => {
    const user = await createRandomUser()
    console.info(user)
    await checkUserMails(user)
}

main()
