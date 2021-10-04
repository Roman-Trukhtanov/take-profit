import React, {FC, SVGAttributes} from 'react';

const RightIcon: FC<SVGAttributes<SVGSVGElement>> = ({className}) => (
	<svg
		className={className}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<path opacity=".3" fillRule="evenodd" clipRule="evenodd"
			  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z" fill="#31B984"/>
		<path
			d="m12 10.458-5.014 4.4a.596.596 0 0 1-.845-.074.61.61 0 0 1 .073-.853l5.19-4.717a.894.894 0 0 1 1.196.033l5.211 4.706a.61.61 0 0 1 .026.856.596.596 0 0 1-.848.026L12 10.458Z"
			fill="#31B984"/>
	</svg>
);

export default RightIcon;
