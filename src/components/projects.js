import Image from 'next/image'
import styles from './projects.module.css'
import { myProjects } from '@/data/data'

import imgPerfil from "@/assets/b-perfil.jpg"
import imgGitHub from "@/assets/social/b-github.png"
import imgGitWww from "@/assets/social/b-internet.png"

const imgCover = require.context('@/assets/cover', true);
const imgCoverList = imgCover.keys().map(image => imgCover(image));

const imgLang = require.context('@/assets/languages', true);
const imgLangList = imgLang.keys().map(image => imgLang(image));

const imgTec = require.context('@/assets/technologies', true);
const imgTecList = imgTec.keys().map(image => imgTec(image));

// cardFront seccion -------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
const cardFront = (nombre, caratulaIndex, lenguajesIndex, tecnologiasIndex) => {
  return (
    <>
      <p className={styles.cardFrontTitle}>{nombre}</p>
      <Image
        src={imgCoverList[caratulaIndex].default}
        style={{ objectFit: "cover" }}
        width={200}
        height={120}
        alt={nombre}
      />
      {imglanguages(lenguajesIndex)}
      {imgTechnologies(tecnologiasIndex)} 
    </>
  )
}

// gets all image related to lenguages for the cardFront
const imglanguages = (props) => {
  return (
    <>
      {props.map((e, index) => (
        <Image
          key={index}
          src={imgLangList[e].default}
          alt={`image-${index}`}
          height={50}
        />
      ))}
    </>
  )
}

// gets all image related to technologies for the cardFront
const imgTechnologies = (props) => {
  return (
    <>
      {props.map((e, index) => (
        <Image
          key={index}
          src={imgTecList[e].default}
          alt={`image-${index}`}
          height={50}
        />
      ))}
    </>
  )
}

// cardBack seccion --------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
const cardBack = (myWebLinks, myGitLinks) => {
  return (
    <>
      <div className={styles.cardBackTitle}>
        <Image
          src={imgGitWww}
          width={30}
          height={30}
          alt="GitHub"
        />
        <p>Web Deploy</p>
      </div>
      <div className={styles.cardBackLinks}>
        {getLinks(myWebLinks)}
      </div>
      <div className={styles.cardBackTitle}>
        <Image
          src={imgGitHub}
          width={30}
          height={30}
          alt="GitHub"
        />
        <p>GitHub Links</p>
      </div>
      <div className={styles.cardBackLinks}>
        {getLinks(myGitLinks)}
      </div>
    </>
  )
}

// gets all links related to gitHub and web deploy for cardBack
const getLinks = (props) => {
  if (props.length > 0) {
    return (
      <>
        {props.map((e, index) => (
          <a key={index} href={e.link} target="_blank">{e.nombre}</a>
        ))}
      </>
    )
  } else {
    return (
      <p>No Links Available</p>
    )
  }
}

// Project component -------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
export default function Projects() {
  return (
    <section className={styles.section}>
      {myProjects.map((e, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              {cardFront(e.nombre, e.caratulaIndex, e.lenguajesIndex, e.tecnologiasIndex)}
            </div>
            <div className={styles.cardBack}>
              {cardBack(e.web, e.gitHub)}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
