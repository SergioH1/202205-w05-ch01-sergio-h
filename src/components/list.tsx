import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { gotModel } from '../models/got-model';
import * as ac from '../reducer/action-creator';

export function ListGot() {
    const Family = ['Lannister', 'Baratheon', 'Stark', 'Martell', 'Tully'];
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        family: '',
        id: 0,
        isDead: false,
    });

    function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        dispatch(ac.addGotAction(new gotModel(formData.name, formData.family)));
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        const value =
            element.type === 'checkbox' ? element.checked : element.value;
        setFormData({ ...formData, [element.name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="Nombre"
                    placeholder="Nombre del Personaje"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <select
                    name="Familia"
                    id=""
                    value={formData.family}
                    onChange={handleChange}
                    required
                >
                    <option></option>
                    {Family.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="isOk">¿Esta muerto?</label>
                <input
                    type="checkbox"
                    name="isOk"
                    id="isOk"
                    checked={formData.isDead}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type="radio"
                    name="importance"
                    id="urgente"
                    value="urgente"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}
