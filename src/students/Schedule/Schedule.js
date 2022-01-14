import react from 'react';
import styles from './Schedule.module.css';

const Schedule = (props) => {

    const groups = [
        { groupID: 'group1', subject: 'ქართული', room: '1', time: 'ორშაბათი, ოთხშაბათი, პარასკევი 14:00' },
        { groupID: 'group2', subject: 'მათემატიკა', room: '2', time: 'ორშაბათი, ოთხშაბათი, პარასკევი 14:00' },
        { groupID: 'group3', subject: 'ინგლისური', room: '2', time: 'ორშაბათი, ოთხშაბათი, პარასკევი 14:00' }
    ]

    if (groups.length === 0) {
        return (<div className={ styles.schedule}>
            <h2>განრიგი</h2>
            <h3>საგნები ჯერ არ არის დამატებული</h3>
        </div>)
    } else {
        return (
            <div className={styles.schedule}>
                <h2>განრიგი</h2>
                <ul>
                    {
                        groups.map((group) => {
                            return (
                                <li key={group.groupID} >
                                    <h3>{group.subject}</h3>
                                    <p>{group.time}</p>
                                    <p>ოთახი: {group.room}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Schedule;
