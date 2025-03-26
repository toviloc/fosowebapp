import React from 'react'
import Image from 'next/image'
import './producer.css'

export const Producer = ({ avatar, producer, date, readingTime }: { avatar: string, producer: string, date: string, readingTime: string }) => {
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <div><Image
          src={avatar || 'logo.svg'}
          alt="Example image"
          width={64}
          height={64}
        />
        </div>
        <div className='flex flex-col'>
          <div className='fontStyle font-medium text-sm'>Tác Giả</div>
          <div className='font-bold text-base'>{producer}</div>
        </div>
      </div>
      <div className='flex dateTime fontStyle'>
        <div className='flex gap-2 '>
          <Image
            src="/assets/Date.svg"
            alt="Example image"
            width={18}
            height={19}
          />
          Cập nhật vào: {date}
        </div>
        <div className='line'></div>
        <div className='flex gap-2 '>
          <Image
            src="/assets/Time.svg"
            alt="Example image"
            width={19}
            height={19}
          />
          {readingTime}
        </div>
      </div>
    </div>
  )
}
