import styles from './tickets.module.css'
import { useEffect, useState } from "react";
import TicketGroup from "./ticketGroup";

const Tickets = ({ ticketsAndUsers, groupingFactor, orderingFactor }) => {
    const [buckets, setBuckets] = useState([]);

    console.log(groupingFactor, orderingFactor)

    const bucketOrdering = {
        'status': ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'],
        'userId': ['Anoop Sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh'],
        'priority': [4, 3, 2, 1, 0]
    }

    useEffect(() => {
        setBuckets([])
        if (ticketsAndUsers.length !== 0) {
            const IdToName = {
                'usr-1': 'Anoop sharma',
                'usr-2': 'Yogesh',
                'usr-3': 'Shankar Kumar',
                'usr-4': 'Ramesh',
                'usr-5': 'Suresh'
            }

            let bucketContainer = {};
            ticketsAndUsers.tickets.forEach((ticket) => {
                ticket['userId'] = IdToName[ticket['userId']];
                if (!bucketContainer[ticket[groupingFactor]]) bucketContainer[ticket[groupingFactor]] = [];
                bucketContainer[ticket[groupingFactor]].push(ticket);
            });

            bucketOrdering[groupingFactor].forEach((category) => {
                let cardContents = bucketContainer[category] || [];

                cardContents.sort((card_one, card_two) => {
                    if(orderingFactor === 'title') return card_one['title'].localeCompare(card_two['title']);
                    else return card_two.priority - card_one.priority;
                })

                setBuckets((prevBuckets) => {
                    return [...prevBuckets, cardContents];
                });
            })
        }
    },[ticketsAndUsers, groupingFactor, orderingFactor])

    return (
        <div className={styles.container}>
            {buckets.map((bucket, ind) => {
                console.log(bucketOrdering[groupingFactor][ind])
                return <TicketGroup key={ind} bucket={bucket} bucketName={bucketOrdering[groupingFactor][ind]}/>
            })}
        </div>
    );
}

export default Tickets;