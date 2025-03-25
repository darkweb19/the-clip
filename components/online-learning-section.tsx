import Link from "next/link";

const OnlineLearningSection = () => {
	return (
		<section className="relative bg-[#f0f5ff] py-16 md:py-24 overflow-hidden">
			{/* Yellow bottom bar */}
			<div className="absolute bottom-0 left-0 right-0 h-4 bg-yellow-300"></div>

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
				<div className="w-3 h-3 rounded-full bg-[#4db6ac]"></div>
			</div>

			{/* Decorative "point" text with star */}
			<div className="absolute top-20 right-20 text-[#4db6ac] opacity-70">
				<div className="relative">
					<svg
						className="absolute -top-6 -left-8"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
							fill="#4db6ac"
						/>
					</svg>
					<span className="text-4xl font-bold italic">point</span>
					<span className="absolute top-0 right-0 transform translate-x-8 -translate-y-2">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"
								fill="#4db6ac"
								opacity="0.5"
							/>
						</svg>
					</span>
					<span className="absolute top-2 right-0 transform translate-x-12 -translate-y-4">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z"
								fill="#4db6ac"
								opacity="0.5"
							/>
						</svg>
					</span>
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
					<div className="space-y-6">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
							Online learning
						</h2>
						<p className="text-gray-700 text-lg">
							We provide online learning optimized for output
							through various automated systems for speaking and
							writing.
						</p>
						<div>
							<Link
								href="/online-learning"
								className="inline-flex items-center px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
							>
								view more
							</Link>
						</div>
					</div>

					<div className="relative h-[500px] md:h-[600px]">
						{/* This is a container to position the tablets */}
						<div className="absolute inset-0">
							{/* Middle tablet - vocabulary card with "optimistic" */}
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[320px] md:w-[380px]">
								<div className="rounded-xl overflow-hidden border-[12px] border-gray-800 shadow-xl bg-white">
									<div className="bg-white p-4">
										<div className="bg-gray-100 rounded-lg p-6 mb-2">
											<div className="text-center text-blue-700 text-2xl font-semibold">
												optimistic
											</div>
										</div>
										<div className="bg-[#fff8e1] rounded-lg p-6 border border-[#ffe0b2]">
											<div className="text-center text-gray-800 text-xl">
												긍정적인, 낙관적인
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Top-right tablet - fill in the blank exercise */}
							<div className="absolute top-0 right-0 transform -translate-y-1/4 z-30 w-[320px] md:w-[380px]">
								<div className="rounded-xl overflow-hidden border-[12px] border-gray-800 shadow-xl bg-white">
									<div className="bg-[#4db6ac] p-4">
										<div className="space-y-2">
											{[...Array(8)].map((_, i) => (
												<div
													key={i}
													className="bg-[#3da599] rounded px-3 py-2 text-white text-sm"
												>
													{i === 0 &&
														"We had ... son, ... daughter."}
													{i === 1 &&
														"They ... became ... your baby."}
													{i === 2 &&
														"We ... and ... son ... daughter."}
													{i === 3 &&
														"But soon they ... looking ..."}
													{i === 4 &&
														"They baby ... left ... baby in ..."}
													{i === 5 &&
														"... wolves ... baby ... for him."}
													{i === 6 &&
														"They ... ... ... by a river."}
												</div>
											))}
										</div>
										<div className="mt-4 bg-[#2c8c80] rounded-full h-2 w-full">
											<div className="bg-green-400 h-2 rounded-full w-3/4"></div>
										</div>
									</div>
								</div>
							</div>

							{/* Bottom-right tablet - reading passage */}
							<div className="absolute bottom-0 right-0 transform translate-y-1/4 z-10 w-[320px] md:w-[380px]">
								<div className="rounded-xl overflow-hidden border-[12px] border-gray-800 shadow-xl bg-white">
									<div className="bg-white p-4">
										<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
											<div className="text-xs text-gray-800 leading-relaxed">
												Can you imagine teaching someone
												who can't see? Hellen Keller was
												both blind and deaf. Anne
												Sullivan, her teacher, had to
												find a way to help her
												understand the world. She taught
												Hellen to recognize objects by
												touch and then to make the sign
												for that object with her
												fingers. After many patient
												lessons, Hellen began to
												understand...
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OnlineLearningSection;
