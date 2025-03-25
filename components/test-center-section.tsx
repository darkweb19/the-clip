import Link from "next/link";

const TestCenterSection = () => {
	return (
		<section className="relative bg-yellow-300 py-16 md:py-24 overflow-hidden">
			{/* Section indicator on the left */}
			<div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-[#4db6ac]"></div>
			</div>

			{/* Decorative paper elements */}
			<div className="absolute top-1/4 right-1/4 transform rotate-12 z-0">
				<div className="w-32 h-40 bg-white rounded shadow-md opacity-50"></div>
			</div>
			<div className="absolute bottom-1/4 left-1/4 transform -rotate-12 z-0">
				<div className="w-40 h-20 bg-white rounded shadow-md opacity-50"></div>
			</div>
			<div className="absolute bottom-1/3 left-1/3 transform rotate-6 z-0">
				<div className="w-40 h-20 bg-white rounded shadow-md opacity-50 flex items-center justify-center">
					<span className="text-purple-500 text-2xl font-bold italic">
						Check!
					</span>
					<div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500"></div>
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					{/* Tablet images area - simplified with dummy spaces */}
					<div className="relative h-[500px] order-2 lg:order-1">
						{/* Top tablet - simplified as a dummy space */}
						<div className="absolute top-0 left-0 transform -rotate-6 z-10">
							<div className="w-[280px] h-[180px] bg-blue-600 rounded-xl border-8 border-black shadow-lg flex items-center justify-center text-white">
								Tablet 1 - IMS Wizard
							</div>
						</div>

						{/* Middle tablet - simplified as a dummy space */}
						<div className="absolute top-1/4 left-1/4 transform rotate-3 z-20">
							<div className="w-[280px] h-[200px] bg-white rounded-xl border-8 border-black shadow-lg flex items-center justify-center">
								Tablet 2 - Test Interface
							</div>
						</div>

						{/* Bottom tablet - simplified as a dummy space */}
						<div className="absolute bottom-0 right-0 z-30">
							<div className="w-[320px] h-[220px] bg-blue-800 rounded-xl border-8 border-black shadow-lg flex items-center justify-center text-white">
								Tablet 3 - Main Menu
							</div>
							{/* Simple keyboard indicator */}
							<div className="h-12 bg-gray-800 rounded-b-lg mx-6"></div>
						</div>
					</div>

					{/* Text content area */}
					<div className="space-y-6 order-1 lg:order-2">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Test Center
						</h2>
						<p className="text-gray-800 text-lg">
							We provide a database of 110,000 questions, test
							papers by area and type and analysis of vulnerable
							types through a Clinic Report based on the test
							results.
						</p>
						<div>
							<Link
								href="/test-center"
								className="inline-flex items-center px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
							>
								view more
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestCenterSection;
