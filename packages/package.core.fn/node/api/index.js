const API = {
    res: (
        type,
        error = false,
        payload = {},
        meta = {package: 'package.core.fn', endpoint: '/api', baseUrl: ''}
    ) => {
        const data = {
            type,
            error,
            payload,
            meta: {
                package: meta.package,
                endpoint: meta.endpoint
            }
        }
        meta.res.client ? meta.res.socket.emit(meta.res.client.channel, data) : meta.res.json(data)
    }
}

module.exports = API
