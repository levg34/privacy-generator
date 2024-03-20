<script lang="ts">
  export let listData: MailListData[]
  export let selectEmail: (id: number) => void
  export let selectedEmail: number | undefined

  import { onMount } from 'svelte'
  import { formatDate } from '../ts/utils/format-utils'
  import type { MailListData } from '../ts/utils/api-utils'

  onMount(() => {
    selectEmail(listData[0]?.id)
  })
</script>

<div>
  {#each listData as email}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="email" class:selected={selectedEmail === email.id} on:click={() => selectEmail(email.id)}>
      <p><strong>De :</strong> {email.from}</p>
      <p><strong>Sujet :</strong> {email.subject}</p>
      <p><strong>Date :</strong> {formatDate(email.date)}</p>
    </div>
  {/each}
</div>

<style>
  .email {
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 10px;
  }

  .selected {
    background-color: #f3f3f3;
    border-left: 4px solid #0078d7;
    padding-left: 4px;
  }
</style>
