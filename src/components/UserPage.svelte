<script lang="ts">
  import { UserFactory } from '../ts/user'
  import User from './user/User.svelte'

  //   const factory: UserFactory = await UserFactory.init()
  const userPromise = UserFactory.init().then((factory) => {
    return factory.createUser()
  })
</script>

{#await userPromise}
  <p>Creating user...</p>
{:then user}
  <User {user} />
{:catch error}
  <p style="color: red;">Erreur: {error}</p>
{/await}
