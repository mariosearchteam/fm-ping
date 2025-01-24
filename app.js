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
          <h1>We are launching soon!</h1>
          <p>Subscribe and get notified</p>
          <v-form></v-form>
         
        </section>
        <section class="main">
          <img src="./images/illustration-hero.svg" alt="Illustration of a laptop">
        </section>
     </main>
     <v-footer></v-footer>
    `,
};

Vue.createApp(App).mount('#app');
