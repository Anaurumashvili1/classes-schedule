import React, { useState, useEffect } from 'react';
import styles from './InfoForm.module.css';


function InfoForm(props) {
    let data = {};


    const [name, setName] = useState(props.student.first_name);
    const [lastName, setLastName] = useState(props.student.last_name);
    const [ID, setID] = useState(props.student.id_number);
    const [dateOfBirth, setDateOfBirth] = useState(props.student.birth_date);
    const [number, setNumber] = useState(props.student.phone_number);
    const [email, setEmail] = useState(props.student.email);
    const [password, setPassword] = useState(props.student.password);
    const [pName, setPName] = useState(props.student.pfirst_name);
    const [pLastName, setPLastName] = useState(props.student.plast_name);
    const [pNumber, setPNumber] = useState(props.student.pphone_number);

    const handleSubmit = async(event) => {
        event.preventDefault();
        data = {
            first_name: name,
            last_name: lastName,
            id_number: ID,
            password: password,
            phone_number: number,
            email: email,
            birth_date: dateOfBirth,
            pfirst_name: pName,
            plast_name: pLastName,
            pphone_number: pNumber
        }
        console.log(props.student);
        console.log(data);
        props.setStudent(data);
        props.setTrigger(false);
    }


    return (
        <form className={ styles.loginForm } >
            <label className={ styles.label }>სახელი</label>
            <input
                className={ styles.fields }
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name = "name" required
            />
            <label className={styles.label}>გვარი</label>
            <input
                className={styles.fields}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName" required
            />
            <label className={styles.label}>ელ-ფოსტა </label>
            <input
                className={styles.fields}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email" required
            />{" "}
            <br />
            <label className={styles.label}>პაროლი </label>
            <input
                className={styles.fields}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password" required
            />
            <br />
            <br />
            <label className={styles.label} htmlFor="start">
                დაბადების თარიღი
            </label>
            <input
                className={styles.fields}
                type="date"
                id="start"
                value={dateOfBirth}
                min="1980-01-01"
                max="2018-12-31"
                name = "dateOfBirth"
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
            />
            <label className={styles.label}>პირადი ნომერი</label>
            <input
                type="text"
                className={styles.fields}
                value={ID}
                onChange={(e) => setID(e.target.value)}
                name="ID" required
            />
            <label className={styles.label}>მობილურის ნომერი</label>
            <input
                type="text"
                className={styles.fields}
                value={ number }
                onChange={(e) => setNumber(e.target.value)}
                name="number" required
            />
            <label className={styles.label}>მშობლის სახელი</label>
            <input
                type="text"
                className={styles.fields}
                value={pName}
                onChange={(e) => setPName(e.target.value)}
                name="pName" required
            />
            <label className={styles.label}>მშობლის გვარი</label>
            <input
                type="text"
                className={styles.fields}
                value={pLastName}
                onChange={(e) => setPLastName(e.target.value)}
                name="pLastName" required
            />
            <label className={styles.label}>მშობლის ნომერი</label>
            <input
                type="text"
                className={styles.fields}
                value={pNumber}
                onChange={(e) => setPNumber(e.target.value)}
                name="pNumber" required
            />
            <input className={styles.loginBtn} type="submit" value="შენახვა" onClick={handleSubmit} />
        </form>
    )
}

export default InfoForm;