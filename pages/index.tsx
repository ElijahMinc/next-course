import Heading from "../components/Heading"
import SocialInfo from "../components/SocialInfo"
import styles from "../styles/Home.module.scss"

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_LOCAL}/socials`)
  const data = await response.json()
  // const data = null

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      socials: data,
    },
  }
}

const Index = ({ socials }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Heading text="Hello world" />
        <SocialInfo socials={socials} />
      </div>
    </>
  )
}

export default Index
