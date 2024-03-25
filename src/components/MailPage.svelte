<script lang="ts">
  import MailLoader from './mail/loader/MailLoader.svelte'
  import MailListLoader from './mail/loader/MailListLoader.svelte'
  import type { IUser } from '../ts/user'

  export let user: IUser

  let selectedEmail: number | undefined

  function selectEmail(emailId: number) {
    selectedEmail = emailId
  }
</script>

{#if selectedEmail !== undefined}
  <MailLoader id={selectedEmail} email={user.email} />
  <hr />
{/if}
<MailListLoader {selectEmail} {selectedEmail} email={user.email} />
<hr />
<div>Selected email id = {selectedEmail}</div>

<style>
  div {
    margin-top: 20px;
    text-align: center;
    font-size: 0.9em;
    color: #666;
  }
</style>
