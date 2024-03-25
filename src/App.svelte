<script lang="ts">
  import { writable } from 'svelte/store'
  import MailPage from './components/MailPage.svelte'
  import { UserFactory } from './ts/user'
  import UserPage from './components/user/User.svelte'

  const currentPage = writable('UserPage')

  function navigate(page: string) {
    currentPage.set(page)
  }

  const userPromise = UserFactory.init().then((factory) => {
    return factory.createUser()
  })
</script>

<nav>
  <button on:click={() => navigate('UserPage')}>User</button>
  <button on:click={() => navigate('MailPage')}>Mail</button>
</nav>

<main>
  <h1>Privacy generator</h1>
  <hr />
  {#await userPromise}
    <p>Creating user...</p>
  {:then user}
    <UserPage {user} />
    {#if $currentPage === 'MailPage'}
      <hr />
      <MailPage {user} />
    {/if}
  {:catch error}
    <p style="color: red;">Erreur: {error}</p>
  {/await}
</main>

<style>
  main {
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

  nav {
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  button:hover {
    background-color: #e8e8e8;
  }
</style>
