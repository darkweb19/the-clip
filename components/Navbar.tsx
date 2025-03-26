import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-30 w-full transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			{/* Main Navbar */}
			<div className="container mx-auto h-28 px-4 py-4 flex justify-between items-center">
				<div
					className={`flex items-center ${
						isScrolled ? "text-black" : "text-white"
					}`}
				>
					<Image
						src={
							isScrolled
								? "https://www.theclip.net/images/logo_b.png"
								: "https://www.theclip.net/images/logo_w.png"
						}
						alt="The Clip Logo"
						width={150}
						height={50}
					/>
				</div>
				<nav
					className={`hidden md:flex space-x-24 font-bold text-2xl ${
						isScrolled ? "text-black" : "text-white"
					}`}
				>
					<Link href="/brand-story" className="hover:text-gray-600">
						브랜드 이야기
					</Link>
					<Link
						href="/educational-program"
						className="hover:text-gray-600"
					>
						교육프로그램
					</Link>
					<Link href="/news" className="hover:text-gray-600">
						THE CLIP 소식
					</Link>
					<Link
						href="/customer-service"
						className="hover:text-gray-600"
					>
						고객센터
					</Link>
				</nav>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className={`${isScrolled ? "text-black" : "text-white"}`}
				>
					<Menu className="h-6 w-6" />
				</button>
			</div>
			{/* Drawer  */}
			<div
				className={`fixed top-0 left-0 right-0 h-screen bg-white p-10 shadow-lg transition-transform duration-500 ease-in-out ${
					menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full"
				}`}
			>
				<div>
					<Image
						src={"https://www.theclip.net/images/logo_b.png"}
						alt="The Clip Logo"
						width={150}
						height={50}
					/>
				</div>
				<button
					onClick={() => setMenuOpen(false)}
					className="absolute top-10 right-7 text-black"
				>
					<X className="h-8 w-8" />
				</button>
				<div className="max-w-full h-4/5 mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 h h-full">
						{/* Column 1 */}
						<div className="border-r border-gray-200">
							<h3 className="text-4xl font-bold mb-6 inline-block relative">
								브랜드 이야기
								<span className="absolute bottom-0 left-0 w-full h-2 bg-emerald-400"></span>
							</h3>
							<ul className="mt-6 space-y-4 text-2xl font-light">
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										THE CLIP 소개
									</a>
								</li>
							</ul>
						</div>

						{/* Column 2 */}
						<div className="border-r border-gray-200">
							<h3 className="text-4xl font-bold mb-6 inline-block relative">
								교육 프로그램
								<span className="absolute bottom-0 left-0 w-full h-2 bg-emerald-400"></span>
							</h3>
							<ul className="mt-6 space-y-4 text-2xl font-light">
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										학습 프로세스
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										코스 및 레벨
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										강의 지원 시스템
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										온라인 학습
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										테스트 센터
									</a>
								</li>
							</ul>
						</div>

						{/* Column 3 */}
						<div className="border-r border-gray-200">
							<h3 className="text-4xl font-bold mb-6 inline-block relative">
								THE CLIP 소식
								<span className="absolute bottom-0 left-0 w-full h-2 bg-emerald-400"></span>
							</h3>
							<ul className="mt-6 space-y-4 text-2xl font-light">
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										공지사항
									</a>
								</li>
							</ul>
						</div>

						{/* Column 4 */}
						<div>
							<h3 className="text-4xl font-bold mb-6 inline-block relative">
								고객센터
								<span className="absolute bottom-0 left-0 w-full h-2 bg-emerald-400"></span>
							</h3>
							<ul className="mt-6 space-y-4 text-2xl font-light">
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										샘플 교재 신청
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-800 hover:text-gray-600"
									>
										상담 신청
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
