<template>
    <section :id="getHashCode()">
        <form @submit.prevent="refresh()" class="materia-shadow">
            <h2> Add new user </h2>
            <div class="field">
                <label> Complete Name </label>
                <input type="text" v-model="user.name" placeholder="Your name">
            </div>
            <div class="field">
                <label> Age </label>
                <input type="number" v-model="user.age" placeholder="Your Age">
                <span> In case of newborn, you can leave the field in 0 (zero). </span>
            </div>
            <div class="field">  
                <label> Gender </label>              
                <FilterSexUser :sexs="sexsLabels" :active="updateActiveSex"></FilterSexUser>
            </div>
            <p v-if="error" class="error_message"> Warning! There are incompleted or bad inserted fields. </p> 
            <button> Add User </button>
        </form>
    </section>
</template>

<script>

    import FilterSexUser from '@/components/Filters/FilterSexUser'

    export default {
        name: 'FormUser',
        components: {
            FilterSexUser
        },
        props: ['ready'],
        data: 
            () => {
                return {
                    id: 0,
                    error: false,
                    user: {     
                        name: '',
                        age: 0,
                        sex: ''
                    },
                    sexsLabels: ['Female', 'Male', 'Undefined']
                }
            },
        methods: {
            getHashCode(){
                return "user_" + (this.user.id || this.id);
            },
            refresh(){
                
                if(!this.validate()){
                    this.error = true
                    return;
                }

                this.user.id = this.id;
                this.id++;
                
                this.ready(Object.assign({}, this.user));
                this.reset();
            },
            reset(){            
                this.user.name = "";
                this.user.age = 0;
                this.error = false
            },
            updateActiveSex(result){
                this.user.sex = result
            },
            validate(){

                if(this.user.name == "" || this.user.age < 0 || this.user.sex == "")
                    return false

                return true
            }
        }
    }
</script>

<style>
    form{ width: 300px; padding: 30px; margin: 20px 40px; }
    form h2{ margin: 0 0 10px; color: #999; }
    form label{ margin-top: 20px; display: inline-block; color: #bbb}
    form span{ margin-bottom: 30px; font-size: 10px }
    form button{ background-color: #444; color: white; outline: 0; border: 0; transition: 0.3s; cursor: pointer; }
    form button:hover{ opacity: 0.6 }
    form p.error_message{ margin: 20px 0 0; color: red; font-size: 12px; }
</style>
