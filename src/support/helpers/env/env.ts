import * as dotenv from 'dotenv'

export const getEnv = () => {
    if (process.env.ENV) {
        if(process.env)
        dotenv.config({
            override: true,
            path: `./.env`
        })
    } else {
        console.error("No hay un .env!")
    }
}