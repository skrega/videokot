import React from "react";
import s from "./SocialList.module.scss"
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import VKIcon from '@/components/icons/VKIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';

const SocialList = () => {
  return (
    <ul className={s.socials}>
      <li className={s.socialsItem}>
        <a href="#" target="_blank">
          <YoutubeIcon/>
        </a>
      </li>
      <li className={s.socialsItem}>
        <a href="#" target="_blank">
          <VKIcon/>
        </a>
      </li>
      <li className={s.socialsItem}>
        <a href="#" target="_blank">
          <WhatsAppIcon/>
        </a>
      </li>
      <li className={s.socialsItem}>
        <a href="#" target="_blank">
          <TelegramIcon/>
        </a>
      </li>
    </ul>
  )
}

export default SocialList