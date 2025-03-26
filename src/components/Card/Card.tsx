import React from 'react'
import Image from 'next/image'
import './card.css'
import { useRouter } from 'next/navigation'

export const Card = ({ id, imgUrl, tag, title, date, readingTime, linkText, linkUrl }: { id: string, imgUrl: string, tag: string, title: string, date: string, readingTime: string, linkText: string, linkUrl: string }) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url)
  }

  return (
    <div className='flex flex-col gap-4 w-auto'>
      <Image
        src={imgUrl || 'logo.svg'}
        alt="Example image"
        width={505}
        height={475}
        className='rounded-[24px] w-[100%]'
      />
      <div className='cardContent'>
        <div className='tag'>{tag}</div>
        <div className='title'>{title}</div>
        <div className='dateTime'>
          <div className='flex gap-2'><Image
            src="/assets/Date.svg"
            alt="Example image"
            width={18}
            height={19}
          />{date}</div>
          <div className='line'></div>
          <div className='flex gap-2'><Image
            src="/assets/Time.svg"
            alt="Example image"
            width={19}
            height={19}
          />{readingTime}</div>
        </div>
        <div>
          <div className='link' onClick={() => handleClick(`${linkUrl}${id}`)}>{linkText}<Image
            src="/assets/Arrow.svg"
            alt="Example image"
            width={18}
            height={15}
          /></div>
        </div>
      </div>
    </div>
  )
}
