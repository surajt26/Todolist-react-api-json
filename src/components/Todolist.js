import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
// import AddNewItem from './AddNewItem';
// import ItemList from './ItemList';
// import UpdateInput from './UpdateInput';

const Todolist = () => {

    // Task list to store all task
    const [taskList, setTaskList] = useState([]);

    // Function to setTaskList from localStorage
    const getList = () => axios.get(`http://localhost:3004/taskList`)
        .then(resp => setTaskList(resp.data));

    useEffect(() => {
        getList();
        // eslint-disable-next-line
    }, [])

    // Selected task to store task and their id
    // const [selectedTask, setSelectedTask] = useState({
    //     task: '',
    //     taskId: null
    // });

    return (<>
        <div className='container position-relative'>
            <div
                className='row'
                style={{
                    height: '100vh',
                    zIndex: '1'
                }}
            >
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                    mx-auto my-auto border rounded shadow'>
                    {/* Header Component */}
                    <Header />
                    {/* Add New Item Component */}
                    {/* <AddNewItem
                        taskList={taskList}
                        getList={getList}
                    /> */}
                    {/* Item List Component */}
                    {/* <ItemList
                        taskList={taskList}
                        setSelectedTask={setSelectedTask}
                        getList={getList}
                    /> */}
                </div>
            </div>
            {/* Update Input Component */}
            {/* <UpdateInput
                taskList={taskList}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
                getList={getList}
            /> */}
        </div>
    </>)
}

export default Todolist;