import styles from './page.module.css'
import imgBanner from "@/assets/background/fondo_banner.jpg"
// import imgBanner from "@/assets/background/fondo_space.png"
import imgMusic from "@/assets/background/fondo_music.jpg"
import Link from 'next/link'

import ImgBackground from '@/components/imgBackground'
import Banner from '@/components/banner'
import Code from "@/components/code"
import Title from '@/components/title'
import Projects from '@/components/projects'
import VideoYoutube from '@/components/videoYoutube'
import Social from '@/components/social'

export default function Home() {
  return (
    <main id='home' className={styles.main}>
      <section className={styles.menu}>
        <Link href='#home'>Home</Link>
        <Link href='#someProjects'>Projects</Link>
        <Link href='#someHobbies'>Hobbies</Link>
        <Link href='#someSocials'>Socials</Link>
      </section>

      <ImgBackground img={imgBanner} alt={"background"} />
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.code}>
        <Title txt={"someExperience"} />
        <Code />
      </div>
      <span id="someProjects"></span>
      <div className={styles.projects}>
        <Title txt={"someProjects"} />
        <Projects />
      </div>
      <span id="someHobbies"></span>
      <div className={styles.hobbie}>
        <ImgBackground img={imgMusic} alt={"background"} />
        <Title txt={"someHobbies"} />
        <VideoYoutube />
      </div>
      <span id="someSocials"></span>
      <div>
        <Title txt={"someSocials"} />
      </div>
      <Social />
    </main>
  )
}
