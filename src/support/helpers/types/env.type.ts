export { }

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "pro" | "pre",
            BASE_URL: string
        }
    }
}