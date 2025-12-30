export default function Row(lable, value){
    return (
        <div className="row">
            <span className="rowLable"> {lable}</span>
            <span className="rowValue">{value}</span>
        </div>
    )

}