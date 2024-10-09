import Card from './card'
import todo from '../assets/To-do.svg';
import add from '../assets/add.svg';
import styles from './card.module.css';
import tdot from '../assets/3 dot menu.svg';
import inProg from '../assets/in-progress.svg';
import done from '../assets/Done.svg';
import cancel from '../assets/Cancelled.svg';
import urgent from '../assets/SVG - Urgent Priority colour.svg';
import high from '../assets/Img - High Priority.svg';
import medium from '../assets/Img - Medium Priority.svg';
import low from '../assets/Img - Low Priority.svg';
import names from '../assets/Backlog.svg';
import noPro from '../assets/No-priority.svg';

const TicketGroup = ({ bucket, bucketName }) => {

    const TitleToImg = {
        'Backlog': names,
        'Todo': todo,
        'In progress': inProg,
        'Done': done,
        'Cancelled': cancel,
        4: urgent,
        3: high,
        2: medium,
        1: low,
        0: noPro,
        'Anoop Sharma': names,
        'Yogesh': names,
        'Ramesh': names,
        'Suresh': names,
        'Shankar Kumar': names,
    };
    const PriorityToText = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No Priority',
    };

    const displayName = PriorityToText[bucketName] || bucketName;

    return (
        <div>
            <div className={styles.tick}>
                <span>
                    <img src={TitleToImg[bucketName]} alt={`${displayName} Icon`} className={styles.sticon} />
                </span>
                <section className={styles.p}>{displayName}</section> 
                <span className={styles.no}>{bucket.length}</span>
                <div className={styles.pIcon}>
                    <img src={add} alt="add Icon" className={styles.icon} />
                    <img src={tdot} alt="tdot Icon" className={styles.icon} />
                </div>
            </div>

            <div className={styles.pragna}>
                {bucket.map((card, ind) => {
                    return <Card key={ind} card={card} />;
                })}
            </div>
        </div>
    );
};

export default TicketGroup;
