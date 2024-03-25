<script lang="ts">
  import { checkUserMails } from '../../../ts/utils/api-utils'
  export let selectEmail: (id: number) => void
  export let selectedEmail: number | undefined
  export let email: string
  import MailList from '../MailList.svelte'

  const mailList = checkUserMails({ email })
</script>

{#await mailList}
  <p>loading email list...</p>
{:then listData}
  <MailList {listData} {selectEmail} {selectedEmail} />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
