import { PaginationProps } from '@/types/pagination'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import React from 'react'

export const Paging = ({ totalPages, currentPage }: PaginationProps) => {
  const router = useRouter();

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`?page=${page}`);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 mt-4">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-3 py-1 flex cursor-pointer disabled:opacity-50 gap-2"
      >
        <Image
          src="/assets/Prev.svg"
          alt="Example image"
          width={18}
          height={15}
        />
        <span>Trang trước</span>
      </button>
      <div className='flex gap-2'>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => changePage(i + 1)}
            className={`cursor-pointer px-3 py-1 rounded ${currentPage === i + 1 ? "bg-emerald-200 text-black" : "text-gray-400"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="cursor-pointer px-3 py-1 flex disabled:opacity-50 gap-8"
      >
        <span>Trang kế tiếp</span>
        <Image
          src="/assets/Next.svg"
          alt="Example image"
          width={18}
          height={15}
        />
      </button>
    </div>
  )
}
