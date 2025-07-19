"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"]

const Reordering = () => {
  const [order, setOrder] = useState(initialOrder)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOrder(shuffle(order))
    }, 1500)
    return () => clearTimeout(timeout)
  }, [order])

  return (
    <ul style={container}>
      {order.map((color) => (
        <motion.li
          key={color}
          layout
          transition={spring}
          style={{ ...item, backgroundColor: color }}
        />
      ))}
    </ul>
  )
}

export default Reordering

const shuffle = ([...array]: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
}

const container: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
  justifyContent: "center",
  alignItems: "center",
}

const item: React.CSSProperties = {
  width: 100,
  height: 100,
  borderRadius: "10px",
}
