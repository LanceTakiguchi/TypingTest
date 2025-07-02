import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col">
          <div className="flex">
            <h1 className="text-4xl">Typing Test</h1>
          </div>
          <div id="prompt" className="flex text-xl">
            But whatever gain I had, I counted as loss for the sake of Christ. 
            {/* 8 Indeed, I count everything as loss because of cthe surpassing worth of dknowing Christ Jesus my Lord. For his sake I ehave suffered the loss of all things and count them as rubbish, in order that I may gain Christ 9 and be found in him, not having fa righteousness of my own that comes from the law, but gthat which comes through faith in Christ, the righteousness from God that depends on faith— 10 hthat I may know him and ithe power of his resurrection, and jmay share his sufferings, becoming like him in his death, 11 that by any means possible I may kattain the resurrection from the dead. */}
          </div>
          <div id="entry" className="flex">
            <input className="bg-gray-50 text-black"/>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div>
          <p><b>Author:</b> Lance Takiguchi</p>
        </div>
      </footer>
    </div>
  );
}
