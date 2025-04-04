import React, { useContext } from "react";
import { DataContext } from "../Context/Context.jsx";

const MyComponent = () => {
    const { data, setData } = useContext(DataContext);

    return (
        <div>
            <h2>Data: {JSON.stringify(data)}</h2>
            <button onClick={() => setData({ name: "React Context" })}>
                Update Data
            </button>
        </div>
    );
};

export default MyComponent;
