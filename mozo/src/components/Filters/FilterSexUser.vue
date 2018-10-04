<template>
    <select v-on:change="updateActiveSex">
        <option selected disabled>Select Gender</option>
        <option 
            v-for="sex in sexs" 
            :value="sex.toLowerCase()"> 
            {{ sex }} 
        </option>
    </select>
</template>

<script>

    export default {
        name: 'FilterSexUser',
        components: {
        
        },       
        props: ['sexs', 'active'],
        methods: {
            updateActiveSex(event) {
                this.active(event.target.value) 
            }
        }
    }
</script>

<style>
</style>
