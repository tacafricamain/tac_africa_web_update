/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import FormModal from './formModal';
import React, { useState } from 'react';
import CarouselCardWithDetails from './carousel/carouselCardWithDetails';

type PdfType = {
    children: React.ReactNode;
    pdfs: string;
}

export default function LatestNews( {posts} : any) { // fix any type

//fix bug on production
  let labPosts = posts[0].properties.Category.select.name;

  let news: any[] = []

  posts.forEach((post: any) => {
    if(labPosts == 'news') {
      news.push(post)
    }
  })

  const [modalShow, setModalShow] = useState(false);
  const [PDF, setPDF] = useState('');

  return (
    <div className="w-full bg-[#F5F7FA]">

      <FormModal
          PDF={PDF}
          setPDF={setPDF}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />

      <div className={` pt-12 mx-auto my-0 xl:px-12`}>
        <div className="flex justify-Center items-center  py-4 mx-auto capitalize">
          <h2 className="text-black mx-auto pt-1.5 font-bold text-4xl">
            {'Our Latest '}
            <span className="text-main_blue font-bold text-4xl ">
              {'News Updates'}
            </span>
          </h2>
        </div>
        <p className='text-center text-black'>Browse through latest happenings and events.</p>
        <div className="pl-4 m-4 flex-wrap items-stretch grow">
          <CarouselCardWithDetails posts={news} path={'blog'} />
        </div>
      </div>
    </div>
  );
}