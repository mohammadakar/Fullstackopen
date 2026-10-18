

const Statistics = (props) => {
    return (
        <div>
        <table>
            <tbody>
            <tr>
                <td>{props.text}</td>
                {props.text === 'positive' ? (
                    <td>{props.value} %</td>
                ) : (
                    <td>{props.value}</td>
                )}
            </tr>
            </tbody>
        </table>
        </div>
    )
}
     

export default Statistics
