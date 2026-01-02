import { useRouteError } from "react-router-dom";
const AppError = () =>{
    const err = useRouteError();
    rerturn(
        <div>
            <h1>Opps!!</h1>
            <h2>Sorry something went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
};

export default AppError;