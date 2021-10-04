import React, {FC, SVGAttributes} from 'react';

const UsdtIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => (
	<svg
		className={className}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
	>
		<path
			d="M23.979 11.996c0 6.594-5.346 11.94-11.94 11.94-6.595 0-11.941-5.346-11.941-11.94C.098 5.4 5.444.056 12.038.056c6.595 0 11.94 5.345 11.94 11.94Z"
			fill="#1BA27A"/>
		<path d="M17.642 6.077H6.336v2.73h4.288v4.011h2.73V8.806h4.288v-2.73Z" fill="#fff"/>
		<path
			d="M12.015 13.245c-3.548 0-6.424-.561-6.424-1.254 0-.692 2.876-1.254 6.424-1.254 3.547 0 6.423.562 6.423 1.254 0 .693-2.876 1.254-6.423 1.254Zm7.212-1.045c0-.893-3.229-1.617-7.212-1.617-3.983 0-7.213.724-7.213 1.617 0 .787 2.504 1.442 5.822 1.587v5.76h2.73V13.79c3.343-.141 5.873-.8 5.873-1.59Z"
			fill="#fff"/>
	</svg>
);

export default UsdtIcon;
