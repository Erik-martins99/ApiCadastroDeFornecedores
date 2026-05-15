import Button from '@mui/material/Button';

const KanbanButton = ({ text, action, endpoint, endpointNow }) => {
    return(
        <>
            <Button variant="contained" color='success'
            onClick={() => action(endpoint)}
            disabled={text.toLowerCase() === endpointNow}
            sx={{
                width: "130px",
                height: "50px"
            }}>{text}</Button>
        </>
    )
}

export default KanbanButton