import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface Result {
  person1: string;
  person2: string;
  compatible: boolean;
  percentage: number;
  reason: string;
  metrics: {
    synergyOscillation: number;
    quantumAlignment: number;
    teaPreferenceHarmonization: number;
    workStyleCoherence: number;
  };
}

export default function Results() {
  const router = useRouter();
  const { result } = router.query;
  const [data, setData] = useState<Result | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    if (result) {
      try {
        setData(JSON.parse(result as string));
      } catch (err) {
        console.error('Failed to parse result');
      }
    }
  }, [result]);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  const bgColor = data.compatible ? 'from-green-500 to-emerald-500' : 'from-red-500 to-pink-500';
  const verdict = data.compatible ? '✅ YES - COMPATIBLE!' : '❌ NO - INCOMPATIBLE!';

  return (
    <>
      <Head>
        <title>Results - Team Vibe Checker</title>
      </Head>
      <div className={`min-h-screen bg-gradient-to-br ${bgColor} flex items-center justify-center p-4`}>
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-8 text-center">
              <h1 className="text-4xl font-bold mb-2">{verdict}</h1>
              <p className="text-xl">
                {data.person1} & {data.person2}
              </p>
            </div>

            {/* Main Result */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-4">
                  {data.percentage.toFixed(1)}%
                </div>
                <p className="text-xl text-gray-700 italic mb-6">"{data.reason}"</p>
              </div>

              {/* Metrics */}
              <button
                onClick={() => setShowMetrics(!showMetrics)}
                className="w-full py-3 bg-purple-100 text-purple-700 rounded-lg font-semibold mb-6 hover:bg-purple-200 transition"
              >
                {showMetrics ? '📊 Hide Metrics' : '📊 Show Fake Metrics'}
              </button>

              {showMetrics && (
                <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">Synergy Oscillation</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {data.metrics.synergyOscillation.toFixed(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Quantum Alignment</p>
                    <p className="text-2xl font-bold text-cyan-600">
                      {data.metrics.quantumAlignment.toFixed(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tea Preference Harmonization</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {data.metrics.teaPreferenceHarmonization.toFixed(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Work Style Coherence</p>
                    <p className="text-2xl font-bold text-green-600">
                      {data.metrics.workStyleCoherence.toFixed(1)}
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <button
                  onClick={() => router.push('/')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition font-semibold"
                >
                  🔄 Test Another Pair
                </button>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>🎭 This is a parody.</strong> Results are completely random. Click the button above to run again with the same names - you'll likely get a different result!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
