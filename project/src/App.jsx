import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingFrame from './landing/LandingFrame'
import MouseTrail from './landing/MouseTrail'
import MainPage from './main/MainPage'
import ContactMe from './main/components/contact'


function App() {
  const mountRef = useRef(null)
  const location = useLocation()

  // Affiche le fond et la traînée seulement sur la landing page
  const isLanding = location.pathname === '/'

  useEffect(() => {
    if (!isLanding) return // N'initialise Three.js que sur la landing

    const width = window.innerWidth
    const height = window.innerHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x18181b, 1)
    mountRef.current.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
    camera.position.z = 5

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(20, 12, 128, 128)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color('#18181b') },
        uColorB: { value: new THREE.Color('#6d28d9') }
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          float freq = 2.0;
          float amp = 0.07;
          pos.z += sin(pos.x * 4.0 + uTime * freq) * amp;
          pos.z += cos(pos.y * 6.0 + uTime * freq * 0.7) * amp * 0.7;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        void main() {
          vec3 color = mix(uColorA, uColorB, vUv.y);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: false
    })

    const plane = new THREE.Mesh(geometry, material)
    scene.add(plane)

    let frameId
    const animate = () => {
      material.uniforms.uTime.value += 0.01
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [isLanding])

  return (
    <>
      {isLanding && (
        <div
          ref={mountRef}
          style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            margin: 0,
            padding: 0,
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
      )}
      {isLanding && <MouseTrail />}
     
      <Routes>
        <Route path="/" element={<LandingFrame />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </>
  )
}

export default App