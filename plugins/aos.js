import AOS from "~/libraries/aos";

const globalAOS = new AOS.init({
    // note: your options here
    scrollContainer: '#home-page',
    offset: 100, 
    duration: 700, 
    easing: "ease-out-quad", 
    once: false
})
 
// trigger when the Nuxt page is ready
window.onNuxtReady(() => {
    AOS.refresh()
})

export default ({ app }) => {
    app.AOS = globalAOS
}