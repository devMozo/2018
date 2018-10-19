<template>
    <ul>
        <p v-if="users.filter(user => {
            return sexFilter == 'all' ||  user.sex.toLowerCase() == sexFilter.toLowerCase()
        }).length == 0"> No user added to this gender </p>
        <ItemUser
            v-for="user in users"
            v-if="sexFilter == 'all' || user.sex.toLowerCase() == sexFilter.toLowerCase()"
            v-on:remove="removeUser"
            :user="user"
            :key="user.id"></ItemUser>
    </ul>
</template>

<script>

import ItemUser from '@/components/ListUser/ItemUser'

export default {
  name: 'ListUser',
  components: {
    ItemUser
  },
  props: ['sexFilter'],
  data: function () {
    return {
      users: JSON.parse(window.localStorage.getItem('people')) || []
    }
  },
  methods: {
    removeUser: function (userId) {
      let pos = this.users.findIndex(u => {
        return u.id === userId
      })

      this.users.splice(pos, 1)
    }
  }
}

</script>

<style>
</style>
