export default {
    // config options
    base: "/my-portfolio/",
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..']
        }
    }
}