<script lang="ts">
// import { MailData } from './ts/api-utils.ts'
import { readUserMail } from './ts/api-utils.ts'
import MailLoader from './components/MailLoader.svelte'
import MailListLoader from './components/MailListLoader.svelte'

let selectedEmail

function selectEmail(emailId) {
  selectedEmail = emailId
}
</script>

<main>
  <h1>Mailapp</h1>
  <hr>
  {#if selectedEmail !== undefined}
  <MailLoader id={selectedEmail}/>
  <hr>
  {/if}
  <MailListLoader {selectEmail} {selectedEmail}/>
  <hr>
  <div>Selected email id = {selectedEmail}</div>
</main>

<style>
  main {
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  h1 {
    color: #333;
    text-align: center;
  }

  hr {
    margin: 20px 0;
    border: none;
    height: 1px;
    background-color: #ddd;
  }

  div {
    margin-top: 20px;
    text-align: center;
    font-size: 0.9em;
    color: #666;
  }
</style>
