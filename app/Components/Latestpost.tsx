import { Link } from "react-router";
import type { postMeta } from "~/routes/types";

type LatestPostProps = {
  posts: postMeta[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 3
 }: LatestPostProps) => {
//   const visiblePosts = posts.slice(0, limit);
  const sortedPost= [...posts].sort((a: postMeta,b:postMeta)=>{
    return new Date(b.date).getTime() - new Date(a.date).getTime();

  });
  const latest= sortedPost.slice(0,limit);
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">💥 Latest Posts</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block p-5 border border-gray-700 rounded-lg bg-gray-900 hover:bg-gray-800 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-1">
              {post.title}
            </h3>
            <p className="text-sm text-gray-300 line-clamp-3">{post.excerpt}</p>
            <span className="block mt-3 text-xs text-gray-400">
              {new Date(post.date).toDateString()}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
