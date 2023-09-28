import { useNavigate, useLocation } from "react-router-dom";

import "./backButton.css";

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const backHome = location.pathname !== "/";

    return (
        backHome && (
        <button onClick={() => navigate("/")} className="fixed bottom-3 left-3">Back</button>
        )
    );
};

export default BackButton;