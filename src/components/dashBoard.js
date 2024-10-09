import axios from 'axios';
import styles from './dashBoard.module.css';
import { useEffect, useState } from 'react';
import NavBar from './navBar';
import Tickets from './tickets';

const DashBoard = () => {
    const localGrouping = localStorage.getItem('grouping');
    const localOrdering = localStorage.getItem('ordering');

    const [grouping, setGrouping] = useState(localGrouping || 'status');
    const [ordering, setOrdering] = useState(localOrdering || 'priority');
    const [ticketsAndUsers, setTicketsAndUsers] = useState([]);

    useEffect(() => {
        const fetchTickets = async() => {
            const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
            return response.data;
        }
        fetchTickets()
                .then((res) => setTicketsAndUsers(res))
                .catch((err) => console.log(err));
    }, [])

    return (
        <div className={styles.container}>
            <NavBar setGrouping={setGrouping} setOrdering={setOrdering}/>
            <Tickets ticketsAndUsers={ticketsAndUsers} groupingFactor={grouping} orderingFactor={ordering}/>
        </div>
    );
}

export default DashBoard;