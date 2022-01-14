import { React, useState } from 'react';
import Popup from './Popup';
import TimeForm from './TimeForm';
import styles from './SubjectTime.module.css';

const Time = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    const [chosenTimes, setChosenTimes] = useState(['ორშაბათი, ოთხშაბათი, პარასკევი, 11:20', 'სამშაბათი, ხუთშაბათი, შაბათი, 13:00', 'ორშაბათი, ოთხშაბათი, პარასკევი, 14:40'])

    const delTimeBtnHandler = (e) => {
        const index = chosenTimes.indexOf(e.target.value);
        chosenTimes.splice(index, 1);
        const newlist = chosenTimes.filter((time) => time !== e.target.value);
        console.log(newlist);
        setChosenTimes(newlist);
    }

    if (chosenTimes.length === 0) {
        return <div className={styles.subject}>
            <h3>სასურველი დრო არ გაქვთ არჩეული</h3>
            <button className={styles.button} onClick={() => setButtonPopup(true)}>დროის დამატება</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <TimeForm setTrigger={setButtonPopup} chosenTimes={ chosenTimes }/>
            </Popup>
        </div>
    } else {
        return (
            <div className={styles.subject}>
                <div>
                    <h3>არჩეული დრო:</h3>
                    <ul>
                        {chosenTimes.map((item) => {
                            return (
                                <li
                                    key={item}
                                    name={item}
                                    value={item}
                                >
                                    {item + " "}
                                    <button
                                        value={item}
                                        onClick={delTimeBtnHandler}> წაშლა</button>
                                </li>
                            )
                        })}
                    </ul>
                    <button className={styles.editBtn} onClick={() => setButtonPopup(true)}>დროის დამატება</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <TimeForm setTrigger={setButtonPopup} chosenTimes={chosenTimes} />
                    </Popup>
                </div>
            </div>
        )
    }
}

export default Time;