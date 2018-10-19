<template>
    <div class="field">
        <label> {{ title }} </label>
        <slot></slot>
    </div>
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
