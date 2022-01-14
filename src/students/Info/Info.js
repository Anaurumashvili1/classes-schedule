import { React, useState } from 'react';
import styles from './Info.module.css';
import Popup from './Popup';
import InfoForm from './InfoForm';

const Info = (props) => {

    const [buttonPopup, setButtonPopup] = useState(false);

    const [student, setStudent] = useState({
        first_name: 'ანა',
        last_name: 'ურუმაშვილი',
        email: 'anaurumashvili@gmail.com',
        password: 'react',
        id_number: '01012036547',
        birth_date: '1996-06-02',
        phone_number: 599456123,
        pfirst_name: 'მარიამ',
        plast_name: 'ზედგენიძე',
        pphone_number: '5778854236',
    });


    return (
        <div className={ styles.info }>
            <ul>
                <li><h3>მომხმარებლის ინფორმაცია</h3></li>
                <li>სახელი: <div>{student.first_name + ' ' + student.last_name}</div></li>
                <li>პირადი ნომერი: <div>{student.id_number}</div></li>
                <li>დაბადების თარიღი: <div>{student.birth_date}</div></li>
                <li>მობილურის ნომერი: <div>{student.phone_number}</div></li>
                <li>ელ-ფოსტა: <div>{student.email}</div></li>
                <li>მშობელი: <div>{student.pfirst_name + ' ' + student.plast_name}</div></li>
                <li>მშობლის ნომერი: <div>{student.pphone_number }</div></li>
            </ul>
            <div className={styles.edit}>
                <button className={styles.button} onClick={() => setButtonPopup(true)}>შეცვლა</button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                    <InfoForm student={student} setTrigger={setButtonPopup} setStudent={setStudent}/>
                </Popup>
            </div>
        </div>
    )
}

export default Info;