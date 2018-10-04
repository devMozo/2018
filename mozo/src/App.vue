<template>
    <FormUser v-on:ready="newUser"></FormUser>
    <section class="wrapper-user materia-shadow">
        <FilterSexUser :sexs="sexsLabels" :active="updateActiveSex"></FilterSexUser>        

        <ul>
            <p v-if="users.filter(user => {
                return filter == 'all' ||  user.sex.toLowerCase() == filter.toLowerCase()
            }).length == 0"> No user added to this gender </p>
            <ItemUser
                v-for="user in users"
                v-if="filter == 'all' || user.sex.toLowerCase() == filter.toLowerCase()"
                :user="user"
                :key="user.id"></ItemUser>
        </ul>
    </section>
</template>

<script>

    import FilterSexUser from '@/components/Filters/FilterSexUser'
    import FormUser from '@/components/FormUser/FormUser'
    import ItemUser from '@/components/ItemUser/ItemUser'

    export default {
        name: 'App',
        components: {
            FilterSexUser,
            FormUser,
            ItemUser        
        },
        data: {
            id: 0,
            users: [],
            filter: '',
            showUsers: false,
            sexsLabels: ['Female', 'Male', 'Undefined', 'All']
        }, 
        methods: {
            newUser(user){
                this.users.push(user)
            },
            updateActiveSex(result){
                this.filter = result
            }
        }
    }
</script>

<style>
    *{ font-family: 'Arial'; color: #444 }
    input, select, button{ width: 100%; padding: 15px; margin-top: 10px; box-sizing: border-box;  }

    .materia-shadow{ box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); display: inline-block; }

    .wrapper-user{ width: calc(100% - 475px); margin-top: 20px; padding: 10px 30px 20px; box-sizing: border-box; display: inline-block; }
    .wrapper-user > ul{ clear: both; }
    .wrapper-user select{ width: 200px; float: right; }
</style>
