// app/error.js
"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col text-center p-4 m-5 bg-slate-400 rounded-lg gap-4">
      <h1 className="text-2xl font-bold">Error Message!</h1>
      <h2>Oh dear, you had a bit of an error, that is unfortunate!</h2>
      <p>
        The error is: <span className="text-red-700">{error.message}</span>
      </p>
      <button
        onClick={reset}
        className="bg-pink-300 rounded-2xl p-4 mx-24 font-semibold"
      >
        Try again
      </button>
    </div>
  );
}
