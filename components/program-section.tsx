const ProgramSection = () => {
	return (
		<section className="py-16 md:py-24 relative overflow-hidden border border-red-950 mb-9 h-screen">
			{/* Background decorative elements */}
			<div className="absolute top-0 left-0 w-40 h-40 bg-yellow-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-50 -translate-x-1/4 translate-y-1/4"></div>
			<div className="absolute top-0 right-0 w-48 h-48 bg-purple-200 rounded-tr-full opacity-50"></div>

			{/* Diagonal lines pattern - left top */}
			<div className="absolute top-0 left-0 w-40 h-40 opacity-20">
				{[...Array(10)].map((_, i) => (
					<div
						key={`line-lt-${i}`}
						className="absolute h-px w-full bg-gray-400 origin-bottom-left"
						style={{
							transform: `rotate(${45}deg) translateY(${
								i * 8
							}px)`,
						}}
					></div>
				))}
			</div>

			{/* Diagonal lines pattern - bottom left */}
			<div className="absolute bottom-0 left-0 w-40 h-40 opacity-20">
				{[...Array(10)].map((_, i) => (
					<div
						key={`line-bl-${i}`}
						className="absolute h-px w-full bg-gray-400 origin-top-left"
						style={{
							transform: `rotate(${-45}deg) translateY(${
								-i * 8
							}px)`,
						}}
					></div>
				))}
			</div>

			<div className="container mx-auto px-4 relative z-10 border mt-10 pt-9">
				<div className="text-center mb-16 max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-6xl px-6 font-extralight mb-4">
						The choice of the top 1 private academies in the country
					</h2>
					<h3 className="text-3xl md:text-6xl font-bold ">
						Differentiated English learning program
						<div className=" h-4 mb-24  bg-[#4db6ac]"></div>
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 border p-20">
					{/* Program 01 */}
					<div className="bg-[#f0f5ff] rounded-[4rem] p-6 flex flex-col h-56">
						<div className="text-[#5d3bee] font-medium mb-2">
							Program 01
						</div>
						<div className="mt-auto">
							<h4 className="text-xl font-bold">
								The Clip Learning Process
							</h4>
						</div>
					</div>

					{/* Program 02 */}
					<div className="bg-[#f0f5ff] rounded-2xl p-6 flex flex-col h-full">
						<div className="text-[#5d3bee] font-medium mb-2">
							Program 02
						</div>
						<div className="mt-auto">
							<h4 className="text-xl font-bold">
								Courses and Levels
							</h4>
						</div>
					</div>

					{/* Program 03 */}
					<div className="bg-[#f0f5ff] rounded-2xl p-6 flex flex-col h-full">
						<div className="text-[#5d3bee] font-medium mb-2">
							Program 03
						</div>
						<div className="mt-auto">
							<h4 className="text-xl font-bold">
								Lecture Support System
							</h4>
						</div>
					</div>

					{/* Program 04 */}
					<div className="bg-[#f0f5ff] rounded-2xl p-6 flex flex-col h-full">
						<div className="text-[#5d3bee] font-medium mb-2">
							Program 04
						</div>
						<div className="mt-auto">
							<h4 className="text-xl font-bold">
								Online learning
							</h4>
						</div>
					</div>

					{/* Program 05 */}
					<div className="bg-[#f0f5ff] rounded-2xl p-6 flex flex-col h-full">
						<div className="text-[#5d3bee] font-medium mb-2">
							Program 05
						</div>
						<div className="mt-auto">
							<h4 className="text-xl font-bold">Test Center</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProgramSection;
