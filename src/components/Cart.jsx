import GistsList, {API_URL_PUBLIC} from './items/GistsList';
import React, {useCallback, useEffect, useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";


function Cart(props) {


    {/*<GistsList />*/
    }
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const requestGists = async () => {
        setLoading(true);
        try {
            setGists(props.gistsArray);
        } catch (err) {
            setError(true);
            console.warn(err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );

    if (loading) {
        return <CircularProgress/>;
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>);
    }

    if (gists.lenght === 0) {
        return (<p>No gists</p>);
    }
    return (

        <div>
            <h1>Shop Items</h1>
            <br></br>
            <ul>{gists.map(renderGist)}</ul>
            <h1>{gists.id}<p className="product_name"></p></h1>
            <h2>{gists.description}<p className="product-description"></p></h2>

            <button onClick={renderGist}>Добавить в корзину</button>
        </div>
    );
}


export default Cart;