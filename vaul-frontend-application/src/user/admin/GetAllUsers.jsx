import { useState, useEffect } from 'react';

export default function ManageUsers () {

    export default function FetchAllUsers() {
          const handleClick = async () => {
        try {
            const data = await getAllUsers();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button onClick={handleClick}>Get Data</button>
    );
}
}