import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { MainLayout } from '@/components/layouts/main'
import { InteractiveMap } from '@/components/worldmap'
import { motion, useAnimation } from 'framer-motion'

//Types
import type { ReactElement } from 'react'

interface Contry {
  id: number,
  name: string,
  count: string
}

interface ContryList {
  id: number,
  name: string,
  alias: string,
  coridor: any
}
//Types

export default function Home() {

  const india:Contry[] = [
    {id: 1, name: 'Russia', count: '3.300.586'},
    {id: 2, name: 'Uzbek', count: '1.600.586'},
  ]

  const contryList:ContryList[] = [
    {id: 1, name: 'Индия', alias: 'india', coridor: [{id: 1, name: 'ОАЭ', count: '3.471.300'}, {id: 2, name: 'США', count: '2.723.764'}, {id: 3, name: 'Саудовская Аравия', count: '2.502.337'}, {id: 4, name: 'Пакистан', count: '1.597.134'}, {id: 5, name: 'Оман', count: '1.375.667'}]},
    {id: 2, name: 'Мексика', alias: 'mexico', coridor: [{id: 1, name: 'США', count: '10.853.105'}, {id: 2, name: 'Канада', count: '86.780'}, {id: 3, name: 'Испания', count: '60.854'}, {id: 4, name: 'Германия', count: '20.266'}, {id: 5, name: 'Гватемала', count: '18.872'}]},
    {id: 3, name: 'Россия', alias: 'russia', coridor: [{id: 1, name: 'Украина', count: '3.300.586'}, {id: 2, name: 'Казахстан', count: '2.476.018'}, {id: 3, name: 'Германия', count: '1.198.831'}, {id: 4, name: 'Узбекистан', count: '871.047'}, {id: 5, name: 'Беларусь', count: '672.481'}]},
    {id: 4, name: 'Китай', alias: 'china', coridor: [{id: 1, name: 'США', count: '2.184.110'}, {id: 2, name: 'Республика Корея', count: '803.011'}, {id: 3, name: 'Японя', count: '775.893'}, {id: 4, name: 'Канада', count: '699.190'}, {id: 5, name: 'Австралия', count: '653.232'}]},
    {id: 5, name: 'США', alias: 'usa', coridor: [{id: 1, name: 'Мексика', count: '799.248'}, {id: 2, name: 'Канада', count: '273.226'}, {id: 3, name: 'Великобритания', count: '170.771'}, {id: 4, name: 'Германия', count: '152.639'}, {id: 5, name: 'Австралия', count: '116.620'}]},
    {id: 6, name: 'Индонезия', alias: 'indonesia', coridor: [{id: 1, name: 'Саудовская Аравия', count: '1.709.318'}, {id: 2, name: 'Малайзия', count: '1.241.634'}, {id: 3, name: 'ОАЭ', count: '318.809'}, {id: 4, name: 'Сингапур', count: '159.685'}, {id: 5, name: 'Бангладеш', count: '149.901'}]},
    {id: 7, name: 'Пакистан', alias: 'pakistan', coridor: [{id: 1, name: 'Саудовская Аравия', count: '1.483.737'}, {id: 2, name: 'ОАЭ', count: '996.288'}, {id: 3, name: 'Индия', count: '833.314'}, {id: 4, name: 'Великобритания', count: '537.047'}, {id: 5, name: 'США', count: '408.412'}]},
    {id: 8, name: 'Нигерия', alias: 'nigeria', coridor: [{id: 1, name: 'США', count: '402.186'}, {id: 2, name: 'Великобритания', count: '205.773'}, {id: 3, name: 'Камерун', count: '169.602'}, {id: 4, name: 'Нигер', count: '154.739'}, {id: 5, name: 'Италия', count: '103.462'}]},
    {id: 9, name: 'Бразилия', alias: 'brazil', coridor: [{id: 1, name: 'США', count: '517.519'}, {id: 2, name: 'Япония', count: '204.814'}, {id: 3, name: 'Португалия', count: '154.017'}, {id: 4, name: 'Италия', count: '133.398'}, {id: 5, name: 'Испания', count: '133.244'}]},
    {id: 10, name: 'Бангладеш', alias: 'bangladesh', coridor: [{id: 1, name: 'Индия', count: '2.488.471'}, {id: 2, name: 'Саудовская Аравия', count: '1.277.624'}, {id: 3, name: 'ОАЭ', count: '1.095.231'}, {id: 4, name: 'Малазия', count: '415.717'}, {id: 5, name: 'Кувейт', count: '380.046'}]},
    {id: 11, name: 'Япония', alias: 'japan', coridor: [{id: 1, name: 'США', count: '319.968'}, {id: 2, name: 'Бразилия', count: '62.296'}, {id: 3, name: 'Австралия', count: '54.136'}, {id: 4, name: 'Великобритания', count: '49.238'}, {id: 5, name: 'Германия', count: '37.382'}]},
    {id: 12, name: 'Египет', alias: 'egypt', coridor: [{id: 1, name: 'Саудовская Аравия', count: '962.432'}, {id: 2, name: 'ОАЭ', count: '899.612'}, {id: 3, name: 'Кувейт', count: '421.025'}, {id: 4, name: 'США', count: '204.993'}, {id: 5, name: 'Катар', count: '183.544'}]},
    {id: 13, name: 'Турция', alias: 'turkey', coridor: [{id: 1, name: 'Германия', count: '1.837.282'}, {id: 2, name: 'Франция', count: '340.271'}, {id: 3, name: 'Нидерланды', count: '199.280'}, {id: 4, name: 'Австрия', count: '159.999'}, {id: 5, name: 'США', count: '112.943'}]},
    {id: 14, name: 'Вьетнам', alias: 'viet-nam', coridor: [{id: 1, name: 'США', count: '1.403.193'}, {id: 2, name: 'Япония', count: '335.668'}, {id: 3, name: 'Китай', count: '303.095'}, {id: 4, name: 'Австралия', count: '269.812'}, {id: 5, name: 'Канада', count: '182.265'}]},
    {id: 15, name: 'Германия', alias: 'germany', coridor: [{id: 1, name: 'США', count: '534.203'}, {id: 2, name: 'Турция', count: '376.288'}, {id: 3, name: 'Швейцария', count: '357.112'}, {id: 4, name: 'Великобритания', count: '310.043'}, {id: 5, name: 'Австрия', count: '232.836'}]},
    {id: 16, name: 'Франция', alias: 'france', coridor: [{id: 1, name: 'Испания', count: '221.373'}, {id: 2, name: 'Бельгия', count: '189.544'}, {id: 3, name: 'Великобритания', count: '170.270'}, {id: 4, name: 'Швейцария', count: '170.155'}, {id: 5, name: 'США', count: '162.365'}]},
    {id: 17, name: 'Италия', alias: 'italy', coridor: [{id: 1, name: 'Германия', count: '694.514'}, {id: 2, name: 'Франция', count: '325.933'}, {id: 3, name: 'США', count: '309.965'}, {id: 4, name: 'Швейцария', count: '270.077'}, {id: 5, name: 'Канада', count: '254.831'}]},
    {id: 18, name: 'Великобритания', alias: 'uk', coridor: [{id: 1, name: 'Австралия', count: '1.285.149'}, {id: 2, name: 'США', count: '673.667'}, {id: 3, name: 'Канада', count: '537.504'}, {id: 4, name: 'Ирландия', count: '305.197'}, {id: 5, name: 'Испания', count: '303.193'}]},
  ]

  const [selected, setSelected] = useState('Выберите страну')
  const [selectedAlias, setSelectedAlias] = useState('')
  const [selectedInfo, setSelectedInfo] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  function HandleSelectorOpen() {
    setIsOpen(!isOpen)
  }

  function HandleCountrySelect(id:number) {
    const selEl = contryList.filter((x:any) => x.id === id)
    setSelectedAlias(selEl[0].alias)
    setSelected(selEl[0].name)
    setSelectedInfo(selEl[0].coridor)
    console.log(selEl[0])
    console.log(selEl[0].alias)
  }

  const selectorOpenControl = useAnimation()

  const selectorVar = {
      initial: { opacity: 0, y: 10, transition: { duration: 0.15, ease: 'easeOut'}, transitionEnd: {display: 'none'}},
      open: { opacity: 1, y: 0, display: 'flex', transition: { duration: 0.3, delay: 0.15, ease: 'easeOut'}, transitionEnd: {display: 'flex'} },
  }

  useEffect(() => {
    if (isOpen) {
        selectorOpenControl.start('open')
    }
    else {
        selectorOpenControl.start('initial')
    }
  }, [isOpen, selectorOpenControl])

  return (
    <div className='w-full h-full flex items-center justify-center overflow-hidden'>
      <div className='w-full h-full flex justify-center'>
        <div className='w-[30%] h-full bg-white shadow-sm py-[15px] px-[15px] overflow-y-scroll flex flex-col justify-between'>
          <div className='flex flex-col'>
            <span className='font-medium text-[16px] mb-[25px] text-blue'>IMCM</span>
            <span className='font-normal text-[13px] mb-[25px] text-[#96A1B2]'>Проект основан на публичных статистических данных IOM UN Migration</span>
            <span className='font-normal text-[16px] mb-[15px] text-[#2E4465]'>Полезная информация</span>
            <p className='font-normal text-[13px] mb-[25px] text-[#2E4465]'>Выберите страну для того, чтобы наглядно увидеть миграционные коридоры на карте мира. Также вам будет доступна дополнительная информация о количестве человек, мигрирующих по коридорам в различные страны из выбранной вами страны.
На данной карте отображаются основные официальные миграционные коридоры по данным IOM при ООН.</p>
          </div>
          <div className='w-full h-fit min-h-[200px] rounded-[15px] overflow-clip bg-[#D7E2F4]'>
            <div className='w-full h-fit bg-[#2A64F6] flex items-center py-[15px] px-[10px]'>
              <span className='font-normal text-[13px] text-white'>Отображаемые миграционные коридоры</span>
            </div>
            <div className='w-full h-full py-[15px] px-[10px]'>
              <ul>
                {// @ts-ignore: Unreachable code error
                selectedInfo.length > 0 ? selectedInfo.map((contry:any) =>
                  <li key={contry.id} className='mb-[5px]'>
                    <div className='w-full h-fit flex items-center justify-between'>
                      <span className='font-normal text-[13px] text-[#2E4465]'>{contry.name}</span>
                      <span className='font-normal text-[13px] text-[#2E4465]'>{contry.count} чел.</span>
                    </div>
                  </li>
                ) : <div className='w-full h-full flex items-center justify-center'>
                      <span className='font-normal text-[13px] text-[#2E4465] w-fit h-fit'>Для отображения данных выберите страну</span>
                    </div>
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full h-full relative'>
          <InteractiveMap selected={selectedAlias}/>
          <div className='absolute bottom-[15px] left-[50%] translate-x-[-50%] w-full h-fit flex items-center justify-center flex-col gap-[15px]'>
            <motion.div onMouseLeave={() => setIsOpen(false)} variants={selectorVar} animate={selectorOpenControl} initial="initial" className='w-[35%] h-fit max-h-[300px] overflow-y-scroll p-[15px] bg-white rounded-[15px] flex flex-col'>
              {contryList.map((contry:any) => 
                <div onClick={() => HandleCountrySelect(contry.id)} className='w-full h-fit px-[10px] py-[5px] rounded-full cursor-pointer text-[#2E4465] bg-transparent hover:bg-blue hover:text-white transition-all duration-150 ease-out' key={contry.id}>
                  <span className='font-normal text-[14px] w-fit h-fit select-none'>{contry.name}</span>
                </div>
              )}
            </motion.div>
            <div onClick={HandleSelectorOpen} className='w-[35%] h-[46px] rounded-[15px] bg-[#2E4465] flex items-center justify-start px-[25px] py-[7px] cursor-pointer'>
              <span className='font-normal text-[14px] text-white w-fit h-fit select-none'>{selected}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}