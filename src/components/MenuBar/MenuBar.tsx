import React from 'react'
import Image from 'next/image'

import './menuBar.css'
import { Button } from '../common/Button/Button'


export const MenuBar = () => {
  return (
    <div className='navBar'>
      <div><Image
        src="/assets/logo.svg"
        alt="Example image"
        width={134}
        height={55}
      />
      </div>
      <div className='subMenu'>
        <div className='menu'>Về chúng tôi</div>
        <div className='menu'>Giải pháp <Image
          src="/assets/Vector.svg"
          alt="Example image"
          width={16}
          height={16}
        /> </div>
        <div className='menu'>Tài nguyên <Image
          src="/assets/Vector.svg"
          alt="Example image"
          width={16}
          height={16}
        /></div>
        <div className='menu'>Liên hệ</div>
      </div>
      <div className='flex gap-[8px]'>
        <Button type='tertiary' additionalClass='min-w-9' text='VI' preIcon={<Image
          src="/assets/VI.svg"
          alt="Example image"
          width={24}
          height={24}
        />} postIcon={<Image
          src="/assets/Vector.svg"
          alt="Example image"
          width={16}
          height={16}
        />} />
        <Button type='primary' additionalClass='min-w-8' text='Trở Thành Khách Hàng' postIcon={<Image
          src="/assets/target.svg"
          alt="Example image"
          width={22}
          height={22}
        />} />
      </div>
    </div>
  )
}
