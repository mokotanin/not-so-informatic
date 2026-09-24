import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const letters = ["N", "S", "I"]

function IntroScreen() {
  const navigate = useNavigate()
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setIsLeaving(true), 1550)
    const redirectTimer = window.setTimeout(() => navigate("/explorer", { replace: true }), 2050)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(redirectTimer)
    }
  }, [navigate])

  return (
    <main className={`intro-screen fixed inset-0 z-50 grid place-items-center bg-background ${isLeaving ? "intro-screen-leaving" : ""}`}>
      <div aria-label="NSI" className="intro-wordmark flex items-center font-mono text-[clamp(5rem,22vw,15rem)] font-medium leading-none tracking-[-0.12em] text-foreground">
        {letters.map((letter, index) => (
          <span aria-hidden="true" key={letter} style={{ animationDelay: `${index * 150}ms` }}>
            {letter}
          </span>
        ))}
      </div>
      <p className="intro-caption absolute bottom-[18vh] font-mono text-[10px] uppercase tracking-[0.42em] text-muted-foreground">Un espace pour apprendre</p>
    </main>
  )
}

export { IntroScreen }
