import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="bg-sky-300 text-xl m-1">
        <p>Hello,world!!!</p>
      </div>
      <div className="bg-green-300 text-xl m-1">
        <p>foo, bar</p>
      </div>
      <div className="bg-red-300 text-xl m-1">
        <p>Goodby</p>
      </div>
    </main>
  );
}
