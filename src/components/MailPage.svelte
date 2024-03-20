<script lang="ts">
  import MailLoader from './mail/MailLoader.svelte'
  import MailListLoader from './mail/MailListLoader.svelte'

  let selectedEmail: number | undefined

  function selectEmail(emailId: number) {
    selectedEmail = emailId
  }
</script>

{#if selectedEmail !== undefined}
  <MailLoader id={selectedEmail} />
  <hr />
{/if}
<MailListLoader {selectEmail} {selectedEmail} />
<hr />
<div>Selected email id = {selectedEmail}</div>
