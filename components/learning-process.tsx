import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LearningProcess = () => {
	return (
		<section className="relative bg-[#5d3bee] text-white py-16 md:py-24 overflow-hidden">
			{/* Section indicator on the left - simplified to match screenshot */}
			<div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
				<div className="w-3 h-3 rounded-full bg-white"></div>
				<div className="w-0.5 h-4 bg-white/50"></div>
				<div className="w-3 h-3 rounded-full bg-white/30"></div>
				<div className="w-0.5 h-4 bg-white/50"></div>
				<div className="w-3 h-3 rounded-full bg-white/30"></div>
				<div className="w-0.5 h-4 bg-white/50"></div>
				<div className="w-3 h-3 rounded-full bg-white/30"></div>
			</div>

			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 right-1/4 text-[200px] font-bold text-white/5">
					Best
				</div>
				<div className="absolute bottom-1/4 left-1/4 text-[150px] font-bold text-white/5 rotate-12">
					A+
				</div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="flex justify-center items-center p-4 gap-3">
					<Image
						src="https://www.theclip.net/images/img_section03.png"
						alt="Learning Process"
						className=" p-4"
						width={500}
						height={300}
						layout="responsive"
					/>
					<div className="max-w-xl mx-auto p-3">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-start">
							학습 프로세스
						</h2>
						<p className="text-lg text-start">
							THE CLIP의 학습 시스템은 학습 활동과 함께 학습
							내용에 대한 이해도를 관리하는 TCM SYSTEM을 통해 통합
							영어 시스템을 구현하였습니다.
						</p>
						<div className="flex justify-start mt-9">
							<Link
								href="/learning-process"
								className="inline-flex items-center px-8 py-3 bg-white/10 text-white rounded-full border border-white/30 hover:bg-white/20 transition-colors"
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

export default LearningProcess;
