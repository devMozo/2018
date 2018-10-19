<template>
    <main>

        <Header></Header>

        <section class="wrapper-user materia-shadow">

            <FilterSexUser v-on:updateSex="updateActiveSex" :mode-searcher="true"></FilterSexUser>

            <ListUser :sex-filter="sexFilter"></ListUser>

        </section>
    </main>
</template>

<script>

import Header from '@/components/Header/Header'
import FilterSexUser from '@/components/Filters/FilterSexUser'
import ListUser from '@/components/ListUser/ListUser'

export default {
  name: 'App',
  components: {
    FilterSexUser,
    ListUser,
    Header
  },
  data: function () {
    return {
      sexFilter: ''
    }
  },
  methods: {
    updateActiveSex (result) {
      this.sexFilter = result
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
