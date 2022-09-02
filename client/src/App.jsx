import { HomePage, PostForm, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full bg-zinc-900 min-h-screen m-auto">
      <PostProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster/>
      </PostProvider>
    </div>
  );
}

export default App;
