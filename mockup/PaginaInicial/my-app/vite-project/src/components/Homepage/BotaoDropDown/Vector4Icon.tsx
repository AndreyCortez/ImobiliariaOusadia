import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 86 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 12V0H86V12H0Z' fill='#D9D9D9' stroke='black' />
  </svg>
);
const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
