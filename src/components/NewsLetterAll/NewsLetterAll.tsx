
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setPage } from "../../redux/blog";
import NewsLetter from "../NewsLetter/NewsLetter";
import BlogPost from "../BlogPost/BlogPost";
import Pagination from "../Pagination/Pagination";

interface NewsProps{
    allblog:string
}

const NewsLetterAll = ({allblog}:NewsProps) => {
  const dispatch = useDispatch();
  

  const { paginatedPosts} = useSelector(
    (state: RootState) => state.blog
  );

  const limit = 3;

  useEffect(() => {
    dispatch(setPage({ page: 1, limit }));
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-12">

     <NewsLetter news="Newlatters"
      title="Stories and interviews"
      description="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
      btn="Subscribe"
      placeholder="Enter your email"
      nots="We care about your data in our privacy policy"/>

      <h2 className="font-semibold text-2xl mb-8 dark:text-white sm:pt-[50px]">{allblog}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <BlogPost
            key={post.id}
            post={post} 
            imgClass="h-[244px] w-[ 384px]  object-cover  mb-4 "  
            cardClas="flex flex-col"
            wrap="/assets/Icon-wrap.png"
           
          />
        ))}
      </div>

      <Pagination 
        onPageChange={(page) => dispatch(setPage({ page, limit }))} 
        next="Next"
        previous="Previous"
      />
    </div>
  );
};

export default NewsLetterAll;