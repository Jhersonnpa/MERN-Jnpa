import { usePosts } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <Link
          className="bg-zinc-800 hover:bg-zinc-900 hover:cursor-pointer py-1 px-3 rounded-sm m-5 text-white"
          to="/new"
        >
          Create new post
        </Link>
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white">No hay tareas aún</h1>
      </div>
    );

  return (
    <div className="text-white flex flex-col justify-center items-center container m-auto w-full">
      <header className="flex justify-around items-center py-4 w-90">
        <h1 className="text-2xl text-gray-300 font-bold ">Posts {posts.length}</h1>
        <Link
          className="bg-zinc-800 hover:bg-zinc-900 hover:cursor-pointer py-1 px-3 rounded-sm m-5"
          to="/new"
        >
          Create new post
        </Link>
      </header>

      <div className="w-full grid grid-cols-3 gap-2 my-5">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
