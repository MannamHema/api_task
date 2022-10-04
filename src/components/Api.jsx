
import styles from './api.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

function Api() {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('http://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR')
        .then((res) => {
            console.log(res.data.coins)
            setData(res.data.coins);
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
      <div className={styles.container}>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        {
            data.map(d => (
                    <tr>
                        <td>{d.name}</td>
                        <td>{d.price}</td>
                    </tr>
            ))
        }
        </table>
      </div>
    );
  }
  
  export default Api;
  