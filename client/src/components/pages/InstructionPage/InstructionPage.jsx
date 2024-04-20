import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import InstructionPageContent from './InstructionPageContent/InstructionPageContent'

const InstructionPage = ({ instructions, instructionsItem, categories}) => {
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={instructionsItem.meta_title} description={instructionsItem.meta_description}>
				<InstructionPageContent item={instructionsItem} />
			</LayoutContainer>
		</div>
	)
}

export default InstructionPage
