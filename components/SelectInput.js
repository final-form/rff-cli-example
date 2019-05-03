import React from 'react'
import InkSelectInput from 'ink-select-input'

export default function SelectInput({
	onSubmit,
	onBlur,
	onChange,
	onFocus,
	...props
}) {
	React.useEffect(() => {
		onFocus()
		return onBlur
	}, [onFocus, onBlur])
	return (
		<InkSelectInput
			{...props}
			onSelect={({ value }) => {
				onChange(value)
				onSubmit()
			}}
		/>
	)
}
