<template>
    <main>
        <Header></Header>
        <FormUser></FormUser>
    </main>
</template>

<script>

import Header from '@/components/Header/Header'
import FormUser from '@/components/FormUser/FormUser'

export default {
  name: 'NewUserScreen',
  components: {
    Header,
    FormUser
  }
}
</script>

<style>
</style>
