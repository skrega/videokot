import React from 'react'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeServices from './HomeServices/HomeServices'
import HomeAbout from './HomeAbout/HomeAbout'
import HomeCases from './HomeCases/HomeCases'
import HomeResolution from './HomeResolution/HomeResolution'
import HomeAdvantages from './HomeAdvantages/HomeAdvantages'
import HomeBlog from './HomeBlog/HomeBlog'

const Home = ({ data, categories }) => {
	const {
		title,
		homeAdvantages,
		backgroundImage,
		bannerImage,
		homeServices,
		aboutTitle,
		aboutItems,
		aboutText,
		aboutImage,
		titleCase,
		homeCases,
		qualityTitle,
		qualityItems,
		benefitsTitle,
		homeBenefits,
		blogTitle,
		homeBlogItems
	} = data.attributes

	return (
		<LayoutContainer categories={categories}>
			<HomeBanner
				title={title}
				advantages={homeAdvantages}
				backgroundImage={backgroundImage}
				bannerImage={bannerImage}
			/>
			<HomeServices items={homeServices} />
			<HomeAbout title={aboutTitle} items={aboutItems} text={aboutText} image={aboutImage} />
			<HomeCases title={titleCase} items={homeCases} />
			<HomeResolution title={qualityTitle} items={qualityItems} />
			<HomeAdvantages title={benefitsTitle} items={homeBenefits} />
			<HomeBlog title={blogTitle} items={homeBlogItems} />
		</LayoutContainer>
	)
}

export default Home
