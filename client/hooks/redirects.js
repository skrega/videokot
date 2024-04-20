const fetch = require('isomorphic-unfetch')

const redirects = () => {
    return fetch(
            `${process.env.NEXT_PUBLIC_API}/redirects?pagination[start]=0&pagination[limit]=-1`
        )
        .then(res => res.json())
        .then(response => {
            const redirects = response.data.map(redirect => ({
                source: redirect.attributes.from,
                destination: redirect.attributes.to,
                permanent: redirect.attributes.type === 'permanent'
            }))

            return redirects
        })
}

module.exports = redirects