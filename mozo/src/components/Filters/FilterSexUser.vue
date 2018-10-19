<template>
    <select v-on:change="updateActiveSex">
        <option selected disabled>Select Gender</option>
        <option
            v-for="sex in sexs"
            :value="sex.toLowerCase()"
            :key="sex.toLowerCase()">
            {{ sex }}
        </option>
    </select>
</template>

<script>

export default {
  name: 'FilterSexUser',
  components: {

  },
  props: ['modeSearcher'],
  data: function () {
    let sexs = ['Female', 'Male', 'Undefined']

    if (this.modeSearcher) {
      sexs.push('All')
    }

    return {
      sexs: sexs
    }
  },
  methods: {
    updateActiveSex (event) {
      this.$emit('updateSex', event.target.value)
    }
  }
}
</script>

<style>
  select { width: 100%; }
</style>
