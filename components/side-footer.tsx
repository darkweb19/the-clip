import Image from "next/image";
import Link from "next/link";

const SiteFooter = () => {
	return (
		<footer className="bg-gray-700 text-white">
			{/* CTA Section */}
			<div className="container mx-auto ml-6 px-4 py-16 md:py-24 relative">
				<div className="max-w-6xl">
					<h2 className="text-3xl md:text-4xl font-medium mb-4">
						Worried about English programs?
					</h2>
					<div className="relative inline-block mb-4">
						<h3 className="text-3xl md:text-5xl font-bold">
							THE CLIP solves it I will give it to you.
						</h3>
						<div className="absolute bottom-0 left-0 w-[180px] h-3 bg-yellow-300"></div>
					</div>
					<p className="text-lg text-gray-200">
						The excellence of our program has already been proven by
						academies across the country.
					</p>
				</div>

				{/* Character image - right side */}
				<div className="absolute right-44 bottom-0 hidden md:block">
					<div className="relative">
						{/* Character image */}
						<div className="w-full h-64">
							<Image
								src="https://www.theclip.net/images/img_ban1.png"
								width={1000}
								height={600}
								alt="THE CLIP representative"
								className="w-full h-full object-contain"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Company Info Section */}
			<div className="bg-[#262626] py-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between mb-8">
						{/* Logo */}
						<div className="mb-6 md:mb-0">
							<div className="text-2xl font-bold text-gray-300">
								KYO
								<br />
								WON{" "}
								<span className="text-sm text-gray-400">
									교원위즈
								</span>
							</div>
						</div>

						{/* Policy Links */}
						<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
							<Link
								href="/privacy-policy"
								className="text-gray-300 hover:text-white"
							>
								Personal information processing policy
							</Link>
							<Link
								href="/email-policy"
								className="text-gray-300 hover:text-white"
							>
								Refusal of unauthorized collection of emails
							</Link>
						</div>
					</div>

					{/* Company Details */}
					<div className="text-sm text-gray-400 space-y-1">
						<p>
							KyoWonWiz Co., Ltd. | Business Registration Number:
							129-81-67558 | Mail Order Business Report Number:
							2019-Seoul Jung-gu-1217
						</p>
						<p>
							Representative Name: Seonghun Yoon | Address: 51-1
							Cheonggyecheon-ro, Jongno-gu, Seoul
						</p>
						<p>
							Representative Number: 02-2125-0780 | Weekdays
							09:00-18:00 Closed on weekends and holidays
						</p>
						<p className="mt-4">
							COPYRIGHT(C) KYOWON. ALL RIGHTS RESERVED.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
