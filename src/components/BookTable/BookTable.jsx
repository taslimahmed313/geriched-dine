import React from 'react';
import { useForm } from 'react-hook-form';
import { Reservation, Reservation_bg } from '../MenuData/MenuData';
import Slider from '../Slider/Slider';
import TextOverlay from '../TextOverlay/TextOverlay';
import "./BookTable.css";

const BookTable = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <TextOverlay source={Reservation_bg} page_title={"Online Reservation"}/>
            <div className='app__bg section__padding'>
                <div className="reservation-section">
                   
                    <div className='reservation-section__content'>
                        <div className='reservation__form'>
                             <h3>Reservation Form</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" {...register("name")} placeholder="Name" />
                                <input type="text" {...register("email")} placeholder="Email"/>
                                <input type="text" {...register("phone")} placeholder="Phone"/>
                                <input type="text" {...register("person")} placeholder="How many
                                 person/s?"/>
                                <input type="date" name="" id="" placeholder='Date' />
                                <input className='custom__button' type="submit" value="Book A 
                                 Table" />
                            </form>
                        </div>
                        <div className='reservation__slider'>
                            <Slider item_img={Reservation}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTable;