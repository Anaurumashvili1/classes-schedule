import React from 'react';
import Info from './Info/Info';
import Schedule from './Schedule/Schedule';
import SubjectTime from './Subjects/SubjectTime';
/*import EditSubj from './Subjects/EditSubjectTime/EditSubjectTime';*/
import LogOut from './Info/LogOut';
import Header from './Header';
import styles from './Student.module.css'

const Student = (props) => {

    return (
        <div className={ styles.student}>
            <LogOut />
            <Info />
            <SubjectTime />
            <Schedule  />
      </div>
    )
    
}

export default Student;