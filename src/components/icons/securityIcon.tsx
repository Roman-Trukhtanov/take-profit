import React, {FC, SVGAttributes} from 'react';

const SecurityIcon: FC<SVGAttributes<SVGSVGElement>> = ({className}) => (
	<svg
		className={className}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="m4.19 4.376 7-3.11c.51-.23 1.11-.23 1.62 0l7 3.11c.72.32 1.19 1.04 1.19 1.83v4.7c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12v-4.7c0-.79.47-1.51 1.19-1.83ZM19 11.896h-7v-8.8l-7 3.11v5.7h7v8.93c3.72-1.15 6.47-4.82 7-8.94Z"
			fill="currentColor"/>
	</svg>
);

export default SecurityIcon;
