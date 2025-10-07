import React from "react"

export default function YellowCard({ children, className = "" }) {
  return <div className={`yellow-card ${className}`}>{children}</div>
}
