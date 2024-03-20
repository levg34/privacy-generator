<script lang="ts">
  import type { MailData } from '../ts/api-utils'
  import { formatDate } from '../ts/format-utils'

  export let mailData: MailData
</script>

<div class="mail-content">
  <h2>{mailData.subject}</h2>
  <p><strong>De :</strong> {mailData.from}</p>
  <p><strong>Date :</strong> {formatDate(mailData.date)}</p>
  <div>
    <strong>Pièces jointes :</strong>
    {#each mailData.attachments as attachment}
      <div class="attachment">
        <p>{attachment.filename} ({attachment.contentType}, {attachment.size} octets)</p>
      </div>
    {/each}
  </div>
  <div>
    <strong>Corps du message :</strong>
    {@html mailData.htmlBody}
  </div>
</div>

<style>
  .mail-content {
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 10px;
  }
  .attachment {
    background: #f9f9f9;
    border: 1px dashed #d3d3d3;
    padding: 4px;
    margin-top: 5px;
  }
</style>
