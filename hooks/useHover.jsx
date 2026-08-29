import { useState, useEffect, useRef } from "react"

export default function useHover() {
    const [isHovered, setIsHovered] = useState(false)

    const element = useRef(null)
    
    useEffect(() => {
       const El = element.current 

       const handleEnter = () => setIsHovered(true)
       const handleLeave = () => setIsHovered(false)

       El.addEventListener('mouseenter', handleEnter)
       El.addEventListener('mouseleave', handleLeave)

    return () => {
      node.removeEventListener('mouseenter', handleEnter);
      node.removeEventListener('mouseleave', handleLeave);
    }
    }, [])

  return  [element, isHovered]
}
