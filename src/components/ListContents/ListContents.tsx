import { Post } from '@/types/post'
import React from 'react'
import './listContents.css'

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
                    <span key={`text-${idx}`}>{content.header}</span>
                  }
                  {
                    content.type === "sub" &&
                    <ul key={`sub-${idx}`} className='sub-list'>
                      {
                        content.container?.map((itm, contIdx) =>
                        (
                          <li key={contIdx}>
                            {itm.header}
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
