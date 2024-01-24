import { useRouteError } from "react-router"

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return(
        <div>
        <h1>OOPS!!!</h1>
        <h1>Somethins went Wront</h1>
        <h3>{error.status}</h3>
        <h3>{error.statusText}</h3>
        </div>
    )
}
export default Error;