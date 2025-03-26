import Link from 'next/link'
import React from 'react'
import './category.css'
export const Category = () => {
  return (
    <div className='flex flex-col category'>
      <Link href='' className='linkCategory'><span>Tất cả</span><span>108</span></Link>
      <Link href='' className='linkCategory'><span>Thiết Kế Website</span><span>36</span></Link>
      <Link href='' className='linkCategory'><span>Thiết Kế App Mobile</span><span>13</span></Link>
      <Link href='' className='linkCategory'><span>Quản Lý Sản Xuất</span><span>25</span></Link>
      <Link href='' className='linkCategory'><span>Quản Lý Bán Hàng</span><span>22</span></Link>
      <Link href='' className='linkCategory'><span>Báo Chí Nói Về FOSO</span><span>7</span></Link>
      <Link href='' className='linkCategory'><span>Tin Tức FOSO</span><span>5</span></Link>
    </div>
  )
}
