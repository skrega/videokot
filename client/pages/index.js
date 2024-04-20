import React from "react"
import Home from "@/components/pages/Home/Home"
import api from "../api"

const Index = ({ mainPage, categories }) => {
	return <Home data={mainPage} categories={categories} />
}

export default Index


export async function getServerSideProps(ctx) {
	const qs = require('qs')
	const query = qs.stringify({
			populate: [
				'homeAdvantages.image',
				'bannerImage',
				'backgroundImage',
				'homeServices.image',
				'aboutItems.image',
				'aboutImage',
				'homeCases.image',
				'homeCases.complect',
				'qualityItems.image',
				'homeBenefits.icon',
				'homeBlogItems.image',
			]
		}
	)

	const [mainPage, categories] = await Promise.all([
		api({
			url: `/main-page?${query}`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])

	return {
		props: {
			mainPage: mainPage.data.data,
			categories: categories.data.data
		}
	}
}