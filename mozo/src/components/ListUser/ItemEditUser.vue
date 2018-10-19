<template>
    <form>
        <FormUserField :title="'Name'">
          <input type="text" v-model="user.name" placeholder="Your name">
        </FormUserField>

        <FormUserField :title="'Age'">
          <input type="number" v-model="user.age" placeholder="Your Age">
          <span> In case of newborn, you can leave the field in 0 (zero). </span>
        </FormUserField>

        <FormUserField :title="'Gender'">
          <FilterSexUser v-on:updateSex="updateActiveSex"></FilterSexUser>
        </FormUserField>
    </form>
</template>

<script>

import FormUserField from '@/components/FormUser/FormUserField'
import FilterSexUser from '@/components/Filters/FilterSexUser'

export default {
  name: 'ItemEditUser',
  components: {
    FormUserField,
    FilterSexUser
  },
  props: ['user'],
  methods: {
    updateActiveSex: function (sex) {
      this.user.sex = sex
    }
  }
}
</script>

<style>

</style>
