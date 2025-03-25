import Link from "next/link";
import Image from "next/image";

const CoursesSection = () => {
	return (
		<section className="relative bg-[#f0f5ff] py-16 md:py-24 overflow-hidden">
			{/* Purple top bar */}
			<div className="absolute top-0 left-0 right-0 h-4 bg-[#5d3bee]"></div>

			{/* Teal bottom bar */}
			<div className="absolute bottom-0 left-0 right-0 h-4 bg-[#4db6ac]"></div>

			{/* Section indicator on the left - with fourth dot highlighted */}
			<div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-gray-400/50"></div>
				<div className="w-0.5 h-4 bg-gray-400/30"></div>
				<div className="w-3 h-3 rounded-full bg-[#4db6ac]"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl font-bold">
							Courses and Levels
						</h2>
						<p className="text-gray-700 text-lg">
							We provide a complete academy curriculum from
							elementary school to middle school with 94 types and
							204 volumes of textbooks organized by subject.
						</p>
						<div>
							<Link
								href="/courses"
								className="inline-flex items-center px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
							>
								view more
							</Link>
						</div>
					</div>

					<div className="relative">
						<div className="grid grid-cols-3 gap-2 transform rotate-6">
							{/* First column of books */}
							<div className="space-y-2">
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Student Book"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Reading Book"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Skills Book"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
							</div>

							{/* Second column of books */}
							<div className="space-y-2 mt-4">
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Reading 7A"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Reading 7B"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Listening 4A"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Listening 4B"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
							</div>

							{/* Third column of books */}
							<div className="space-y-2">
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Word Power"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Reading Competence"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Listening 8A"
										width={120}
										height={150}
										className="w-full h-auto"
									/>
								</div>
								<div className="rounded-lg overflow-hidden shadow-md">
									<Image
										src="/placeholder.svg?height=150&width=120"
										alt="Listening 8B"
										width={120}
										height={150}
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

export default CoursesSection;
