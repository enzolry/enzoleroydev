<template>
    <div ref="scroller" id="home-page" class="home-page" @scroll="onScroll">
        <header ref="header" :class="{ 'header-visible': headerVisible, 'header-background': headerBg }">
            <div class="container" data-aos="fade-down"  data-aos-delay="700">
                <div class="logo">
                    <svg class="h-10 w-10"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 8 3 12 7 16" />  <polyline points="17 8 21 12 17 16" />  <line x1="14" y1="4" x2="10" y2="20" /></svg>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#about" @click.prevent="menuClick"><span>01.</span> Á propos</a>
                        </li>
                        <li>
                            <a href="#work" @click.prevent="menuClick"><span>02.</span> Réalisations</a>
                        </li>
                        <li>
                            <a href="#contact" @click.prevent="menuClick"><span>03.</span> Contact</a>
                        </li>
                        <li>
                            <a href="https://www.doyoubuzz.com/enzo-leroy" target="_blank" class="btn">CV</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="overlay" :class="{ 'overlay-visible': overlayVisible, 'overlay-background': overlayBg }">
            <ul class="links">
                <li>
                    <a href="https://github.com/enzolry" target="_blank">
                        <svg class="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/enzo-leroy-b9b926102/">
                        <svg class="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </li>
            </ul>

            <div class="email">
                <a href="mailto:contact@enzoleroy.dev" target="_blank">contact@enzoleroy.dev</a>
            </div>
        </div>

        <section id="top" class="top">
            <Particles />
            <div class="wrapper">
                <p data-aos="fade-down">Hello world 👋 je suis</p>
                <h1 data-aos="fade-right">
                    Enzo Leroy,
                    <span>Développeur web fullstack.</span>
                </h1>
                <p data-aos="fade-up">Spécialisé dans la conception d'applications web type SaaS. Je créé également des sites vitrine & e-commerce sur demande.</p>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <div class="about-photo">
                    <div data-aos="fade-left" class="wrapper">
                        <img src="~/assets/img/enzo-leroy.webp" alt="Enzo LEROY">
                        <a href="https://www.linkedin.com/in/enzo-leroy-b9b926102/" target="_blank"></a>
                    </div>
                </div>
                <div data-aos="fade-right" class="about-content">
                    <h2><span>01.</span> Á propos</h2>
                    <p>Ma passion pour la programmation à commencé en 2016 au début de mon parcours entrepreneurial. C'est au départ la nécessité qui m'a poussé à apprendre mon premier language afin de prototyper une plateforme web. Depuis, je n'ai cessé de développer mes compétences en autodidacte sur tous les aspects du développement web. Voici les technologies avec lesquelles j'aime particulièrement travailler:</p>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>ReactJS</li>
                        <li>NextJS</li>
                        <li>VueJS</li>
                        <li>NuxtJS</li>
                        <li>TailwindCSS</li>
                        <li>Sass</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="work" class="work">
            <div class="container">
                <h2 data-aos="fade-right"><span>02.</span> Réalisations</h2>

                <article>
                    <div data-aos="fade-right" class="project-image">
                        <img src="~/assets/img/lokalya.webp" alt="Lokalya" class="object-left">
                        <a href="https://app.lokalya.com" target="_blank"></a>
                    </div>
                    <div data-aos="fade-left" class="project-content">
                        <h3>Lokalya [Alpha]</h3>
                        <p>Découvrez votre région comme vous ne l'avez jamais vue! Lokalya est le compagnon de route de tous les amateurs de tourisme local.</p>
                        <ul>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>MongoDB</li>
                            <li>TailwindCSS</li>
                            <li>LeafletJS</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <div data-aos="fade-left" class="project-image">
                        <img src="~/assets/img/squaredocs.webp" alt="Squaredocs">
                        <a href="https://squaredocs.com" target="_blank"></a>
                    </div>
                    <div data-aos="fade-right" class="project-content">
                        <h3>Squaredocs</h3>
                        <p>Squaredocs est un outil de base de connaissances pour les entreprises permettant d'organiser, de partager et de trouver rapidement l'information.</p>
                        <ul>
                            <li>VueJS</li>
                            <li>NuxtJS</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>MongoDB</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <div data-aos="fade-right" class="project-image">
                        <img src="~/assets/img/arenaesport.webp" alt="Arena Esport" class="object-right">
                        <a href="http://arenaesport.herokuapp.com/" target="_blank"></a>
                    </div>
                    <div data-aos="fade-left" class="project-content">
                        <h3>Arena eSport</h3>
                        <p>Agence de recrutement eSport transformée en SaaS. Co-fondée avec 2 autres associés. Notre plateforme de recrutement est devenue N°1 dans l'eSport francophone en 2016-2017 jusqu'à atteindre 8000 utilisateurs.</p>
                        <ul>
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
                            <li>PostgreSQL</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <h2 data-aos="fade-down">
                    <span>03.</span>
                    Contact 
                </h2>
                <p data-aos="fade-up">Bien que je sois déjà engagé dans un projet pour le moment, je reste ouvert aux opportunités. Que vous ayez une proposition à me transmettre, une requête à faire ou si vous souhaitez simplement dire bonjour, envoyez-moi un mail et je ferai de mon mieux pour vous répondre rapidement.</p>
                <a data-aos="zoom-in" data-aos-delay="500" href="mailto:contact@enzoleroy.dev" target="_blank" class="btn">
                    <svg class="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg> 
                    Email 
                </a>
            </div>
        </section>

        <footer>
            <div class="footer">
                <p></p>
            </div>
            <div class="copyright">Créé par Enzo Leroy - Inspiré de <a href="https://brittanychiang.com/" target="_blank">Brittany Chiang</a></div>
        </footer>
    </div>
</template>

<script>
let AOS
if (process.client){
    AOS = require('~/libraries/aos')
}

export default {
    data() {
        return {
            lastScroll: null,
            scrollTarget: null,
            headerVisible: true,
            headerBg: false,
            overlayVisible: true,
            overlayBg: false
        }
    },

    watch: {
        lastScroll: function (val, old){
            if (!old) return;
            // HEADER
            if (val >= 100) {
                this.headerBg = true;
                if (val < old) {
                    this.headerVisible = true;
                } else if (val > old) {
                    this.headerVisible = false;
                }
            } else {
                this.headerVisible = true;
                this.headerBg = false;
            }
            // OVERLAY
            if (val >= 100) {
                this.overlayBg = true;
                if (val < old) {
                    this.overlayVisible = true;
                } else if (val > old) {
                    this.overlayVisible = false;
                }
            } else {
                this.overlayBg = false;
            }
            // CASE: Overlay is above footer
            // In this case, scrollTop + clientHeight equals scrollHeight at maximum scroll
            if (val+this.$refs.scroller.clientHeight >= this.$refs.scroller?.scrollHeight-100) {
                this.overlayVisible = true;
                this.overlayBg = false;
            }
        }
    },

    methods: {
        menuClick(e) {
            const tab = e.target
            const target = document.querySelector(tab.getAttribute('href'))
            if (!target) return
            const container = document.querySelector('.home-page')
            if (!container) return
            this.scrollTarget = target.offsetTop
            container.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
            setTimeout(() => {
                this.headerVisible = true;
                this.headerBg = true;
                this.scrollTarget = null;
            }, 1000);
        },

        onScroll(e) {
            this.lastScroll = e.target.scrollTop;
            if (e.target.scrollTop === this.scrollTarget) {
                this.headerVisible = true;
                this.headerBg = true;
                this.scrollTarget = null;
            }
        }
    }
}
</script>   