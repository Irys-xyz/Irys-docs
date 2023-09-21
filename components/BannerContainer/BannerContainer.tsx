import Link from "next/link";

interface BannerProps {
	href: string;
	backgroundImage: string;
	title: string;
	backgroundPosition: string;
}

const Banner: React.FC<BannerProps> = ({ href, backgroundImage, title, backgroundPosition }) => {
	return (
		<Link href={href}>
			<div
				className="bg-black h-[244px] rounded-2xl overflow-hidden bannerHover pt-10 pl-10 text-2xl hover:scale-[99%] cursor-pointer transition-all font-semibold"
				style={{
					backgroundImage: `url('${backgroundImage}')`,
					backgroundSize: "140%",
					backgroundRepeat: "no-repeat",
					backgroundPosition,
					backdropFilter: "blur(10px)",
				}}
			>
				{title}
			</div>
		</Link>
	);
};

const banners = [
	{
		href: "/developer-docs/irys-sdk",
		backgroundImage: "./img/data-donuts.webp",
		title: "Irys SDK",
		backgroundPosition: "-40% -20%",
	},
	{
		href: "developer-docs/querying/query-package",
		backgroundImage: "./img/dots-cloud.png",
		title: "Query package",
		backgroundPosition: "40% -20%",
	},
	{
		href: "/developer-docs/provenance-toolkit",
		backgroundImage: "./img/data-exponential.webp",
		title: "Provenance toolkit",
		backgroundPosition: "-80% 100%",
	},
	{
		href: "#LUKE-PLEASE-CHANGE-THIS-LINK",
		backgroundImage: "./img/data-spiral.webp",
		title: "Demo",
		backgroundPosition: "40% -20%",
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
