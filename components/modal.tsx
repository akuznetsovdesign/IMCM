import React, {useState, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {MenuClose} from '@/components/svg/menuclose';

interface Modal {
    isOpen: any,
    setIsOpen: any
}

export function Modal({isOpen, setIsOpen}:Modal) {

  const popUpOpenControl = useAnimation();

  const popUpVariants = {
    initial: { opacity: 0, y: -1, transition: { duration: 0.3, ease: 'easeOut'}, transitionEnd: {display: 'none'}},
    open: { opacity: 1, y: 0, display: 'flex', transition: { duration: 0.3, ease: 'easeOut'}, transitionEnd: {display: 'flex'} },
  };

  useEffect(() => {
    if (isOpen) {
      popUpOpenControl.start('open');
      document.body.style.overflow = 'hidden';
    } else {
      popUpOpenControl.start('initial');
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, popUpOpenControl]);

  return (
    <>
      <motion.div variants={popUpVariants} animate={popUpOpenControl} initial="initial" className="flex w-screen h-screen fixed top-0 left-0 z-[20] bg-black/[0.40] items-center justify-center">
        <div className="bg-white rounded-[15px] p-[35px] laptop:w-[40%] mobS:w-[90%]">
          <div className="w-full h-fit flex flex-row items-center justify-end">
            <div onClick={() => setIsOpen(!isOpen)} className="w-[30px] h-[30px] rounded-full border-[1px] border-gray fill-gray hover:border-blue hover:fill-blue flex items-center justify-center transition-all duration-300 ease-out cursor-pointer">
              <MenuClose width={20} />
            </div>
          </div>
          <div className="w-full h-fit">
            <span className="font-normal text-[16px] text-[#2E4465]">О проекте</span>
            <p className="font-normal text-[13px] text-[#2E4465] my-[15px]">Данный проект был реализован в рамках студенческого задания на тему миграции в мире студентами Московского Международного Университета: Кузнецовым Александром и Куляевой Анастасией.</p>
            <p className="font-normal text-[12px] text-[#2E4465]">*IMCM — interactive migration corridor map (рус. Интерактивная Карта Миграционных Коридоров)</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}