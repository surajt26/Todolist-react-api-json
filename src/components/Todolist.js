import React, { useEffect, useState } from 'react';
import axios from 'axios';


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

                </div>
            </div>

        </div>
    </>)
}

export default Todolist;