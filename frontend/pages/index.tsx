import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();
  const [person1, setPerson1] = useState('');
  const [person2, setPerson2] = useState('');

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (person1.trim() && person2.trim()) {
      router.push({
        pathname: '/quiz',
        query: { person1, person2 },
      });
    }
  };

  return (
    <>
      <Head>
        <title>Team Vibe Checker 🎭</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-cyan-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-center mb-2">✨ Team Vibe Checker</h1>
          <p className="text-center text-gray-600 mb-8">
            The scientifically accurate compatibility test (it's not)
          </p>

          <form onSubmit={handleStart} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 1 Name
              </label>
              <input
                type="text"
                value={person1}
                onChange={(e) => setPerson1(e.target.value)}
                placeholder="e.g., Alice"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Person 2 Name
              </label>
              <input
                type="text"
                value={person2}
                onChange={(e) => setPerson2(e.target.value)}
                placeholder="e.g., Bob"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={!person1.trim() || !person2.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚀 Start Quiz
            </button>
          </form>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Disclaimer:</strong> Results are 100% fake and randomly generated. Any resemblance to actual compatibility is purely coincidental.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
