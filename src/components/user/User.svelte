<script lang="ts">
  import type { IUser } from '../../ts/user'
  import { formatDate } from '../../ts/utils/format-utils'

  export let user: IUser
</script>

<div class="user-card">
  <img class="avatar" src={user.avatar} alt={`Avatar of ${user.firstName}`} />
  <div class="user-info">
    <h2>{user.firstName} {user.lastName}</h2>
    <p>Email: {user.email}</p>
    <p>Anniversaire: {formatDate(user.birthday)}</p>
    <p>Genre: {user.sex}</p>
    {#if user.address}
      <p>Adresse :</p>
      <div class="user-address">
        <p>{user.address.number} {user.address.street},</p>
        <p>{user.address.zipCode} {user.address.city},</p>
        <p>{user.address.country}</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .user-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    align-items: center;
  }
  .user-info {
    margin-left: 1rem;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-address {
    margin-left: 2rem;
  }
</style>
