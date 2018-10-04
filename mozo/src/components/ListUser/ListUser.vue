<template>
    <ul>
        <p v-if="users.filter(user => {
            return sexFilter == 'all' ||  user.sex.toLowerCase() == sexFilter.toLowerCase()
        }).length == 0"> No user added to this gender </p>
        <ItemUser
            v-for="user in users"
            v-if="sexFilter == 'all' || user.sex.toLowerCase() == sexFilter.toLowerCase()"
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
  props: ['users', 'sexFilter']
}

</script>

<style>
</style>
