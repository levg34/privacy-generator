<script lang="ts">
  export let selectEmail: (id: number) => void
  export let selectedEmail: number | undefined
  import MailList from '../MailList.svelte'
  import { delay } from '../../../ts/utils/test-utils'
  const mailList = delay(
    [
      {
        id: 639,
        from: 'someone@example.com',
        subject: 'Some subject',
        date: '2018-06-08 14:33:55'
      },
      {
        id: 640,
        from: 'someoneelse@example.com',
        subject: 'Other subject',
        date: '2018-06-08 14:40:55'
      }
    ],
    500
  )
</script>

{#await mailList}
  <p>loading email list...</p>
{:then listData}
  <MailList {listData} {selectEmail} {selectedEmail} />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
