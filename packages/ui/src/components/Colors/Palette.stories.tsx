import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { colors } from '../../css/colors'
import { Box } from '../Box/Box'

export const Palette = () => (
	<>
		{Object.keys(colors).map((name) => {
			return (
				<div key={name}>
					<Box
						background={name as keyof typeof colors}
						padding="10"
						textTransform="capitalize"
					>
						{name}
					</Box>
					<br />
				</div>
			)
		})}
	</>
)

export default {
	title: 'Foundations/Colors',
	component: Palette,
} as ComponentMeta<typeof Palette>