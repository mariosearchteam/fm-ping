export default {
    template: `
    <form @submit.prevent="submitForm" method="post" class="mt-10 my-28 grid md:grid-cols-6 gap-4 gap-y-8 relative">
        <div class="col-span-4 relative">
            <label for="email" class="sr-only">Email address</label>
            <input 
              id="email"
              @blur="form.email.touched = true"
              @input="validateEmail"
              :class="emailInputClasses"
              type="email" 
              name="email" 
              v-model="form.email.value"
              placeholder="Your email address...">
            <p v-if="errors.email && form.email.touched" class="absolute left-8 mt-1 text-red-500 text-xs italic">
                Please provide a valid email address.
            </p>
        </div>
        <button 
            type="submit"
            class="hover:opacity-75 focus:opacity-75 col-span-4 md:col-span-2 text-white text-xs md:text-sm font-semibold bg-primary rounded-full shadow-lg md:py-4 py-2 px-6">
            Notify Me
        </button>
    </form>
    `,
    data() {
        return {
            form: {
                email: {
                    value: '',
                    touched: false
                }
            },
            errors: {
                email: null
            },
            submissionStatus: '' // 'success' oder leer
        };
    },
    computed: {
        emailInputClasses() {
            return [
                'border',
                'rounded-full',
                'placeholder-secondary',
                'py-2',
                'md:py-4',
                'px-8',
                'w-full',
                'text-xs',
                'md:text-sm',
                this.errors.email ? 'border-red-500' : 'border-secondary',
            ];
        }
    },
    methods: {
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.errors.email = !emailRegex.test(this.form.email.value);
        },
        submitForm() {
            this.validateEmail();
            if (!this.errors.email) {
                console.log("E-Mail is valid:", this.form.email.value);
                this.form.email.value = '';
                this.form.email.touched = false;
                this.submissionStatus = 'success';
            }
        }
    }
};