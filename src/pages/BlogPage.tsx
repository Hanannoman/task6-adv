
import BlogComponent from '../components/BlogComponent/BlogComponent'

const BlogPage = () => {
  return (
    <div>
      <BlogComponent related='Recent blog posts'
      error='The Blog Not Found'
      noresult='NO Blog Similar'
     />
    </div>
  )
}

export default BlogPage
