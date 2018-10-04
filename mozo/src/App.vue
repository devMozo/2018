<template>
    <main>
        <FormUser v-on:created="newUser"></FormUser>

        <section class="wrapper-user materia-shadow">

            <FilterSexUser v-on:updateSex="updateActiveSex" :mode-searcher="true"></FilterSexUser>

            <ListUser :hola="hola" :sex-filter="sexFilter" :users="users"></ListUser>

        </section>
    </main>
</template>

<script>

import FilterSexUser from '@/components/Filters/FilterSexUser'
import FormUser from '@/components/FormUser/FormUser'
import ListUser from '@/components/ListUser/ListUser'

export default {
  name: 'App',
  components: {
    FilterSexUser,
    FormUser,
    ListUser
  },
  data: function () {
    return {
      users: [],
      sexFilter: ''
    }
  },
  methods: {
    newUser (user) {
      this.users.push(user)
    },
    updateActiveSex (result) {
      this.sexFilter = result
    },
    hola (msg) {
      alert(msg)
    }
  }
}
</script>

<style>
    *{ font-family: 'Arial'; color: #444 }
    input, select, button{ width: 100%; padding: 15px; margin-top: 10px; box-sizing: border-box;  }

    main > *{ display: inline-block; vertical-align: top; }

    .materia-shadow{ box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); display: inline-block; }

    .wrapper-user{ width: calc(100% - 475px); margin-top: 20px; padding: 10px 30px 20px; box-sizing: border-box; display: inline-block; }
    .wrapper-user > ul{ clear: both; }
    .wrapper-user select{ width: 200px; float: right; }
</style>
