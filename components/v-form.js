export default {
    template: `
   <form @submit.prevent="submitForm" action="#" method="post" class="mt-10 my-28 grid grid-cols-6 gap-4 relative">
      <div class="col-span-4 relative">
        <input 
  :class="['border', 'rounded-full', 'placeholder-secondary', 'py-4', 'px-8', 'w-full', errors.email ? 'border-red-500' : 'border-secondary']"          type="email" 
          name="email" 
          v-model="form.email.value"
          placeholder="Your email address...">
        <p v-if="errors.email && !isEmailValid" class="absolute left-8 mt-1 text-red-500 text-xs italic">Please provide a valid email address.</p>
      </div>
      <button 
        class="hover:opacity-75 focus:opacity-75 col-span-2 text-white font-semibold bg-primary rounded-full shadow-lg py-4 px-6">
        Notify Me
      </button>
</form>
`,
    data() {
        return {
            form: {
                email: {
                    value: '',
                    isValid: false
                }
            },
            errors: []
        }
    },

    methods: {
        submitForm() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(this.form.email.value)) {
                this.form.email.isValid = true;
                this.errors.email = false;
            } else {
                this.form.email.isValid = false;
                this.errors.email = true;
            }

            if (this.form.email.isValid) {
                console.log("E-Mail is valid:", this.form.email.value);
                this.form.email.value = '';
            }
        }


    }
}