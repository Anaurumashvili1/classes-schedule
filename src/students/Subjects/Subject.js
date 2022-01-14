import { React, useState, useEffect } from 'react';
import Popup from './Popup';
import SubjForm from './SubjForm';
import styles from './SubjectTime.module.css';

const Subject = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false);
    const [chosenSubjects, setChosenSubjects] = useState(['ქართული', 'მათემატიკა', 'ინგლისური'])

    const delSbjBtnHandler = (e) => {
        const index = chosenSubjects.indexOf(e.target.value);
        chosenSubjects.splice(index, 1);
        const newlist = chosenSubjects.filter((subject) => subject !== e.target.value);
        console.log(newlist);
        setChosenSubjects(newlist);
   }

    if (chosenSubjects.length === 0) {
        return <div className={styles.subject}><h3>დასამატებელი საგნები არ გაქვთ არჩეული</h3>
            <button className={styles.editBtn} onClick={() => setButtonPopup(true)}>საგნის დამატება</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SubjForm setTrigger={setButtonPopup} chosenSubjects={chosenSubjects} />
            </Popup>
        </div>

    } else {
        return (
            <div className={styles.subject}>
                <div>
                    <h3>არჩეული საგნები:</h3>
                    <ul>
                        {chosenSubjects.map((item) => {
                            return (
                                <li
                                    key={item}
                                    name={item}
                                    value={item}
                                >
                                    {item + " "}<button
                                        value={item}
                                        
                                        onClick={delSbjBtnHandler}
                                    > წაშლა</button></li>
                            )
                        })}
                    </ul>
                    <button className={styles.editBtn} onClick={() => setButtonPopup(true)}>საგნის დამატება</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <SubjForm setTrigger={setButtonPopup} chosenSubjects={ chosenSubjects } />
                    </Popup>
                </div>
            </div>
        )
    }
}

export default Subject;