
'use client';
import React, { useState } from "react";
//img 
import Image from "next/image";
//modal 
import Modal from "react-modal";
//commponents
import PizzaDetails from "./PizzaDetails";
//icons
import { IoCloseOutline } from 'react-icons/io5'
//blind modal to body
Modal.setAppElement('body');

//modal Styles
const modalStyles ={
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
}

const Pizza = ({ pizza }) => {
  //modal satate
  const[ modal, setModal] = useState(false); 
  //open modal
  const openModal = () => {
    setModal(true);
  };
  //close modal
  const closeModal = () => {
    setModal(false);
  };
  return(
  <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl '>
    <Image 
    onClick={openModal} 
    className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer'
    width={270}
    height={270} 
    src={pizza.image} 
    alt=""
    priority={1} />
    {/* title */}
      <div onClick={openModal}>
        <div className='text-xl font-bold mb-3 capitalize cursor-pointer'>{pizza.name}</div>
      </div>
          {/* Description*/}
          <div className='text-sm font-medium min-h-[60px] mb-6 '>{pizza.description}</div>
          {/*Price &btn */}
       <div className='mb-6 flex items-center justify-between'>
            {/* price -> hidden (sm) - visable(lg) */}
            <div className='hidden lg:flex text-xl font-semibold'>starts at {pizza.priceSm} </div>
            {/*btn -> hidden(sm) - visable(lg)*/}
            <button onClick={openModal} className='hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm'>
              Choose</button>
            {/* btn -> hidden(lg) - visable(sm)*/}
            <button onClick={openModal} className='btn btn-sm gradient lg:hidden px-3 text-sm'>starts at {pizza.priceSm}</button>
            {/*modal*/}
           {modal && 
           <Modal 
           isOpen={modal} 
           style={modalStyles} 
           onRequestClose={closeModal} 
           contentLabel='Pizza Modal'
           className='bg-white w-full lg:max-w-[900px] h-full lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%]
           lg:translate-x-[-50%]    lg:translate-y-[-50%] outline-none
           '
           >
            {/* close modal*/}
            <div onClick={closeModal}   className='absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer '>
              <IoCloseOutline className='text-4xl text-orange ' />
            

            </div>
             {/* Pizza Details */}
             <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
            </Modal>}
       </div>
  </div>

 );
};

export default Pizza;
