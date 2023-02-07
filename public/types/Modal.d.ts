import { ReactNode } from 'react';
interface Props {
    opened: boolean;
    className?: string;
    children: ReactNode;
}
declare const Modal: ({ opened, className, children }: Props) => JSX.Element | null;
export default Modal;
