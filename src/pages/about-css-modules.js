import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <h1>What do you think about Jas?</h1>
      <p>We asked several people what they think about Jas Remmers. Here is what they said.</p>
      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. My opinion of Jas is that I think she is super beautiful. I would love to be like her."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. I also think Jas is amazing. I regularly get envious thinking about her great charisma!"
      />
      <User
        username="Alexander"
        avatar="https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/alex-2--tojpeg_1588061661576_x1.jpg"
        excerpt="I'm Alex. I am the lucky boyfriend of Jas. I love her more than anything in the world."
      />
    </Container>
  )
}