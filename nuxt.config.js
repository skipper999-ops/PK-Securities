export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    // server: {
    //   port: 8000, // default: 3000
    //   host: '0.0.0.0', // default: localhost
    // },
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "/css/bootstrap.min.css"
            },
            {
                rel: "stylesheet",
                href: "/css/font-awesome.css"
            },
            {
                rel: "stylesheet",
                href: "/css/framework.css"
            },
            {
                rel: "stylesheet",
                href: "https://cdn.plyr.io/3.5.6/plyr.css"
            }
        ],
        script: [{
                src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
                type: "text/javascript"
            },
            {
                src: "/js/bootstrap.min.js",
                type: "text/javascript"
            }
        ]
    },


    pwa: {
        manifest: {
            name: 'PK Services',
            description: "PK Securities and Services. Transforming Service Management into an Innovative Force.",
            lang: 'en',
            display: "standalone",
            background_color: "#e5b214",
            theme_color: "#e5b214"
        },
        workbox: {
            runtimeCaching: [{
                // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
                urlPattern: 'http://pkservices.in/.*',
                // Defaults to `networkFirst` if omitted
                // handler: 'networkFirst',
                // Defaults to `GET` if omitted
                // method: 'GET'
            }]
        }
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: "~/plugins/carousel", lang: "js", ssr: false },
        { src: "~/plugins/slick-carousel", lang: "js", ssr: false },
        { src: "~/plugins/ga", lang: "js", ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "@nuxtjs/pwa", [
            "nuxt-gmaps",
            {
                key: "AIzaSyDs4ugbl-tlSSUh22cvkxx_XhcB-eFstcU"
                    //you can use libraries: ['places']
            }
        ]
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    // server: {
    //   host: "0.0.0.0"
    // },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};