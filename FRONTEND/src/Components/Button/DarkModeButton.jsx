import { useEffect, useState } from "react"

const DarkModeButton = () => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme")

        if (savedTheme === "dark") {
            setDarkMode(true)
            document.documentElement.classList.add("dark")
        }

    }, [])

    useEffect(() => {

        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }

    }, [darkMode])

    return (
        <button
            onClick={() => setDarkMode(prev => !prev)}
            className="
                px-4 py-2 rounded-lg
                bg-zinc-200 text-black
                dark:bg-zinc-800 dark:text-white
                transition-all duration-300
            "
        >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
    )
}

export default DarkModeButton