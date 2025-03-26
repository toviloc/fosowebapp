'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

import { Card } from '@/components/Card/Card'
import { Post } from '@/types/post'
import { Banner } from '@/components/Banner/Banner'
import { Search } from '@/components/Search/Search'
import { Category } from '@/components/Category/Category'
import { Paging } from '@/components/Paging/Paging'

import posts from '../mockData/posts'

import './landingPage.css'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'

const PER_PAGE = 6; // Number of posts per page

export default function Page() {

  const [postData, setPostData] = useState<Post[] | []>([])

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const data = posts as Post[]
    setPostData(data)
  }, []);

  // Paginate mock data
  const startIndex = (currentPage - 1) * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const paginatedPosts = postData.slice(startIndex, endIndex);

  return (
    <div className='flex flex-col gap-18'>
      <div className='flex justify-around'>
        <div><Image
          src="/assets/left.svg"
          alt="Example image"
          width={195}
          height={188}
        /></div>
        <div>
          <div><Breadcrumb /></div>
          <div className='typography'>
            <span>Blog <span className='fosoSpan'>FOSO</span> –<br /> Cập Nhật Tin Tức <span className='whiteSpace'>Mới Nhất<div className='underline'></div></span></span>
          </div>
          <div className='text-center'><span>Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</span></div>
        </div>
        <div><Image
          src="/assets/right.svg"
          alt="Example image"
          width={195}
          height={158}
        /></div>
      </div>
      <div className='flex pl-[240px] pr-[240px] gap-5'>
        <div className='flex flex-col gap-6'>
          <div className='text-4xl font-bold'>Tất cả bài viết</div>
          <div><Banner imgUrl='/assets/banner2.svg' fontStyle='font-bold text-4xl w-[50%]' direction='flex-row-reverse' additionalClass='' linkText='Tham gia ngay' linkUrl='' text='Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!' /></div>
          <div className='grid grid-cols-2 gap-4'>{paginatedPosts.map((post, idx) => <div key={idx}><Card id={post.id} imgUrl={post.card.imgUrl} tag={post.card.tag} title={post.card.title} date={post.card.date} readingTime={post.card.readingTime} linkText={post.card.linkText} linkUrl={post.card.linkUrl} /></div>)}</div>
        </div>
        <div className='flex flex-col gap-8'>
          <div>
            <div className='font-bold text-2xl'>Tìm kiếm</div>
            <div><Search /></div>
          </div>
          <div className='gap-6'>
            <div className='font-bold text-2xl'>Danh mục</div>
            <div><Category /></div>
          </div>
          <div><Banner imgUrl='/assets/banner1.png' fontStyle='' direction='flex-col' additionalClass='w-[100%]' linkText='Trải nghiệm ngay' linkUrl='' text='' /></div>
          <div><Banner imgUrl='/assets/banner5.svg' fontStyle='' direction='flex-col' additionalClass='w-[100%]' linkText='Tham gia ngay' linkUrl='' text='Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!' /></div>
        </div>
      </div>
      <div className='pl-[240px] pr-[240px] mb-48'>
        <Paging totalPages={Math.ceil(posts.length / PER_PAGE)} currentPage={currentPage} />
      </div>
    </div>
  )
}
