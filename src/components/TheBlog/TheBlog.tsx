import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecentPosts, setPage, initializeBlog } from "../../redux/blog";
import type { RootState } from "../../redux/store";
import BlogPost from "../BlogPost/BlogPost";
import Pagination from "../Pagination/Pagination";

interface BlogProps
{
  title:string;
  recent:string;
  allBlog:string;
  load:string

}
const TheBlog = ({ title,recent,allBlog,load}:BlogProps) => {
  const dispatch = useDispatch();
  const { displayPosts, paginatedPosts,postsPerPage } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(setRecentPosts());
    dispatch(initializeBlog());
  }, [dispatch]);

  

  if (!displayPosts || displayPosts.length < 4) return <div>{load}</div>;

  return (
    <>
 <div className="container mx-auto pt-[50px] ">
        <h1 className="  border-t border-b border-black/30 font-semibold lg:text-[243.8px] md:text-[160.8px] sm:text-[72px] text-center ">
          {title}
        </h1>
      </div>

      <div className="px-[112px] ">
        <h3 className="text-[#1A1A1A] font-semibold text-2xl mb-8 md:pt-[60px] dark:text-white sm:pt-[20px]">{recent}</h3>
        
     
        <div className="grid grid-cols-1 lg:grid-cols-12  mb-16 gap-8">
          
       
          <div className="lg:col-span-6 lg:max-w-[592px] md:col-span-12 sm:col-span-12 md:max-w-[770px] sm:max-w-[320px] ">
            <BlogPost post={displayPosts[0]} imgClass="h-[228px] pb-8  w-full" wrap="/assets/Icon-wrap.png" />
          </div>

          <div className="lg:col-span-6  md:col-span-12   sm:col-span-12 flex flex-col justify-between gap-8 " >
          <div className="max-h-[448px]  max-w-[592px] md:col-span-12 sm:col-span-12  ">
              <BlogPost post={displayPosts[1] } imgClass="max-h-[200px] w-[320px] sm:max-w-[320px] "  cardClas="lg:flex md:flex sm:block "     classSec2="pl-6 " wrap="/assets/Icon-wrap.png" />
          </div>
           <div className="max-h-[448x] max-w-[592px]  md:col-span-12  sm:col-span-12 ">
           <BlogPost post={displayPosts[2] }imgClass="max-h-[200px] w-[320px] sm:max-w-[320px]" cardClas="lg:flex  md:flex sm:block"classSec2="pl-6" wrap="/assets/Icon-wrap.png"  />
           </div>
          </div>


          <div className="lg:col-span-12   sm:col-span-12 pt-8 w-full md:max-w-[770px]  ">
            <BlogPost post={displayPosts[3] } imgClass="lg:h-[246px] max-w-[592px] md:w-full md:pb-6 md:h-[188px] sm:h-[188px]  " cardClas="lg:flex md:block sm:block" classSec2="pl-6" wrap="/assets/Icon-wrap.png" />
          </div>
        </div>
  <div>
           <h2 className="font-semibold text-2xl mb-8 dark:text-white">{allBlog}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6  sm:col-span-12">
          {paginatedPosts.map((post, index) => (
            <BlogPost key={`${post.id}-${index}`} post={post} imgClass="h-[240px] w-[384px] pb-8" wrap="/assets/Icon-wrap.png" />
          ))}
        </div>

      <Pagination 
  onPageChange={(page) => dispatch(setPage({ page, limit: postsPerPage }))} 
  next="Next"
  previous="Previous"
/>
    
      </div>
       
       
         </div>
    </>
  );
};

export default TheBlog;
