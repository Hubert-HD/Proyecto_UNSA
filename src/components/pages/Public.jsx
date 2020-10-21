import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';

const Public = () => {

    const [state, setstate] = useState({})

    useEffect(() => {
        fetch("data.json")
            .then(data => data.json())
            .then(datos => setstate(datos))
    }, [])

    return (
        <div>
            <header>
                <h1>UNSA</h1>
                <Link to="./login">sign Session</Link>
            </header>
            <div>
            <p>{JSON.stringify(state)}</p>
            </div>
            <contenido>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fugiat ratione, dolor molestias quis deserunt eaque similique laudantium, inventore, vero mollitia assumenda ipsa ea iste repellat excepturi quisquam nesciunt perferendis?
                </p>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fugiat ratione, dolor molestias quis deserunt eaque similique laudantium, inventore, vero mollitia assumenda ipsa ea iste repellat excepturi quisquam nesciunt perferendis?
                </p>
                <br/>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fugiat ratione, dolor molestias quis deserunt eaque similique laudantium, inventore, vero mollitia assumenda ipsa ea iste repellat excepturi quisquam nesciunt perferendis?
                </p>
                <br/>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fugiat ratione, dolor molestias quis deserunt eaque similique laudantium, inventore, vero mollitia assumenda ipsa ea iste repellat excepturi quisquam nesciunt perferendis?
                </p>
                <br/>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas fugiat ratione, dolor molestias quis deserunt eaque similique laudantium, inventore, vero mollitia assumenda ipsa ea iste repellat excepturi quisquam nesciunt perferendis?
                </p>
            </contenido>
        </div>
    )
}

export default Public