<template>
    <div>
        <div id="particles-js"></div>
    </div>
</template>

<script>
import config from '@/assets/json/particles'

export default {
    name: 'particles',

    mounted() {
        this.initParticles()
    },

    methods: {
        async initParticles() {
            await require('particles.js')

            particlesJS("particles-js", config, () => {
                console.log('ParticlesJS loaded...')
            })
        }
    }
}
</script>