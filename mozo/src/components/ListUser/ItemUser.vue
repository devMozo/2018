<template>
    <li>
      <section v-if="!editMode">
          <h2> {{ user.name }} </h2>
          <h4> {{ user.sex }} </h4> - <h5> {{ user.age }} years old </h5>
      </section>
      <section v-else>
        <ItemEditUser :user="user"></ItemEditUser>
      </section>
       <p v-if="error" class="error_message"> Warning! There are incompleted or bad inserted fields. </p>
      <button v-on:click="edit"> Edit </button>
    </li>
</template>

<script>

import ItemEditUser from '@/components/ListUser/ItemEditUser'

export default {
  name: 'ItemUser',
  components: {
    ItemEditUser
  },
  props: ['user'],
  data: function () {
    return {
      editMode: false,
      error: false
    }
  },
  methods: {
    edit: function () {
      if (this.editMode) {
        if (this.user.name === '' || this.user.age < 0 || this.user.sex === '') {
          this.error = true
        } else {
          this.editMode = false
          this.error = false
        }
      } else {
        this.editMode = true
      }
    }
  }
}
</script>

<style>.
  li{ width: 100%; margin-top: 10px; padding-top: 10px; border-top: 1px solid #aaa;  display: inline-block;}
  li *{ color: #444; text-transform: capitalize; }
  li h2{ margin-bottom: 0; }
  li h4, li h5{ font-size: 16px; color: #777; margin: 10px 0; display: inline-block; }
  li button{ display: block; width: 100px; border: 0; background-color: #444; color: white; padding: 10px; transition: 0.3s; cursor: pointer; }
  li button:hover{ opacity: 0.6; }
</style>
