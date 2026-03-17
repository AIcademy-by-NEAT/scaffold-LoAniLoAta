import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface Question {
  id: string;
  text: string;
  category: string;
  options?: string[];
}

export default function Quiz() {
  const router = useRouter();
  const { person1, person2 } = router.query;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [person1Answers, setPerson1Answers] = useState<string[]>([]);
  const [person2Answers, setPerson2Answers] = useState<string[]>([]);
  const [currentPerson, setCurrentPerson] = useState<1 | 2>(1);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`);
        const data = await response.json();
        if (data.success) {
          setQuestions(data.data.questions);
          setLoading(false);
        }
      } catch (err) {
        setError('Failed to load questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-center mt-4 text-gray-700">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  const answers = currentPerson === 1 ? person1Answers : person2Answers;
  const setAnswers = currentPerson === 1 ? setPerson1Answers : setPerson2Answers;
  const currentPersonName = currentPerson === 1 ? person1 : person2;

  const handleAnswerClick = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (currentPerson === 1) {
        setCurrentPerson(2);
        setCurrentQuestion(0);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/compatibility`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          person1,
          person2,
          person1_answers: person1Answers,
          person2_answers: person2Answers,
        }),
      });

      const data = await response.json();
      if (data.success) {
        router.push({
          pathname: '/results',
          query: { result: JSON.stringify(data.data) },
        });
      }
    } catch (err) {
      setError('Failed to calculate compatibility');
    }
  };

  const question = questions[currentQuestion];
  const answerCount = answers.length;
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <Head>
        <title>Quiz - Team Vibe Checker</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-cyan-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">
                {currentPersonName}'s Answers
              </h2>
              <span className="text-sm text-gray-600">
                Q{currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">{question.text}</h3>

            {question.options ? (
              <div className="space-y-3">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerClick(option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition ${
                      answers[currentQuestion] === option
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={answers[currentQuestion] || ''}
                onChange={(e) => handleAnswerClick(e.target.value)}
                placeholder="Type your answer..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0 && currentPerson === 1}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition"
            >
              {currentPerson === 2 && currentQuestion === questions.length - 1
                ? 'Submit ✓'
                : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
