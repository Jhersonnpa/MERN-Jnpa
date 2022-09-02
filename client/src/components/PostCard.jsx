import toast from "react-hot-toast";
import { usePosts } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">Do you want to delete? </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-600 px-3 py-2 text-sm text-white"
              onClick={() => {
                deletePost(_id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
            className="bg-red-600 hover:bg-red-700 text-sm px-2 py-1 rounded-sm"
          >
            Delete
          </button>
        </div>
        <p>{post.description}</p>
      </div>
      {post.image && <img src={post.image.url} className="w-full h-auto object-cover" />}
    </div>
  );
}
