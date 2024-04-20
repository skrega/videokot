/** @type {import('next').NextConfig} */

// const redirects = require('./hooks/redirects')

module.exports = {
    experimental: {
        scrollRestoration: true
    },
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: '185.84.163.241'
        }]
    },
    // redirects: () => {
    // return redirects()
    // }
}