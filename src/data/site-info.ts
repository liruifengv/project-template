export type SocialLink = {
	text: string
	icon: string
	href: string
	platform: string
	footerOnly?: boolean
}

export type HeaderLink = {
	label: string
	href: string
	isAnchor?: boolean
}

export type SiteInfo = {
	url: string
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	rss?: boolean
	socialLinks: SocialLink[]
	headerLinks: HeaderLink[]
}

const headerLinks: HeaderLink[] = [{ label: "首页", href: "/" }]

const siteInfo: SiteInfo = {
	url: "https://liruifengv.com",
	name: "Astro 项目初始化模板",
	title: "Astro 项目初始化模板",
	description: "Astro 项目初始化模板",
	image: {
		src: "/og.jpg",
		alt: "Astro 项目初始化模板",
	},
	rss: false,
	socialLinks: [
		{
			platform: "twitter",
			icon: "social/twitter",
			href: "https://x.com/liruifengv",
			text: "在 Twitter 上关注我们",
		},
	],
	headerLinks,
}

export default siteInfo
