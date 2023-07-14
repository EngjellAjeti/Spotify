import React from "react"

const GradientPosition = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-screen z-0  blur-[84px]">
      <img
        src="/img/gradient-circle.svg"
        style={{left:'-4%',top:'-4%', position: "fixed"}}
        width="500"
        alt="circle"
      />
      <img
        src="/img/gradient-circle.svg"
        style={{left:'75%',top:'50%', position: "fixed"}}
        width="500"
        alt="circle"
      />
    </div>
  )
}

export default GradientPosition
