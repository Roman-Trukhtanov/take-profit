import React, {FC, SVGAttributes} from 'react';

const closeIcon: FC<SVGAttributes<SVGSVGElement>> = ({className}) => (
	<svg
		className={className}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.81 7.093a1 1 0 0 0 0 1.415l3.536 3.535L6.81 15.58a1 1 0 0 0 0 1.414l.283.283a1 1 0 0 0 1.414 0l3.536-3.536 3.535 3.536a1 1 0 0 0 1.414 0l.283-.283a1 1 0 0 0 0-1.414l-3.535-3.536 3.535-3.535a1 1 0 0 0 0-1.414l-.283-.283a1 1 0 0 0-1.414 0l-3.535 3.535L8.507 6.81a1 1 0 0 0-1.414 0l-.283.283Z"
			fill="currentColor"
		/>
	</svg>
);

export default closeIcon;
