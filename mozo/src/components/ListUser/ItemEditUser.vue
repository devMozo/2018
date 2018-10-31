<template>
    <el-form>
        <FormUserField :title="'Name'">
          <el-input type="text" v-model="user.name" placeholder="Your name"></el-input>
        </FormUserField>

        <FormUserField :title="'Age'">
          <el-input type="number" v-model="user.age" placeholder="Your Age"></el-input>
          <span> In case of newborn, you can leave the field in 0 (zero). </span>
        </FormUserField>

        <FormUserField :title="'Gender'">
          <FilterSexUser v-on:updateSex="updateActiveSex"></FilterSexUser>
        </FormUserField>
    </el-form>
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
