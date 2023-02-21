"use client";

type ToggleProps = {
  deletePost: () => void;
  setToggle: (toggle: boolean) => void;
};

export default function Toggle({ deletePost, setToggle }: ToggleProps) {
  return (
    <div
      onClick={(e) => {
        setToggle(false);
      }}
      className="fixed bg-black/50 w-full h-full z-20 left-0 top-0"
    >
      <div className="absolute bg-white top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
        <h2 className="text-xl">Are you sure you want to delete this post?</h2>
        <h3 className="red-600 text-sm">
          Pressing the delete button with permenantly delete this post
        </h3>
        <button
          onClick={deletePost}
          className="text-sm rounded-md bg-red-600 text-white py-2 px-4"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}
