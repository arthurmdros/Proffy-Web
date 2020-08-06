import React from 'react';
import Input from '../../components/Input';
import PagHeader from '../../components/PagHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PagHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PagHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;