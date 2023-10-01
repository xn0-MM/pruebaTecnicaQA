import * as dotenv from 'dotenv'

export const getEnv = () => {
    if (process.env.ENV) {
        if(process.env)
            dotenv.config()
    } else {
        console.error("No hay un .env!")
    }
}