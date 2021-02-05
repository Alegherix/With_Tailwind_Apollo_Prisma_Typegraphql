import CreateUser from '../src/components/CreateUser';
import Hello from '../src/components/Hello';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-200 p-6">
      <h1 className="text-2xl">Hello</h1>
      <Hello />
      <CreateUser />
    </div>
  );
}
