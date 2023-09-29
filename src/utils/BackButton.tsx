import { useNavigate, useLocation } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const backHome = location.pathname !== "/";

    return (
        backHome && (
        <button onClick={() => navigate("/")} className="fixed bottom-3 left-3 bg-yellow-600 rounded-md px-3">Back</button>
        )
    );
};

export default BackButton;