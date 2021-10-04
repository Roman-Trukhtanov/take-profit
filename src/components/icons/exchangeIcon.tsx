import React, {FC, SVGAttributes} from 'react';

const ExchangeIcon: FC<SVGAttributes<SVGSVGElement>> = ({className}) => (
	<svg
		className={className}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<rect x="9" y="15" width=".75" height="7.5" rx=".375" transform="rotate(-180 9 15)" fill="#818C99"/>
		<path
			d="M10.13 13.676a.7.7 0 0 1 .928 0 .564.564 0 0 1 0 .848l-1.969 1.8a.7.7 0 0 1-.928 0l-1.969-1.8a.564.564 0 0 1 0-.848.7.7 0 0 1 .928 0l1.505 1.376 1.505-1.376Z"
			fill="#818C99"/>
		<rect width=".75" height="7.5" rx=".375" transform="matrix(-1 0 0 1 15.25 9)" fill="#818C99"/>
		<path
			d="M16.38 10.324a.7.7 0 0 0 .928 0 .564.564 0 0 0 0-.848l-1.969-1.8a.7.7 0 0 0-.928 0l-1.969 1.8a.564.564 0 0 0 0 .848.7.7 0 0 0 .928 0l1.505-1.375 1.505 1.375Z"
			fill="#818C99"/>
		<rect x=".5" y="23.5" width="23" height="23" rx="11.5" transform="rotate(-90 .5 23.5)" stroke="#818C99"/>
	</svg>
);

export default ExchangeIcon;
