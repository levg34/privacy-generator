<script lang="ts">
  import type { IUser } from '../../ts/user'

  export let user: IUser
</script>

<div class="user-card">
  <img class="avatar" src={user.avatar} alt={`Avatar of ${user.firstName}`} />
  <div class="user-info">
    <h2>{user.firstName} {user.lastName}</h2>
    <p>Email: {user.email}</p>
    <p>Birthday: {user.birthday.toDateString()}</p>
    <p>Sex: {user.sex}</p>
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
</style>
