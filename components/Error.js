import React from 'react'
import { Box, Color } from 'ink'

export default function Error({ children }) {
	return (
		<Box>
			<Color red>{children}</Color>
		</Box>
	)
}
