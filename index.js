export default response =>
        Object.fromEntries(response
                .headers['set-cookie']
                .map(cookie => cookie.split(';')[0])
		.map(cookie => cookie.split('='))
        )
