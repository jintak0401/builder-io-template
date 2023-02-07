interface Props {
    closeModal: () => void;
    uploadGraph: (graphSrc: string) => void;
}
declare const GraphModal: ({ closeModal, uploadGraph }: Props) => JSX.Element;
export default GraphModal;
