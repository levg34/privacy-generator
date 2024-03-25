<script lang="ts">
  import { readUserMail } from '../../../ts/utils/api-utils'
  import Mail from '../Mail.svelte'

  export let email: string
  export let id: number
  $: mailContent = readUserMail({ email }, id)
</script>

{#await mailContent}
  <p>loading mail...</p>
{:then mailData}
  <Mail {mailData} />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
