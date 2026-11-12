


function Sidebar(){
    return(
        <div id="side-cover">
            <div onClick={() => window.location.href = "/"} id="test-cover"></div>
            <div id="main-side">
                <div id="logo-side">
                    <img src="data:image/png;base64,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"></img>
                    <div>
                        <p id="forge">IDForge</p>
                        <p>Create. Design. Manage</p>
                    </div>
                </div>
                <a href="/">Dashboard</a>
                <a href="">Organisations</a>
                <a href="">Members</a>
                <a href="">Templates</a>
                <a href="">Designer</a>
                <a href="">ID cards</a>
                <a href="">Verification</a>
                <a href="">Billing</a>
                <a href="">Settings</a>
                <a href="">Help & support</a>
            </div>
        </div>
    );
}

export default Sidebar;