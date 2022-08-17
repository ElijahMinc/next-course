import Heading from "../../components/Heading"
import PostInfo from "../../components/PostInfo"

export const getStaticPaths = async () => {
  // определяем сколько страниц должно быть
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response.json()

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }))
  // const data = null

  return {
    paths,
    fallback: false, // в случае ошибки возвращается 404
  }
}

export const getStaticProps = async (context) => {
  // для асинхронных запросов на сервере
  const { id } = context.params
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  const data = await response.json()
  // const data = null

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: data,
    },
  }
}

const Post = ({ post }) => {
  const { title, body } = post

  return (
    <>
      <Heading text="Posts:" />
      <PostInfo {...{ title, body }} />
    </>
  )
}

export default Post
