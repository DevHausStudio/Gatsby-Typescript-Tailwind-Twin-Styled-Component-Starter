import React, { SVGProps } from 'react';

const TailwindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 64 64" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
      fill="url(#prefix__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1={0}
        y1={-21.333}
        x2={64}
        y2={85.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2383AE" />
        <stop offset={1} stopColor="#6DD7B9" />
      </linearGradient>
    </defs>
  </svg>
);

export default TailwindIcon;
