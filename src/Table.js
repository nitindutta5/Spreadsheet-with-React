import { Table } from 'reactstrap'
import { useState, useEffect } from 'react'

const MainTable = (props) => {
    const [row, setRow] = useState([])
    const [col, setCol] = useState([])
    const [cellData, setCellData] = useState({});

    useEffect(() => {
        let _row = [];
        let _col = [];

        for (let i = 65; i < 65 + props.x; i++) {
            let char = String.fromCharCode(i);
            _row.push(char);
        }

        for (let i = 1; i < props.y + 1; i++) {
            _col.push(i)
        }

        setRow(_row)
        setCol(_col)

    }, [])

    const onChangeHandler = (id, e) => {
        setCellData({
            ...cellData,
            [id]: e.target.value

        })
    }
    const computeCell = (e) => {
        let value = e.target.value;
        if (value.startsWith("=")) {
            let finalstr = value.substr(1).toUpperCase();
            const myarray = finalstr.split("+");
            let total = 0;
            for (let i = 0; i < myarray.length; i++) {
                total += parseInt(cellData[myarray[i]]);
            }
            e.target.value = total;
        }
    }


    return (

        <Table bordered responsive>
            <thead>
                <tr>
                    <th></th>
                    {
                        row.map((header, id) => (
                            <th key={id}>{header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {col.map((column, id) => (
                    <tr key={id}>
                        <th>{id + 1}</th>
                        {

                            col.map((th, id) => (
                                <th key={id}>
                                    <input
                                        onBlur={(e) => { computeCell(e) }}
                                        className="cell"
                                        id={row[id] + "" + column}
                                        type="text"
                                        onChange={e => onChangeHandler((row[id] + "" + column), e)}
                                    />
                                </th>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </Table >
    )
}

export default MainTable