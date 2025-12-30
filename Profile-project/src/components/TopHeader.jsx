export default function TopHeader(name, username, avatarImage){
return (
    <header className="topHeader">
        <div className="topheaderInner">
            <div className="avatarCircle avatarImageWrapper">
                <img src={avatarImage} alt={name} className="avatarRing" />

            </div>
            <div className="topheadercont">
                <h1 className="ProfileName">{name}</h1>
                <p className="profileHandle">{username}</p>

                <div className="topHeaderButtons">
                    <button className="btnHeader primary">Edit profile</button>
                    <button className="btnHeader ghost">Sign Out</button>
                </div>

            </div>

        </div>

    </header>
)
}