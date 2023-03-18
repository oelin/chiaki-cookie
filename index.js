export default response =>
        Object.fromEntries(response
                .headers['set-cookie']
                .map(cookie => [
                        cookie.split('=')[0],                            // Name.
                        cookie.split('=').slice(1).join('').split('; '), // Value.
                ])
        )
