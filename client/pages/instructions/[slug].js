import React from 'react'
import api from '../../api'
import InstructionPage from '@/components/pages/InstructionPage/InstructionPage'


const Index = ({ instructions, instructionsItem,categories }) => {
	return (
        <InstructionPage instructions={instructions} instructionsItem={instructionsItem} categories={categories}/>
	)
}

export default Index

export async function getServerSideProps(ctx) {
	const [ instructions, instructionsItem, categories] = await Promise.all([
		
		api({
			url: '/instructions?populate=*',
			method: 'get'
		}),
		api({
			url: `/instructions/${ctx.query.slug}`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])


	return {
		props: {
			instructions: instructions.data.data,
			instructionsItem: instructionsItem.data.data.attributes,
			categories: categories.data.data
		}
	}
}
