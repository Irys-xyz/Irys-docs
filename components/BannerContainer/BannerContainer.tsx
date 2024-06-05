import Link from "next/link";

interface BannerProps {
	href: string;
	backgroundImage: string;
	title: string;
	sub: string;
	backgroundPosition: string;
}

const Banner: React.FC<BannerProps> = ({ href, backgroundImage, title, sub, backgroundPosition }) => {
	return (
		<Link href={href}>
			<div
				className="bg-black h-[244px] rounded-2xl overflow-hidden bannerHover pt-10 pl-10 text-2xl hover:scale-[99%] cursor-pointer transition-all font-semibold"
				style={{
					backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url('${backgroundImage}')`,
					backgroundSize: "140%",
					backgroundRepeat: "no-repeat",
					backgroundPosition,
					backdropFilter: "blur(10px)",
				}}
			>
				{title}
				<p className="text-base font-light pt-4">{sub}</p>
			</div>
		</Link>
	);
};

const banners = [
	{
		href: "/irys-sdk",
		backgroundImage: "./img/data-exponential.webp",
		title: "Irys SDK",
		sub: "Frictionless integration with 3 lines of code",
		backgroundPosition: "-40% -10%",
	},
	{
		href: "/querying",
		backgroundImage: "./img/dots-cloud.png",
		title: "Querying",
		sub: "Easily search transaction metadata",
		backgroundPosition: "40% -20%",
	},
	{
		href: "/irys-cli",
		backgroundImage: "./img/data-exponential.webp",
		title: "Irys CLI",
		sub: "Permanent data from your CLI",
		backgroundPosition: "-80% 100%",
	},
	{
		href: "/tutorials",
		backgroundImage: "./img/data-spiral.webp",
		title: "Guides & Tutorials",
		sub: "Start your learning journey here",
		backgroundPosition: "40% -10%",
	},
];

const BannerContainer: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row w-full gap-4 items-stretch px-4 lg:px-[79px]">
			<div className="flex flex-col w-full md:w-1/2 gap-4">
				{banners.slice(0, 2).map((banner, index) => (
					<Banner key={index} {...banner} />
				))}
			</div>
			<div className="flex flex-col w-full md:w-1/2 gap-4">
				{banners.slice(2).map((banner, index) => (
					<Banner key={index} {...banner} />
				))}
			</div>
		</div>
	);
};

export default BannerContainer;
