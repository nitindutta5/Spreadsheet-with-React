import { Table } from 'reactstrap'
import useState from 'react'

const MainTable = (props) => {
    const row = [];
    for (let i = 65; i < 65 + props.x; i++) {
        let char = String.fromCharCode(i);
        row.push(char);
    }
    const col = [];
    for (let i = 1; i < props.y + 1; i++) {
        col.push(i);
    }

    // For holding cell value
    // const [cellData, updateCellData] = useState();

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
                                <th key={id}><input className="cell" id={row[id] + "" + column} type="text" /></th>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </Table >
    )
}

export default MainTable