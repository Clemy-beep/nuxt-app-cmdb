// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
        rel: "stylesheet",
      },
      {
        href:"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet",
      }
    ],
  },
  css:[
    '~/assets/css/main.css'
  ]
});
