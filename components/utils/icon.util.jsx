// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages - USING FREE ICONS ONLY
const { library, config } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // CHANGED TO FREE
import { far } from '@fortawesome/free-regular-svg-icons' // CHANGED TO FREE
import { fab } from '@fortawesome/free-brands-svg-icons'

// Remove these Pro imports:
// import { fat } from '@fortawesome/pro-thin-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons' 
// import { fad } from '@fortawesome/pro-duotone-svg-icons'

// Load only free icons into library
library.add(fas, far, fab)

/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here
 * 
 * Now only distributes free icons
 * 
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */
export default function Icon({ icon }) {

	const [ iconType, iconKey ] = icon

	const [ stateIconKey, setIconKey ] = useState('circle-notch')

	useEffect( () => setIconKey( iconKey ), [ iconKey ] )

	return (
		<FontAwesomeIcon icon={[ iconType, stateIconKey ]} />
	)
}