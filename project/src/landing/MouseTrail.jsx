import { useEffect, useRef } from 'react'

function MouseTrail() {
  const canvasRef = useRef(null)
  const trail = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    // Met à jour la taille du canvas si la fenêtre change
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    // Ajoute la position de la souris au tableau
    const handleMouseMove = (e) => {
      trail.current.push({ x: e.clientX, y: e.clientY })
      if (trail.current.length > 20) trail.current.shift()
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    let frameId
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < trail.current.length; i++) {
        const p = trail.current[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, 16 - i * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(109,40,217,${(1 - i / trail.current.length) * 0.7})` // violet naturel
        ctx.shadowColor = '#6d28d9'
        ctx.shadowBlur = 8
        ctx.fill()
      }
      frameId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 20,
      }}
    />
  )
}

export default MouseTrail