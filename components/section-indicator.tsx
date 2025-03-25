import React from "react"

interface SectionIndicatorProps {
  totalSections: number
  activeSection: number
}

const SectionIndicator = ({ totalSections, activeSection }: SectionIndicatorProps) => {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-30">
      {Array.from({ length: totalSections }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeSection - 1 ? "bg-white" : "bg-white/30"
            }`}
          />
          {index < totalSections - 1 && <div className="w-0.5 h-4 bg-white/50" />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default SectionIndicator

