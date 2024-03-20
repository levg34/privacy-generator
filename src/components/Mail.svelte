<script lang='ts'>
// import { MailData } from '../ts/api-utils.ts'
export let mailData: MailData
$: console.log('mailData', mailData)

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('fr-FR', options);
  };
</script>

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