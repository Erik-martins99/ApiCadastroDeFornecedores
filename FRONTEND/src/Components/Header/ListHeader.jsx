import Button from "@mui/material/Button"
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Link } from "react-router-dom"

const ButtonAdd = ({ status }) => {
    if (status === 'backlog') {
        return (
            <Button
                component={Link}
                to="/create"
                variant="contained"
                color="success">
                    <AddTaskIcon />
            </Button>
        )
    }
    return null
}

const ListHeader = ({ endpoint }) => {
    return (
        <div className="flex flex-row items-center">
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex flex-row items-center justify-between gap-x-10 h-10">
                    {/* <h2 className="text-bold text-2xl text-green-700">Tasks</h2> */}
                    <ButtonAdd status={endpoint}/>
                </div>
            </div>
        </div>
    )
}

export default ListHeader