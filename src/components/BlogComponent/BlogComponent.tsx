
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setRelatedPosts } from "../../redux/blog";
import BlogPost from "../BlogPost/BlogPost";
import NewsLetter from "../NewsLetter/NewsLetter";

interface BlogComProps {
  related: string;
  noresult:string;
  error:string
}

const BlogComponent = ({ related,noresult,error }: BlogComProps) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { posts, relatedPosts } = useSelector((state: RootState) => state.blog);
  const currentPost = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    if (id) {
      dispatch(setRelatedPosts(Number(id)));
      window.scrollTo(0, 0);
    }
  }, [id, dispatch]);

  if (!currentPost) return <div className="text-center py-20 text-xl">{error}</div>;

  return (
    <>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <aside className="md:col-span-4 sm:col-span-12">
          <h3 className="text-2xl font-bold mb-8">{related}</h3>
          <div className="flex flex-col gap-8">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((p) => (
                <Link to={`/blog/${p.id}`} key={p.id}>
                  <BlogPost
                    post={p}
                    imgClass="w-full max-h-[204px] object-cover"
                    cardClas="flex flex-col gap-2 "
                    classSec2="flex flex-col justify-center"
                    wrap="/assets/Icon-wrap.png"
                  />
                </Link>
              ))
            ) : (
              <p>{noresult}</p>
            )}
          </div>
        </aside>

  
        <div className="md:col-span-8 sm:col-span-12">
          <div className="mb-8">
            <div className="text-purple-700 font-semibold mb-2">{currentPost.date}</div>
            <h1 className="text-4xl font-bold mb-4">{currentPost.title}</h1>
            <div className="flex gap-2 flex-wrap mb-6">
              {currentPost.categories.map((cat, i) => (
                <span key={i} className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded-full">
                  {cat.name}
                </span>
              ))}
            </div>
          </div>

         
         <img 
           src={currentPost.mainImage} 
           className="w-full h-auto object-cover mb-8" 
           alt={currentPost.title}
         />

         <article className="prose max-w-none">
           {currentPost.sections.map((sec, i) => (
             <div key={i} className="mb-8">
               <img 
                 src={sec.sectionImage} 
                 className="w-full h-auto mb-3 object-cover" 
                 alt="section"
               />
               <p className="text-gray-700 leading-relaxed dark:text-[#C0C5D0]">{sec.sectionContent}</p>
             </div>
           ))}
         </article>
       </div>
        
     </div>
     <NewsLetter news="Newlatters"
     title="Stories and interviews"
     description="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
     btn="Subscribe"
     placeholder="Enter your email"
     nots="We care about your data in our privacy policy"/>
    </>
  );
};

export default BlogComponent;