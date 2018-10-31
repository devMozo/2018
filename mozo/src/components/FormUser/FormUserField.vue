<template>
    <el-form-item class="field">
        <label> {{ title }} </label>
        <slot></slot>
    </el-form-item>
</template>

<script>

export default {
  name: 'FormUserField',
  components: {

  },
  props: ['title']
}
</script>

<style>
</style>
