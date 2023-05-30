import { CONFIG } from "site.config"
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import { useStoreFriendMode } from '@hooks/useStoreFriendMode';
import { getFriendText } from '@/src/module/getFriendText';

type Props = {
  className?: string
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  const [count, setCount] = useStoreFriendMode(state => [state.count, state.setCount]);
  const handleClick = () => setCount();

  return (
    <div className={className}>
      <div className="p-1 mb-2 dark:text-white">💻 Profile</div>
      <div className="rounded-2xl bg-white dark:bg-zinc-700 w-full md:p-4 lg:p-4 mb-9">
        <div className="relative w-full after:content-[''] after:block after:pb-[100%]" onClick={handleClick}>
          <Image src={CONFIG.profile.image} layout="fill" alt="" />
        </div>
        <div className="bg-white p-2 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
          <div className=" text-xl italic font-bold">{CONFIG.profile.name}</div>
          <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            {count === 0 ? CONFIG.profile.role : getFriendText(count)}
          </div>
          <div className="text-sm mb-2">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
