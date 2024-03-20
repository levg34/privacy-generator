<script lang="ts">
  import Mail from './Mail.svelte'
  import { delay } from '../ts/test-utils'

  export let id: number
  // const mailContent = readUserMail({email: 'test@1secmail.org'}, id)
  $: mailContent =
    id === 639
      ? delay(
          {
            id: 1,
            from: 'expediteur@example.com',
            subject: 'Bienvenue chez ExampleCom!',
            date: new Date('2024-03-10T14:48:00'),
            attachments: [
              {
                filename: 'brochure.pdf',
                contentType: 'application/pdf',
                size: 2547
              }
            ],
            body: 'Ceci est un exemple de corps de message pour le mailExample1.',
            textBody: 'Ceci est un exemple de texte pour le mailExample1.',
            htmlBody: '<p>Ceci est un exemple de HTML pour le <strong>mailExample1</strong>.</p>'
          },
          1500
        )
      : delay(
          {
            id: 1,
            from: 'expediteur2@example.com',
            subject: 'Autre sujet',
            date: new Date('2024-03-11T14:48:00'),
            attachments: [],
            body: 'Ceci est un autre exemple de corps de message pour le mailExample2.',
            textBody: 'Ceci est un autre exemple de texte pour le mailExample2.',
            htmlBody: '<p>Ceci est un autre exemple de HTML pour le <strong>mailExample2</strong>.</p>'
          },
          1500
        )
</script>

{#await mailContent}
  <p>loading mail...</p>
{:then mailData}
  <Mail {mailData} />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
