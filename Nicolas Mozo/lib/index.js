Vue.component('filter-user', {
	template: `
		<select v-on:change="updateActiveSex">
			<option selected disabled>Select Gender</option>
            <option 
				v-for="sex in sexs" 
				:value="sex.toLowerCase()"> 
				{{ sex }} 
			</option>
		</select>
	`,
	props: ['sexs', 'active'],
	methods: {
		updateActiveSex(event) {
			this.active(event.target.value) 
		}
	}
})

Vue.component('form-user', {
	template: `
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
				    <filter-user :sexs="sexsLabels" :active="updateActiveSex"></filter-user>
                </div>
                <p v-if="error" class="error_message"> Warning! There are incompleted or bad inserted fields. </p> 
				<button> Add User </button>
			</form>
		</section>
	`,
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
});

Vue.component('item-user', {
	props: ['user'],
	template: `
		<li>
			<h2> {{ user.name }} </h2>
			<h4> {{ user.sex }} </h4>
			<b> {{ user.age }} years old </b>
		</li>
	`
})