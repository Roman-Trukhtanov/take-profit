import React, {FC, SVGAttributes} from 'react';

const AddPlusIcon: FC<SVGAttributes<SVGSVGElement>> = ({className}) => (
	<svg
		className={className}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
	>
		<path d="M6 16c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 0 1 0 2.5H7.25C6.56 17.25 6 16.69 6 16Z"
			  fill="currentColor"/>
		<path d="M16 6c.69 0 1.25.56 1.25 1.25v17.5a1.25 1.25 0 1 1-2.5 0V7.25c0-.69.56-1.25 1.25-1.25Z"
			  fill="currentColor"/>
	</svg>
);

export default AddPlusIcon;
