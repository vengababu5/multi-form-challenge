import { useEffect, useState } from "react"
import CircularProgress from '@mui/material/CircularProgress';
const Success = ({ values }) => {
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const postUserData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ values })
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data =>
                setSuccess('Data Saved Succesfully!'))
            .catch(ex => {
                setSuccess('Fail');
            })
        setIsLoading(false);
    }
    useEffect(() => {
        postUserData();
    }, [])
    return (
        <>
            {isLoading ? <CircularProgress />
                : <div style={{ 'color': 'green' }}>{success}</div>}

        </>
    )
}
export default Success;