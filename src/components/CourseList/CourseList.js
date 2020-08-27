import React from 'react';
import './CourseList.css'

const CourseList = (props) => {
    const {name,img,title,description,price} = props.course;
    return (
        <div className= 'courseContent'>
            <div className='courseImgs'>
                <img src={img} alt=""/>
            </div>
            <div className='courseInfo'>
                <h3 className='text-info'>{name}</h3>
                <h5>{title}</h5>
                <h6>{description}</h6>
                <h3>${price} </h3>
                <button onClick={ () =>props.handleAddEvent(props.course)} className='enroll-button btn btn-info'> Enroll Now </button>
            </div>
        </div>
    );
};

export default CourseList;