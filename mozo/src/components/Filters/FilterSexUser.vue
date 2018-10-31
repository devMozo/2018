<template>
  <el-form-item label="Select Gender">
    <el-select v-model="value" @change="updateActiveSex()" placeholder="Select Gender">
        <el-option
            v-for="sex in sexs"
            :value="sex.value"
            :key="sex.value"
            :label="sex.label">
        </el-option>
    </el-select>
  </el-form-item>
</template>

<script>

export default {
  name: 'FilterSexUser',
  components: {

  },
  props: ['modeSearcher'],
  data: function () {
    let sexs = [{
      value: 'female',
      label: 'Female'
    }, {
      value: 'male',
      label: 'Male'
    }, {
      value: 'undefined',
      label: 'Undefined'
    }]

    if (this.modeSearcher) {
      sexs.push({
        value: 'all',
        label: 'All'
      })
    }

    return {
      sexs: sexs,
      value: ''
    }
  },
  methods: {
    updateActiveSex () {
      this.$emit('updateSex', this.value)
    }
  }
}
</script>

<style>
  select { width: 100%; }
</style>
