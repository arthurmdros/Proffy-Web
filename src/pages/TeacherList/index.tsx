import React from 'react';
import Input from '../../components/Input';
import PagHeader from '../../components/PagHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PagHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select 
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Química', label: 'Química'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'História', label: 'História'},
                            { value: 'Geografia', label: 'Geografia'}
                        ]}                    
                    />
                    
                    <Select 
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-feira'},
                            { value: '2', label: 'Terça-feira'},
                            { value: '3', label: 'Quarta-feira'},
                            { value: '4', label: 'Quinte-feira'},
                            { value: '5', label: 'Sexta-feira'},
                            { value: '6', label: 'Sábado'}
                        ]}                    
                    />
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