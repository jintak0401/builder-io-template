interface Props {
    type: string;
    row: number;
    setRow: (row: number) => void;
    col: number;
    setCol: (col: number) => void;
    data: number[][];
    setData: (data: number[][]) => void;
    labels: string[];
    setLabels: (labels: string[]) => void;
    items: string[];
    setItems: (items: string[]) => void;
    colors: string[];
    setColors: (colors: string[]) => void;
    xyChartTitle: {
        x: string;
        y: string;
    };
    setXYChartTitle: (axis: 'x' | 'y', title: string) => void;
}
declare const DataTable: (props: Props) => JSX.Element;
export default DataTable;
