import Image from "next/image";
import Link from "next/link";

const LectureSection = () => {
	return (
		<section className="relative bg-[#4db6ac] text-white py-16 md:py-24 overflow-hidden">
			{/* Section indicator on the left */}
			<div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
				<div className="w-3 h-3 rounded-full bg-white/30"></div>
				<div className="w-0.5 h-4 bg-white/20"></div>
				<div className="w-3 h-3 rounded-full bg-white/30"></div>
				<div className="w-0.5 h-4 bg-white/20"></div>
				<div className="w-3 h-3 rounded-full bg-white/30"></div>
				<div className="w-0.5 h-4 bg-white/20"></div>
				<div className="w-3 h-3 rounded-full bg-white/30"></div>
				<div className="w-0.5 h-4 bg-white/20"></div>
				<div className="w-3 h-3 rounded-full bg-white"></div>
			</div>

			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Atom symbol */}
				<div className="absolute top-1/4 right-1/4 opacity-10">
					<svg
						width="200"
						height="200"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<ellipse
							cx="50"
							cy="50"
							rx="30"
							ry="45"
							stroke="white"
							strokeWidth="1"
							transform="rotate(45 50 50)"
						/>
						<ellipse
							cx="50"
							cy="50"
							rx="30"
							ry="45"
							stroke="white"
							strokeWidth="1"
							transform="rotate(-45 50 50)"
						/>
						<ellipse
							cx="50"
							cy="50"
							rx="30"
							ry="45"
							stroke="white"
							strokeWidth="1"
							transform="rotate(135 50 50)"
						/>
						<circle cx="50" cy="50" r="5" fill="white" />
					</svg>
				</div>

				{/* Math formula */}
				<div className="absolute bottom-1/4 left-1/4 text-[80px] font-bold text-white/10">
					E=mc²
				</div>

				{/* Good!! text */}
				<div className="absolute bottom-1/3 right-1/3 text-[100px] font-bold text-white/10 italic">
					Good!!
				</div>

				{/* Letter A */}
				<div className="absolute top-1/3 right-1/5 text-[120px] font-bold text-white/10">
					A
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl font-bold">
							Lecture
						</h2>
						<p className="text-xl">
							Students can access various background
							knowledge-related videos in the lecture e-Book
							system.
						</p>
						<div>
							<Link
								href="/lecture"
								className="inline-flex items-center px-6 py-2 bg-white text-[#4db6ac] rounded-full hover:bg-opacity-90 transition-colors"
							>
								view more
							</Link>
						</div>
					</div>

					<div className="relative h-[400px] md:h-[500px] -ml-8 md:-ml-16">
						{/* This is a container to position the tablets */}
						<div className="absolute inset-0">
							{/* Top tablet - partially visible at the top */}
							<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[15deg] z-10 w-[280px] md:w-[320px]">
								<div className="rounded-xl overflow-hidden border-[12px] border-gray-800 shadow-xl bg-white">
									<Image
										src="/placeholder.svg?height=200&width=300"
										alt="Tablet showing e-Book content"
										width={300}
										height={200}
										className="w-full h-auto"
									/>
								</div>
							</div>

							{/* Middle tablet - showing video content */}
							<div className="absolute top-1/4 right-0 transform rotate-[-10deg] z-20 w-[280px] md:w-[320px]">
								<div className="rounded-xl overflow-hidden border-[12px] border-gray-800 shadow-xl bg-white">
									<Image
										src="/placeholder.svg?height=200&width=300"
										alt="Tablet showing interactive video lesson"
										width={300}
										height={200}
										className="w-full h-auto"
									/>
								</div>
							</div>

							{/* Bottom tablet - showing dolphin lesson */}
							<div className="absolute bottom-0 left-0 transform rotate-[5deg] z-30 w-[280px] md:w-[320px]">
								<div className="rounded-xl overflow-hidden border-[12px] border-gray-800 shadow-xl bg-white">
									<Image
										src="/placeholder.svg?height=200&width=300"
										alt="Tablet showing dolphin lesson"
										width={300}
										height={200}
										className="w-full h-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LectureSection;
