import type { ButtonHTMLAttributes, ReactNode } from 'react';
type Props=ButtonHTMLAttributes<HTMLButtonElement>&{children:ReactNode;variant?:'primary'|'ghost'};
export default function Button({children,variant='primary',className='',...props}:Props){return <button {...props} className={`${variant==='primary'?'btn-primary':'btn-ghost'} ${className}`}>{children}</button>}
