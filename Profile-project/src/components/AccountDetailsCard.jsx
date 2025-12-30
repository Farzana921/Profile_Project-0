import Row from "./Row";

export default function AccountDetailsCard({details}) {
return (
    <div className="card infoCard">
        <h2 className="cardtitle">AccountDeltials</h2>

        <div className="rows">
            <Row lable= "Role" value={details.Role}></Row>
            <Row lable= "Status" value={<span className="pill">Active</span>}></Row>
            <Row lable= "Verification" value={<span className="verified">✔️Varified</span>}></Row>

        </div>

    </div>
)
}