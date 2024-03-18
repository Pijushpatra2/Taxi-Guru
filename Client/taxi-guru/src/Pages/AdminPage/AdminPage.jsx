import axios from "axios";
import { useEffect, useState } from "react";


export default function AdminPage() {
    
    const [data, setData] = useState([]);
    const [Refresh, setRefresh] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:3000/api/all-requests')
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, [Refresh]);

  
    return (
        <div>
            <button className="bg-primary px-4 py-2 rounded-lg m-4" onClick={()=>{setRefresh(Refresh+1)}}>Refresh</button>
            {data.map(item => {
             return   (
                    <div key={item._id} className="border-2 m-4">
                        <h2>First Name: {item.firstName}</h2>
                        <p>Last Name: {item.lastName}</p>
                        <p>dateTime: {item.dateTime}</p>
                        <p>email: {item.email}</p>
                        <p>address: {item.address}</p>
                        <p>phoneNumber: {item.phoneNumber}</p> 
                        <p>journeyType: {item.journeyType}</p> 
                    </div>
                )
            })}
      </div>
    );
}
