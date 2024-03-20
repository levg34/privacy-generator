<script>
export let listData
export let selectEmail
export let selectedEmail

import { onMount } from 'svelte'

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

onMount(() => {
  selectEmail(listData[0]?.id)
})
</script>

<style>
  .email {
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 10px
  }

  .selected {
    background-color: #f3f3f3;
    border-left: 4px solid #0078d7;
    padding-left: 4px;
  }
</style>

<div>
  {#each listData as email}
    <div class="email" class:selected={selectedEmail === email.id} on:click={() => selectEmail(email.id)}>
      <p><strong>De :</strong> {email.from}</p>
      <p><strong>Sujet :</strong> {email.subject}</p>
      <p><strong>Date :</strong> {formatDate(email.date)}</p>
    </div>
  {/each}
</div>