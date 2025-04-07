export default function TableRow({id,name,group}){
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{group}</td>
        </tr>
    )
}