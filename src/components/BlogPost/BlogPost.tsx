
import { Link } from "react-router-dom";
import type { Post } from "../../redux/blog";

interface BlogPostProps {
  post:Post,
  imgClass:string,
  cardClas?:string,
  classSec2?:string,
  wrap:string;
}

const BlogPost = ({ post,imgClass,cardClas,classSec2  ,wrap}: BlogPostProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="flex flex-col group">
      
      <div className={cardClas}>
      <img src={post.mainImage} className={imgClass} />
     <div className={classSec2} >
         
    
      <div className="text-[#6941C6] text-sm font-semibold pb-3 ">
    {post.date}
      </div>
  
      <div className="flex  justify-between " >
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-800 transition  lg:pb-3 sm:pb-2 ">
          
        {post.title}
      </h3>
      <img src={wrap} alt="icon" className="w-[28px] h-[24px]" />
      </div>
      
  
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 dark:text-[#C0C5D0]">
        {post.description}
      </p>
  
      <div className="flex gap-2">
        {post.categories.map((cat, index) => (
          <span key={index} className={`text-xs font-bold  px-2 py-1 rounded-full ${cat.color}`}>
            {cat.name}
          </span>
        ))}
      </div>
     </div>
     </div>
    </Link>
  );
};

export default BlogPost;