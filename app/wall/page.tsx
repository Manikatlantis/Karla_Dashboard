import { supabase } from '@/lib/supabaseClient';

export default async function WallPage() {
  // Placeholder: Fetch approved entries from Supabase when connected
  // const { data, error } = await supabase
  //   .from('appreciation_entries')
  //   .select('*')
  //   .eq('status_id', approvedStatusId);
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Appreciation Wall</h2>
      <p>
        A gallery of approved testimonials will appear here once connected to your Supabase instance.
      </p>
    </section>
  );
}