import {type Config} from "tailwindcss"

const config: Config = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./index.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config