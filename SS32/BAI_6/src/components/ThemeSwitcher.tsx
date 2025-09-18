import { useDispatch, useSelector } from "react-redux"
import { toggleTheme, setTheme } from "../features/theme/themeSlice"
import type { RootState, AppDispatch } from "../store"
import { useEffect } from "react"

export default function ThemeSwitcher() {
  const dark = useSelector((s: RootState) => s.theme.dark)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved) dispatch(setTheme(saved === "true"))
  }, [dispatch])

  const styles = {
    background: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "50px",
    textAlign: "center",
    minHeight: "200px",
    transition: "0.3s"
  }

  return (
    <div style={styles}>
      <label>
        <input
          type="checkbox"
          checked={dark}
          onChange={() => dispatch(toggleTheme())}
        />
        {dark ? " Tối" : " Sáng"}
      </label>
    </div>
  )
}
