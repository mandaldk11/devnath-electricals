import React, { useEffect, useState } from 'react'

export default function Search() {
    const [data, setData] = useState([]);
    const [filterVal, setFilterVal] = useState('')
    const [searchApiData, setSearchApiData] = useState('')
    // const [senddata,setSendData]=useState(false)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {
                setData(result);
                setSearchApiData(result)
            })
    }, []);

    // {
    //     senddata && filterHandler()
    // }
    const filterHandler = (e) => {
        if (e.target.value === '') {
            setData(searchApiData)
        } else {
            const filterData = searchApiData.filter((curElem) => curElem.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filterData)
        }
        setFilterVal(e.target.value)
    }
    return (
        <div className='container mx-4 my-4'>
            <h1>Hello World Search</h1>
            <input
                type='text'
                placeholder='Search...'
                value={filterVal}
                onChange={(e) => filterHandler(e)}
                style={{width:'500px',height:'40px'}}
            />
            {/* <button 
            type='button' 
            onClick={()=>setSendData(true)}
            className='btn btn-success mx-2'> 
             Search</button> */}


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UIserName</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((curElem, index) => {
                            return (<>
                                <tr key={curElem.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{curElem.name}</td>
                                    <td>{curElem.username}</td>
                                    <td>{curElem.email}</td>
                                </tr>
                                {/* <button className='btn btn-primary'>Details</button> */}

                            </>)

                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
