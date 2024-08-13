import { useEffect, useState } from "react";

const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(true)
    async function fetchAllUser() {
        try {
            setPending(true)
            const apiRes = await fetch('https://dummyjson.com/users')
            const result = await apiRes.json()
            if (result?.users) {
                setUsersList(result?.users)
                setPending(false)
            } else {
                setUsersList([])
                setPending(false)
                console.log(`result else : `, result);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllUser()
    }, [])
    if (pending) return <h1>Fetching users data</h1>
    return (
        <div>
            <h1>Users List : </h1>
            <ul>
                {

                    usersList && usersList.length > 0
                        ? usersList.map(userItem =>
                            <li key={userItem?.id}>
                                <p>{userItem?.firstName} {userItem?.lastName}</p>
                            </li>

                        )
                        : <h1>No userfound</h1>
                }
            </ul>
        </div>)
}
export default Users;