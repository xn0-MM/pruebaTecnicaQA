import * as dotenv from 'dotenv'

export const getEnv = () => {
    if (process.env.ENV) {
        dotenv.config({
            override: true,
            path: `src/support/helpers/env/.env.${process.env.ENV}`
        })
    } else {
        console.error("No hay un .env!")
    }
}