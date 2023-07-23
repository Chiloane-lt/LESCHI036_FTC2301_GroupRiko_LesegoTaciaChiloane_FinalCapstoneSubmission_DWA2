import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <section className="bg-gradient-to-r from-rich-black to-dark-green w-screen h-screen overflow-y-hidden flex flex-col justify-center items-center text-mint-cream">
      <div className="w-[80%] aspect-square
      bg-[url('https://cdn.pixabay.com/photo/2020/12/21/19/05/window-5850628_960_720.png')] bg-cover border-solid border-2 border-mint-cream ">
      </div>
      <h1 className="text-[3rem] px-4">Oh no!</h1>
      <p className="px-4">It looks like you are alone here. The page you are looking for may have been moved or deleted.</p>
      <button className="border-solid border-2 border-mint-cream">Go to Home</button>
    </section>
  )
}