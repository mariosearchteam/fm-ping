import VFooter from './components/v-footer.js';
import VHeader from "./components/v-header.js";
import VForm from "./components/v-form.js";

const App = {
    components: {
        'v-footer': VFooter,
        'v-header': VHeader,
        'v-form': VForm,
    },
    template: `
    <v-header></v-header>

     <main>
        <section class="hero">
          <h1 class="mb-4 md:text-5xl font-thin text-gray text-2xl">We are launching <span class="font-bold text-black">soon!</span></h1>
          <p class="text-sm md:text-xl font-light">Subscribe and get notified</p>
          <div class="px-10">
          <v-form></v-form>
          </div>
         
        </section>
        <section class="main">
          <img src="./images/illustration-dashboard.png" alt="Illustration of a laptop" width="640">
        </section>
     </main>
     <v-footer></v-footer>
    `,
};

Vue.createApp(App).mount('#app');
