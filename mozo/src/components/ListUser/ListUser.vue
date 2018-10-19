<template>
    <ul>
        <p v-if="users.filter(user => {
            return sexFilter == 'all' ||  user.sex.toLowerCase() == sexFilter.toLowerCase()
        }).length == 0"> No user added to this gender </p>
        <ItemUser
            v-for="user in users"
            v-if="user.removed != true && (sexFilter == 'all' || user.sex.toLowerCase() == sexFilter.toLowerCase())"
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
  computed: {
    users: function () {
      return JSON.parse(window.localStorage.getItem('people')) || []
    }
  },
  methods: {
    removeUser: function (userId) {
      let pos = this.users.indexOf(userId)
      this.users[pos].removed = true
    }
  }
}

</script>

<style>
</style>
