"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Menu, MessageCircle } from "lucide-react";
import ProgramSection from "@/components/program-section";
import LearningProcess from "@/components/learning-process";
import CoursesSection from "@/components/courses-and-levels";
import LectureSection from "@/components/lecture-section";
import OnlineLearningSection from "@/components/online-learning-section";
import TestCenterSection from "@/components/test-center-section";
import NewsSection from "@/components/news-section";
import SiteFooter from "@/components/side-footer";
import HeroBanner from "@/components/hero-banner";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navigation */}

			<Navbar />

			{/* Main Content */}
			<main className="flex-grow">
				{/* Hero Section */}
				<HeroBanner />

				<section className="bg-[#f0f5ff] py-12 md:py-20 relative">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 lg:grid-cols-2 p-5 md:pl-28">
							<div className="space-y-5 ">
								<div className="space-y-4">
									<h2 className="text-xl font-medium">
										THE CLIP is
									</h2>
									<h1 className="text-4xl md:text-5xl font-bold">
										It will meet all your academy needs.
									</h1>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
									{/* Feature 1 */}
									<div className="bg-white rounded-lg p-5 shadow-sm text-center">
										<p className="text-sm text-gray-600">
											All textbooks for the lecture
										</p>
										<h3 className="text-xl font-bold mt-0.5">
											e-Book
										</h3>
									</div>

									{/* Feature 2 */}
									<div className="bg-white rounded-lg p-5 shadow-sm text-center">
										<p className="text-sm text-gray-600">
											Various class-related matters
										</p>
										<h3 className="text-xl font-bold mt-0.5">
											Material data
										</h3>
									</div>

									{/* Feature 3 */}
									<div className="bg-white rounded-lg p-5 shadow-sm text-center">
										<p className="text-sm text-gray-600">
											For non-face-to-face classes
										</p>
										<h3 className="text-xl font-bold mt-0.5">
											Test Center / e-learning
										</h3>
									</div>

									{/* Feature 4 */}
									<div className="bg-white rounded-lg p-5 shadow-sm text-center">
										<p className="text-sm text-gray-600">
											For generating reports
										</p>
										<h3 className="text-xl font-bold mt-0.5">
											HMI system
										</h3>
									</div>
								</div>

								<p className="text-gray-700 max-w-xl">
									THE CLIP's unique content and platform
									system avoid monotonous English classes and
									provide more diverse and interesting
									education. Upgrade your academy's
									competitiveness with THE CLIP.
								</p>

								<div>
									<Link
										href="/brochure"
										className="inline-flex items-center px-6 py-3 bg-[#5d3bee] text-white rounded-full hover:bg-[#4c2fd0] transition-colors"
									>
										View Brochure{" "}
										<span className="ml-1">→</span>
									</Link>
								</div>
							</div>

							<div className="flex justify-center lg:justify-end items-end relative">
								{/* Background Circle */}
								<div className="absolute bg-[#C3D8FF] rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem]"></div>
								<div className="relative w-full max-w-full">
									<Image
										src="https://www.theclip.net/images/img_main_intro01.png"
										alt="Educational tools illustration"
										width={1000}
										height={500}
										className="object-contain ml-14"
									/>
								</div>
							</div>
						</div>

						{/* Pagination dots */}
						<div className="flex justify-center mt-8 space-x-2">
							<span className="w-2 h-2 rounded-full bg-gray-300"></span>
							<span className="w-2 h-2 rounded-full bg-[#5d3bee]"></span>
							<span className="w-2 h-2 rounded-full bg-gray-300"></span>
						</div>
					</div>
				</section>

				{/* Program Section */}
				<ProgramSection />

				{/* Learning Process Section */}
				<LearningProcess />

				{/* Courses and levels section  */}
				<CoursesSection />

				<LectureSection />

				<OnlineLearningSection />
				<TestCenterSection />
				<NewsSection />
				<SiteFooter />
			</main>

			{/* Chat buttons - positioned at bottom right and always on top */}
			<div className="fixed right-6 bottom-24 space-y-4 z-50">
				<button className="w-12 h-12 bg-[#5d3bee] rounded-full flex items-center justify-center text-white shadow-lg">
					<MessageCircle className="h-6 w-6" />
				</button>
				<button className="w-12 h-12 bg-[#5d3bee] rounded-full flex items-center justify-center text-white shadow-lg">
					<MessageCircle className="h-6 w-6" />
				</button>
			</div>

			{/* Back to top button */}
			<div className="fixed right-6 bottom-6">
				<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border">
					<ArrowUp className="h-5 w-5" />
				</button>
			</div>
		</div>
	);
}
