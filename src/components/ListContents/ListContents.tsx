import { Post } from '@/types/post'
import React from 'react'
import './listContents.css'
import Link from 'next/link'

export const ListContents = ({ dataPost }: { dataPost: Post }) => {

  return (
    <div>
      {
        dataPost?.container.map((item, index) =>
        (
          <button key={index} className='flex flex-col gap-1 text-start'>
            {
              item.content.map((content, idx) =>
              (
                <div key={idx}>
                  {
                    content.type === "header" &&
                    <Link href={`#header-${idx}`}>
                      <span key={`header-${idx}`}>{content.header}</span>
                    </Link>
                  }
                  {
                    content.type === "sub" &&
                    <ul key={`sub-${idx}`} className='sub-list'>
                      {
                        content.container?.map((itm, contIdx) =>
                        (
                          <li key={contIdx}>
                            <Link href={`#sub-${contIdx}`}>
                              {itm.header}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  }
                </div>
              ))
            }
          </button>
        ))
      }
    </div>
  )
}
