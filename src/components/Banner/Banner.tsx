import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../common/Button/Button'
import './banner.css'

export const Banner = ({ imgUrl, text, linkText, linkUrl, direction, additionalClass, fontStyle }: { imgUrl: string, text: string, linkText: string, linkUrl: string, direction: string, additionalClass: string, fontStyle: string }) => {
  return (
    <div className={`flex ${direction} banner`}>
      <div>
        <Image
          src={imgUrl || 'logo.svg'}
          alt="Example image"
          width={472}
          height={399}
          className='rounded-[24px]'
        />
      </div>
      <div className='flex flex-col p-6 gap-6 w-[100%]'>
        <div className={fontStyle}>{text}</div>
        <div className='w-[100%]'><Link href={linkUrl}><Button type='secondary' additionalClass={additionalClass} text={linkText} postIcon={<Image
          src="/assets/secondaryVector.svg"
          alt="Example image"
          width={22}
          height={22}
        />} ></Button></Link></div>
      </div>
    </div>
  )
}
