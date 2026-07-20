
import type { Post } from "../../redux/blog";

const CardBlog = ({ post }: { post: Post }) => {
  return (
    <div className="border rounded-2xl p-4 transition hover:shadow-lg">
      <img src={post.mainImage} className="w-full h-48 object-cover rounded-xl mb-4" />
      
      
      <div className="flex gap-2 mb-3">
        {post.categories.map((cat, index) => (
          <span 
            key={index} 
            className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full"
          >
            {cat.name}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm">{post.description}</p>
    </div>
  );
};

export default CardBlog;