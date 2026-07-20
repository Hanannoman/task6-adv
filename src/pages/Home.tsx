import TheBlog from "../components/TheBlog/TheBlog"


const Home = () => {
  return (
    <div>
      <TheBlog
      title="THE BLOG"
      recent="Recent blog posts"
      allBlog="All blog posts"
      load="Loading." />
    </div>
  )
}

export default Home
