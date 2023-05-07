import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1441 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1441 90H0V0H1441V90Z' fill='#0F52BA' stroke='black' />
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
