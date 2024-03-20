<script lang="ts">
  import MailLoader from './mail/loader/MailLoader.svelte'
  import MailListLoader from './mail/loader/MailListLoader.svelte'

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

<style>
  div {
    margin-top: 20px;
    text-align: center;
    font-size: 0.9em;
    color: #666;
  }
</style>
