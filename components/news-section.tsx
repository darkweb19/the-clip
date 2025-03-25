import Link from "next/link";
import { Plus } from "lucide-react";

const NewsSection = () => {
	return (
		<section className="py-16 md:py-24 bg-white">
			{/* Header */}
			<div className="container mx-auto px-4 text-center mb-12">
				<h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-4">
					Innovation for tomorrow!
				</h2>
				<div className="relative inline-block">
					<h3 className="text-4xl md:text-6xl font-bold text-gray-900">
						English with THE CLIP
					</h3>
					<div className="absolute bottom-0 left-0 right-0 h-2 bg-[#4db6ac]"></div>
				</div>
			</div>

			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					{/* News Section - Left Side */}
					<div className="space-y-6">
						<div className="flex justify-between items-center">
							<h2 className="text-4xl font-bold text-gray-900">
								NEWS
							</h2>
							<Link
								href="/news"
								className="text-blue-600 flex items-center"
							>
								more <Plus className="h-4 w-4 ml-1" />
							</Link>
						</div>

						<p className="text-gray-700">
							We bring you the latest news from The Clip.
						</p>

						{/* News Items */}
						<div className="space-y-4">
							{/* News Item 1 */}
							<div className="border-b pb-4">
								<div className="flex items-start">
									<span className="text-blue-600 text-sm mr-2">
										notification
									</span>
									<div>
										<Link
											href="/news/1"
											className="text-gray-800 hover:text-blue-600"
										>
											Delivery Information for Lunar New
											Year Holidays
										</Link>
										<span className="text-gray-500 text-sm ml-2">
											(01/17)
										</span>
									</div>
								</div>
							</div>

							{/* News Item 2 */}
							<div className="border-b pb-4">
								<div className="flex items-start">
									<span className="text-blue-600 text-sm mr-2">
										notification
									</span>
									<div>
										<Link
											href="/news/2"
											className="text-gray-800 hover:text-blue-600"
										>
											Year-end textbook release schedule
											information
										</Link>
										<span className="text-gray-500 text-sm ml-2">
											(12/16)
										</span>
									</div>
								</div>
							</div>

							{/* News Item 3 */}
							<div className="border-b pb-4">
								<div className="flex items-start">
									<span className="text-blue-600 text-sm mr-2">
										notification
									</span>
									<div>
										<Link
											href="/news/3"
											className="text-gray-800 hover:text-blue-600"
										>
											Guide to encrypting the homepage DB
										</Link>
										<span className="text-gray-500 text-sm ml-2">
											(10/15)
										</span>
									</div>
								</div>
							</div>

							{/* News Item 4 */}
							<div className="border-b pb-4">
								<div className="flex items-start">
									<span className="text-blue-600 text-sm mr-2">
										notification
									</span>
									<div>
										<Link
											href="/news/4"
											className="text-gray-800 hover:text-blue-600"
										>
											Online editing program update
										</Link>
										<span className="text-gray-500 text-sm ml-2">
											(10/07)
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Contact/Info Boxes */}
					<div className="space-y-6">
						{/* FAQ Box */}
						<div className="bg-gray-200 rounded-xl p-6 flex items-center">
							<div className="flex-grow">
								<div className="inline-block bg-white text-sm px-3 py-1 rounded-full mb-3">
									FAQ 바로가기
								</div>
								<h3 className="text-2xl font-bold mb-2">
									THE CLIP이
									<br />
									궁금하신가요?
								</h3>
								<p className="text-sm text-gray-600">
									지금 하는 질문에 대해 안내 드립니다.
								</p>
							</div>
							<div className="w-24 h-24 flex-shrink-0">
								{/* Placeholder for character */}
								<div className="w-full h-full bg-gray-300 rounded-full"></div>
							</div>
						</div>

						{/* Two action boxes */}
						<div className="grid grid-cols-2 gap-4">
							{/* Sample Request */}
							<div className="bg-indigo-500 text-white rounded-xl p-6 flex flex-col items-center justify-center">
								<h3 className="text-xl font-bold text-center mb-4">
									Sample Request
								</h3>
								<div className="w-16 h-16">
									{/* Placeholder for character */}
									<div className="w-full h-full bg-indigo-400 rounded-full"></div>
								</div>
							</div>

							{/* Apply for consultation */}
							<div className="bg-teal-400 text-white rounded-xl p-6 flex flex-col items-center justify-center">
								<h3 className="text-xl font-bold text-center mb-4">
									Apply for consultation
								</h3>
								<div className="w-16 h-16">
									{/* Placeholder for character */}
									<div className="w-full h-full bg-teal-300 rounded-full"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
