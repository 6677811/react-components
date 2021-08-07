import React, { useState } from 'react';
import './form.scss';

const Form = () => {
    const [cards, setCards] = useState([]);
    const [successSaved, setSuccessSaved] = useState(false);
    const [name, setName] = useState('');
    const [showNameError, setShowNameError] = useState(false);
    const [birthday, setBirthday] = useState('');
    const [showBirthdayError, setShowBirthdayError] = useState(false);
    const [phone, setPhone] = useState('');
    const [showPhoneError, setShowPhoneError] = useState(false);
    const [technology, setTechnology] = useState('');
    const [showTechnologyError, setShowTechnologyError] = useState(false);
    const [gender, setGender] = useState('');
    const [showGenderError, setShowGenderError] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        let id = Symbol('id');

        if (name && birthday && phone && technology && gender) {
            setCards((cards) => [...cards, {id: id.toString(), name, birthday, phone, technology, gender}]);
            setSuccessSaved(true);
            setName('');
            setBirthday('');
            setPhone('');
            setTechnology('');
            setGender('');
        } else {
            if (!name) setShowNameError(!name);
            if (!birthday) setShowBirthdayError(!birthday);
            if (!phone) setShowPhoneError(!phone);
            if (!technology) setShowTechnologyError(!technology);
            if (!gender) setShowGenderError(!gender);
        }
    };

    const handleNameChange = (event) => {
        if (event.target.value) setShowNameError(false);
        setName(event.target.value);
    }
    const handleBirthdayChange = (event) => {
        if (event.target.value) setShowBirthdayError(false);
        setBirthday(event.target.value);
    }
    const handlePhoneChange = (event) => {
        if (event.target.value) setShowPhoneError(false);
        setPhone(event.target.value);
    }
    const handleTechnologyChange = (event) => {
        if (event.target.value) setShowTechnologyError(false);
        setTechnology(event.target.value);
    }
    const handleGenderChange = (event) => {
        if (event.target.value) setShowGenderError(false);
        setGender(event.target.value);
    }

    return (
        <React.Fragment>
            <form className={'form'}>
                <label htmlFor="name">Введите имя:</label>
                <input type="text" name="name" value={name} onChange={handleNameChange}/>
                <label htmlFor="name" className={'red-error'} style={{display: `${showNameError ? 'block' : 'none'}`}}>Проверьте
                    имя</label>

                <label htmlFor="date">Введите дату рождения:</label>
                <input type="date" value={birthday} name={'date'} onChange={handleBirthdayChange}/>
                <label htmlFor="date" className={'red-error'}
                       style={{display: `${showBirthdayError ? 'block' : 'none'}`}}>Проверьте дату</label>

                <label htmlFor="phone">Выберите модель:</label>
                <select name="phone" value={phone} onChange={handlePhoneChange}>
                    <option style={{display: 'none'}}></option>
                    <option value="iphone">iPhone 6S</option>
                    <option value="lumia">Lumia 950</option>
                    <option value="nexus">Nexus 5X</option>
                    <option value="galaxy">Galaxy S7</option>
                </select>
                <label htmlFor="phone" className={'red-error'}
                       style={{display: `${showPhoneError ? 'block' : 'none'}`}}>Проверьте модель</label>

                <fieldset name="technology" style={{display: 'flex', flexDirection: 'column'}}>
                    <legend>Технологии:</legend>
                    <div><input type="checkbox" value={'html5'} checked={technology === 'html5'}
                                onChange={handleTechnologyChange} name="html5"/>HTML5</div>
                    <div><input type="checkbox" value={'dotnet'} checked={technology === 'dotnet'}
                                onChange={handleTechnologyChange} name="dotnet"/>.NET</div>
                   <div><input type="checkbox" value={'java'} checked={technology === 'java'}
                                onChange={handleTechnologyChange}
                                name="java"/>Java</div>
                </fieldset>
                <label htmlFor="technology" className={'red-error'}
                       style={{display: `${showTechnologyError ? 'block' : 'none'}`}}>Проверьте технологии</label>

                <fieldset name="gender">
                    <legend>Пол:</legend>
                    <input
                        name="male"
                        value={'male'}
                        type="radio"
                        onChange={handleGenderChange}
                        checked={gender === 'male'}
                    />
                    <label htmlFor="male">Мужской</label>
                    <input
                        name="female"
                        value="female"
                        type="radio"
                        onChange={handleGenderChange}
                        checked={gender === 'female'}
                    />
                    <label htmlFor="female">Женский</label>
                </fieldset>
                <label htmlFor="gender" className={'red-error'}
                       style={{display: `${showGenderError ? 'block' : 'none'}`}}>Проверьте пол</label>

                <input type="submit" onClick={submitForm}/>
            </form>
            <div style={{display: `${successSaved ? 'block' : 'none'}`}}>Данные успешно сохранены</div>
            <div className={'d-flex justify-content-center flex-row flex-wrap'}>
                {cards.map((card) => (
                    <div key={card.id} className="card border-primary m-3" style={{maxWidth: '20rem'}}>
                        <div className="card-header">{card.name}</div>
                        <div className="card-body">
                            <h4 className="card-title">Primary card title</h4>
                            <p className="card-text">{card.birthday}</p>
                            <p className="card-text">{card.phone}</p>
                            <p className="card-text">{card.technology}</p>
                            <p className="card-text">{card.gender}</p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Form;
