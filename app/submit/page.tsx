'use client';

import { useState } from 'react';
// import { supabase } from '@/lib/supabaseClient';

export default function SubmitPage() {
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate with supabase to insert appreciation entry
    // Example:
    // await supabase.from('appreciation_entries').insert({
    //   content: note,
    //   display_name: 'Anonymous',
    //   status_id: 1,
    //   visibility: 'public'
    // });
    setSubmitted(true);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Share Your Appreciation</h2>
      {submitted ? (
        <p className="text-green-500">Thank you for your submission! It will be reviewed by the administrator.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="note" className="block text-sm font-medium mb-1">
              Your message
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-700"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded text-white">
            Submit
          </button>
        </form>
      )}
      <p className="text-sm text-neutral-400">
        Note: Submissions are subject to moderation and will be reviewed before being publicly displayed.
      </p>
    </section>
  );
}