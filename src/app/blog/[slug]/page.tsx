'use client'

import posts from '@/app/mockData/posts';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Post } from '@/types/post';
import Image from 'next/image';

import './detail.css'
import { Banner } from '@/components/Banner/Banner';
import { Producer } from '@/components/Producer/Producer';
import { Feeling } from '@/components/Feeling/Feeling';
import { BackToTop } from '@/components/BackToTop/BackToTop';
import Link from 'next/link';
import { ListContents } from '@/components/ListContents/ListContents';
import { Carousel } from '@/components/Carousel/Carousel';


export default function Page() {
  const params = useParams()
  const id = params.slug

  const [postData, setPostData] = useState<Post | null>(null)

  useEffect(() => {
    const data = posts.find(post => post.id === id) as Post
    setPostData(data)
  }, []);
  return (
    <div className='detail'>
      <div className='flex flex-col gap-2 w-[10%] fixed top-32 left-32'>
        <div className='font-extrabold text-base'>Chia sẻ</div>
        <div className='flex gap-2 flex-col'>
          <Link href='https://chat.zalo.me/'>
            <Image
              src='/assets/zalo.svg'
              alt="Example image"
              width={48}
              height={48} />
          </Link>
          <Link href='https://www.facebook.com/'>
            <Image
              src='/assets/facebook.svg'
              alt="Example image"
              width={48}
              height={48} />
          </Link>
          <Link href='https://x.com/'>
            <Image
              src='/assets/X.svg'
              alt="Example image"
              width={48}
              height={48} />
          </Link>
          <Link href='https://www.linkedin.com/'>
            <Image
              src='/assets/linkedIn.svg'
              alt="Example image"
              width={48}
              height={48} />
          </Link>
          <Link href='https://www.reddit.com/'>
            <Image
              src='/assets/redit.svg'
              alt="Example image"
              width={48}
              height={48} />
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-6 w-[100%]'>
          <div className='flex flex-col w-[80%] gap-6'>
            <div className='tag'>{postData?.card.tag}</div>
            <div className='font-extrabold text-4xl'>{postData?.header}</div>
            <div><Producer avatar={postData?.avatar || ''} producer={postData?.producer || ''} date={postData?.card.date || ''} readingTime={postData?.card.readingTime || ''} /></div>
            {
              postData?.container.map((item, index) =>
              (
                <div key={index} className='flex flex-col gap-6'>
                  {item.content.map((content, idx) =>
                  (
                    <div key={idx}>
                      {
                        content.type === "image" &&
                        <div className='flex flex-col items-center' key={`image-${idx}`}>
                          <Image
                            src={content.url || 'logo.svg'}
                            alt="Example image"
                            width={900}
                            height={600} />
                          <span className='font-normal text-base text-[#667F93]'>{content.placeHolder}</span>
                        </div>
                      }
                      {
                        content.type === "hNote" &&
                        <div className='flex'>
                          <span className='text-[#15AA7A] text-8xl font-normal font-[Racing Sans One]'>“</span>
                          <span className='italic text-center flex items-center p-[16px 12px 16px 8px]' key={`text-${idx}`}>{content.note}</span>
                        </div>
                      }
                      {
                        content.type === "header" &&
                        <section key={`header-${idx}`} id={`header-${content.header}`}>
                          <span className='header2'>{content.header}</span>
                        </section>
                      }
                      {
                        content.type === "text" &&
                        <span key={`text-${idx}`}>{content.text}</span>
                      }
                      {
                        content.type === "listTop" &&
                        <ul className='list-sub list-sub-marker' key={`listTop-${idx}`}>{content.listTop?.map((itm, contIdx) =>
                        (
                          <li key={contIdx}>
                            <span className='header3'>{itm.listText}</span><span>{itm.meaning}</span>
                          </li>
                        ))}
                        </ul>
                      }
                      {
                        content.type === "list" &&
                        <ul className='list-sub' key={`list-${idx}`}>{content.list?.map((itm, lstIdx) =>
                          <li key={lstIdx}>{itm}</li>
                        )
                        }
                        </ul>
                      }
                      {
                        content.type === "sub" &&
                        <div key={`sub-${idx}`}>{content.container?.map((itm, contIdx) =>
                        (
                          <section key={contIdx} id={`sub-${itm.header}`} className='flex flex-col mb-6'>
                            <span className='header3'>{itm.header}</span>
                            <span>{itm.text}</span>
                          </section>
                        ))}
                        </div>
                      }
                      {
                        content.type === "note" &&
                        <div className='flex flex-col gap-2.5' key={`note-${idx}`}>{content.textList?.map((itm, txtIdx) =>
                        (
                          <div key={txtIdx} className='note'>
                            <span>{itm}</span>
                          </div>
                        )
                        )}
                        </div>
                      }
                      {
                        content.type === "endText" &&
                        <span key={`endText-${idx}`}>{content.endText}</span>
                      }
                    </div>
                  )
                  )}
                </div>
              ))
            }
            <div><Feeling /></div>
          </div>
          <div className='flex flex-col gap-6 w-[30%]'>
            <div className='flex flex-col gap-6'>
              <div className='font-extrabold text-2xl'>Nội Dung Bài Viết</div>
              <div><ListContents dataPost={postData as Post} /></div>
            </div>
            <div><Banner imgUrl='/assets/banner1.png' fontStyle='' direction='flex-col' additionalClass='w-[100%]' linkText='Trải nghiệm ngay' linkUrl='' text='' /></div>
            <div><Banner imgUrl='/assets/banner5.svg' fontStyle='' direction='flex-col' additionalClass='w-[100%]' linkText='Tham gia ngay' linkUrl='' text='Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!' /></div>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='font-extrabold text-4xl'>Bài viết liên quan</div>
          <Carousel />
        </div>
      </div>
      <div className="p-4">
        <BackToTop />
      </div>
    </div >
  )
}
