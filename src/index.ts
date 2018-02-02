import * as Base from 'atma-io-middleware-base'
import process from './compiler'

export = Base.create({
    name: 'atma-io-middleware-yml',
    textOnly: true,
    defaultOptions: {
        mimeType: 'application/json',
        extensions: ['yml']
    },
    process
});