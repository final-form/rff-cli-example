import React from 'react'
import InkTextInput from 'ink-text-input'

export default function TextInput({ onBlur, onFocus, ...props }) {
	React.useEffect(() => {
		onFocus()
		return onBlur
	}, [onFocus, onBlur])
	return <InkTextInput {...props} showCursor />
}
