import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import InstructionsList from './InstructionsList/InstructionsList'

const Instructions = ({ instructions, pagination, categories }) => {
	return (
		<div className='bg-archive'>
			<LayoutContainer categories={categories}  title={'Инструкции'} description={''}>
				<div className='container'>
                    <InstructionsList instructions={instructions} pagination={pagination} />
                </div>
			</LayoutContainer>
		</div>
	)
}

export default Instructions
