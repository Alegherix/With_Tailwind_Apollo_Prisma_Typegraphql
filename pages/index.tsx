import Hello from '../src/components/Hello';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-200">
      <p className="text-2xl">Hello</p>
      <Hello />
    </div>
  );
}
