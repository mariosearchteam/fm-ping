export default {
    template: `
   <form class="mt-10 my-28 grid grid-cols-6 gap-4 relative">
  <div class="col-span-4 relative">
    <input 
      class="border rounded-full border-secondary py-4 px-8 placeholder-secondary w-full" 
      type="email" 
      name="email" 
      placeholder="Your email address...">
    <p v-if="error" class="absolute left-8 mt-1 text-red-500 text-xs italic">Please provide a valid email address.</p>
  </div>
  <button 
    class="hover:opacity-75 focus:opacity-75 col-span-2 text-white font-semibold bg-primary rounded-full shadow-lg py-4 px-6">
    Notify Me
  </button>
</form>
`
}