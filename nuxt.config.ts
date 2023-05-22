// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],

    app: {
        head: {
            title: 'Nuxt Try',
            meta: [
                {name: 'description', content: 'All about nuxt'}
            ],
            link: [
                {rel: 'stylesheet', href: ''}
            ]
        }
    }

    
})
