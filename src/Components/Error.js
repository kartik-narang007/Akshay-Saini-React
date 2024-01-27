import { useRouteError } from "react-router-dom";
export const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>Oops!</h2>
            <h2>Something went wrong!</h2>
            <h3>{`${err.status} : ${err.status.message}`}</h3>
        </div>
    )
}