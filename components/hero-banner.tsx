"use client";

import { useState, useEffect } from "react";
import {
	Play,
	Pause,
	ChevronLeft,
	ChevronRight,
	ChevronDown,
} from "lucide-react";
import { set } from "react-hook-form";

export default function HeroBanner() {
	const images = [
		"/assets/img_main_visual01.png",
		"https://www.theclip.net/images/img_main_visual02.png",
	];

	const [currentImage, setCurrentImage] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [textKey, setTextKey] = useState(0);
	const [ImageKey, setImageKey] = useState(1);

	// Toggle play/pause
	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	// Auto-switch background images and trigger text animation
	useEffect(() => {
		if (!isPlaying) return;
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
			setTextKey((prev) => prev + 1); // Change text key to trigger reanimation
			setImageKey((prev) => prev + 1); // Change image key to trigger reanimation
		}, 5000);
		return () => clearInterval(interval);
	}, [isPlaying]);

	return (
		<section className="relative h-screen overflow-hidden">
			{/* Background images carousel */}
			<div
				className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-zoomIn"
				key={ImageKey}
				style={{
					backgroundImage: `url(${images[currentImage]})`,
					opacity: 1,
				}}
			></div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40"></div>

			{/* Content */}
			<div
				key={textKey}
				className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white"
			>
				<div className="text-center max-w-3xl">
					<h1 className="text-4xl md:text-7xl font-bold mb-8 animate-heading">
						전국
						<span className="relative inline-block ml-4">
							1타 학원들의 선택
							<span className="absolute bottom-0 left-0 right-0 h-3 bg-teal-400 animate-line"></span>
						</span>
					</h1>

					<div className="space-y-4 text-lg md:text-4xl font-extralight animate-content">
						<p>한 가지 기준으로 보면 여러 곳이 보이지만</p>
						<p>열 가지 기준으로 보면 THE CLIP만 보입니다.</p>
						<p>초중등 영어는 THE CLIP이 정답입니다.</p>
					</div>
				</div>

				{/* Media controls */}
				<div className="absolute bottom-12 left-12 flex items-center space-x-4">
					<button
						onClick={togglePlayPause}
						className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center"
					>
						{isPlaying ? (
							<Pause className="h-4 w-4" />
						) : (
							<Play className="h-4 w-4" />
						)}
					</button>

					<button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
						<ChevronLeft className="h-4 w-4" />
					</button>

					<button className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
					<div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-center justify-center">
						<div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
					</div>
					<ChevronDown className="h-4 w-4 mt-2 animate-bounce" />
				</div>
			</div>
		</section>
	);
}
