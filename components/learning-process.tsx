import { ChevronRight } from "lucide-react"
import Link from "next/link"

const LearningProcess = () => {
  return (
    <section className="relative bg-[#5d3bee] text-white py-16 md:py-24 overflow-hidden">
      {/* Section indicator on the left - simplified to match screenshot */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-0.5 h-4 bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-0.5 h-4 bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-0.5 h-4 bg-white/50"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 text-[200px] font-bold text-white/5">Best</div>
        <div className="absolute bottom-1/4 left-1/4 text-[150px] font-bold text-white/5 rotate-12">A+</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Learning Process</h2>
          <p className="text-lg text-center">
            THE CLIP's learning system has implemented an integrated English system through the TCM SYSTEM, which
            manages the level of understanding of learning content along with learning activities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 max-w-4xl mx-auto">
          {/* INPUT */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#4cdbf3] text-black font-bold px-4 py-1 rounded-md rotate-[-5deg]">
              INPUT
            </div>
            <div className="bg-white rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-black">
              <div className="w-16 h-16 bg-[#e0f7fc] rounded-lg flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="3" stroke="#4cdbf3" strokeWidth="2" />
                  <path d="M8 21H16" stroke="#4cdbf3" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 17V21" stroke="#4cdbf3" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M7 10L10 13L17 7"
                    stroke="#4cdbf3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold">이해</span>
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
              <ChevronRight className="h-8 w-8 text-green-400" />
            </div>
          </div>

          {/* INTAKE */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#7be495] text-black font-bold px-4 py-1 rounded-md rotate-[-5deg]">
              INTAKE
            </div>
            <div className="bg-white rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-black">
              <div className="w-16 h-16 bg-[#e0f7e5] rounded-lg flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 19.5V4.5C4 3.4 4.9 2.5 6 2.5H18C19.1 2.5 20 3.4 20 4.5V19.5C20 20.6 19.1 21.5 18 21.5H6C4.9 21.5 4 20.6 4 19.5Z"
                    stroke="#7be495"
                    strokeWidth="2"
                  />
                  <path d="M8 7.5H16" stroke="#7be495" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 11.5H16" stroke="#7be495" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 15.5H12" stroke="#7be495" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-bold">습득</span>
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
              <ChevronRight className="h-8 w-8 text-green-400" />
            </div>
          </div>

          {/* OUTPUT */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#f3dc4c] text-black font-bold px-4 py-1 rounded-md rotate-[-5deg]">
              OUTPUT
            </div>
            <div className="bg-white rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-black">
              <div className="w-16 h-16 bg-[#f7f5e0] rounded-lg flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 15C21 16.1046 20.1046 17 19 17H7L3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15Z"
                    stroke="#f3dc4c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9 10H15" stroke="#f3dc4c" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 7V13" stroke="#f3dc4c" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-bold">표현</span>
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10 rotate-90">
              <ChevronRight className="h-8 w-8 text-green-400" />
            </div>
          </div>

          {/* TEST */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#f3a74c] text-black font-bold px-4 py-1 rounded-md rotate-[-5deg]">
              TEST
            </div>
            <div className="bg-white rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-black">
              <div className="w-16 h-16 bg-[#f7efe0] rounded-lg flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                    stroke="#f3a74c"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z"
                    stroke="#f3a74c"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="#f3a74c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-bold">평가 & 처방</span>
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
              <ChevronRight className="h-8 w-8 text-green-400 rotate-180" />
            </div>
          </div>

          {/* REPORT */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#f34c77] text-black font-bold px-4 py-1 rounded-md rotate-[-5deg]">
              REPORT
            </div>
            <div className="bg-white rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-black">
              <div className="w-16 h-16 bg-[#f7e0e8] rounded-lg flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 15L8 9L12 11L16 6L20 10"
                    stroke="#f34c77"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22Z"
                    stroke="#f34c77"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="font-bold">분석 & 보고</span>
            </div>
            <div className="hidden md:block absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 -rotate-90">
              <ChevronRight className="h-8 w-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* Cartoon faces */}
        <div className="relative max-w-4xl mx-auto mt-8">
          {/* Boy with yellow hat */}
          <div className="absolute right-1/4 bottom-0">
            <div className="w-16 h-16 md:w-24 md:h-24">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="#FFE0B2" />
                <circle cx="35" cy="40" r="5" fill="#5D4037" />
                <circle cx="65" cy="40" r="5" fill="#5D4037" />
                <path d="M40 60 Q50 70 60 60" stroke="#5D4037" strokeWidth="3" fill="none" />
                <path d="M20 30 Q50 10 80 30" fill="#FFD54F" />
                <rect x="35" y="25" width="30" height="5" fill="#FFD54F" />
              </svg>
            </div>
          </div>

          {/* Girl with dark hair */}
          <div className="absolute right-1/3 bottom-8">
            <div className="w-16 h-16 md:w-24 md:h-24">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="#FFE0B2" />
                <circle cx="35" cy="40" r="5" fill="#5D4037" />
                <circle cx="65" cy="40" r="5" fill="#5D4037" />
                <path d="M40 60 Q50 70 60 60" stroke="#5D4037" strokeWidth="3" fill="none" />
                <path d="M20 20 Q50 0 80 20 L80 50 Q50 70 20 50 Z" fill="#4E342E" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/learning-process"
            className="inline-flex items-center px-6 py-2 bg-white text-[#5d3bee] rounded-full hover:bg-opacity-90 transition-colors"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LearningProcess

