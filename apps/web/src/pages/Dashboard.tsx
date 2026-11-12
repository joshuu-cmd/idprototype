
import logo from "./designer-logo.jpeg";
import profile from "./profile1.jpeg";
import { useState } from "react";

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="main">
            <div id="top">
                <img id="side" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8AAADKysqSkpJDQ0OPj4/8/Pyvr69mZmZERETR0dHf39/Nzc2fn5/v7+/Dw8M1NTWXl5fm5uZwcHD19fVJSUmpqalPT0+5ubnY2NjLimtlAAABYklEQVR4nO3d3U7CQBCA0RW0ivyIKAjv/6Ia9YLQvZxmmuGcN/jSQNuks9MaAAAAAAAAAAAAAND1+fyyWj3mW61enj+nCDw/zMk5PnCb3XRjGx34ml008hpceMwOGjnGBu6yezp2oYWL7JyORWjhW3ZOx1to4SU7p+MSWtiyczpiA9syu2dkGVw47LOLbuyH4MK2m1fiPvZe8Wt4z6668h5+Bf+sF/OwniYPAAAAAAAAAAC4L+vTch5OU3wUNbTDV/bHbFe+Di38y7a5jSNEDyO0Q3bRyCG48CM7aOQjNnDI7umILdxk53RsQgvrz1vUv4b1f4f1/0vv4H5Y/5mmze65dAo/7xZPczDNuwUAAAAAAAAAAHB3ip9BW/4c4fJnQdc/z7v+mezZPR2xgfV3I9Sft6i/o6T+npn6u4JmN4wwwThC+Z1dd7B37Xd3XvbavH8T7c4DAAAAAAAAAAAAgAq+ARHSJsg+Ic+3AAAAAElFTkSuQmCC"></img>
                <img id="logo" alt="IDForege logo" src={logo}></img>
                <h1>Dashboard</h1>
                <img id="profile" onClick={() => setIsOpen(!isOpen)} src={profile}></img>
            </div>
            {isOpen && (
                <div id="dropdown" className="dropdown-menu">
                    <a href="/profile">My Profile</a><br></br>
                    <a href="/settings">Settings</a><br></br>
                    <a href="/notifications">Notifications</a>
                    <button onClick={() => console.log("Logout")}>
                        <img id="logout" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlGfsZYQB966fVfUMwyIDiC9NCpbE-tIVTby7VdWNSg&s=10"></img>
                        Logout
                    </button>
                </div>
            )}
            <p id="welcome">Welcome to IDForge, your number one designer.</p>
            <div id="main-actions">
                <p id="p">Quick Actions</p>
                <div id="actions">
                    <div>
                        <img id="min-logo" src="data:image/png;base64,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" alt="card logo" />
                        <p id="text">Generate card</p>
                    </div>
                    <div>
                        <img id="min-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFr9bRS-6ta3FiCq3rSIiqNorHIAoNioKIkNK8eOdFKA&s=10" alt="card logo" />
                        <p id="text">Manage members</p>
                    </div>
                    <div>
                        <img id="min-logo" src="https://img.icons8.com/?size=50&id=6904&format=png" alt="card logo" />
                        <p id="text">History</p>
                    </div>
                    <div>
                        <img id="min-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkl0YzQA-PAXnMIFOYU1Xxa9Yr9NTwfrU6SDiLPPbhzA&s=10" alt="card logo" />
                        <p id="text">Verify ID</p>
                    </div>
                    <div>
                        <img id="min-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUz36oLYOOr5DeM3u7t8Sf3haV1zn9s2Ho9M-k-oTLheg4f8TyNkCr74x&s=10" alt="card logo" />
                        <p id="text">Design Template</p>
                    </div>
                    <div>
                        <img id="min-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IAVBULsnIobTWwu4544FnLp9S1KcMQC-mQ5MBAGlNQ&s=10" alt="card logo" />
                        <p id="text">Add Organisation</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;