interface Props {
    type: string;
    options: object;
    setOptions: (option: unknown) => void;
}
declare const OptionSelector: ({ type, options, setOptions }: Props) => JSX.Element;
export default OptionSelector;
