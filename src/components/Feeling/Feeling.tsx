import React from 'react'
import Image from 'next/image'
import './feeling.css'

export const Feeling = () => {
  return (
    <div className='feelingBox'>
      <div className='flex flex-col items-center'>
        <div className='font-extrabold text-xl'>Bạn thấy bài viết như thế nào?</div>
        <div>4 phản hồi</div>
      </div>
      <div className='flex justify-center w-[100%] gap-8'>
        <div className='point'>
          <Image
            src='/assets/point6.svg'
            alt="Example image"
            width={48}
            height={48}
          />
          <span>1</span>
          <span>Hữu ích</span>
        </div>
        <div className='point'>
          <Image
            src='/assets/point5.svg'
            alt="Example image"
            width={48}
            height={48}
          />
          <span>2</span>
          <span>Yêu thích</span>
        </div>
        <div className='point'>
          <Image
            src='/assets/point4.svg'
            alt="Example image"
            width={48}
            height={48}
          />
          <span>0</span>
          <span>Thú vị</span>
        </div>
        <div className='point'>
          <Image
            src='/assets/point3.svg'
            alt="Example image"
            width={48}
            height={48}
          />
          <span>1</span>
          <span>Bất ngờ</span>
        </div>
        <div className='point'>
          <Image
            src='/assets/point2.svg'
            alt="Example image"
            width={48}
            height={48}
          />
          <span>0</span>
          <span>Nhàm chán</span>
        </div>
        <div className='point'>
          <Image
            src='/assets/point1.svg'
            alt="Example image"
            width={48}
            height={48}
          />
          <span>0</span>
          <span>Tức giận</span>
        </div>
      </div>
    </div>
  )
}
