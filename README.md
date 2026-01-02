# Faculty Appreciation & Recommendation Portal

This repository contains a skeleton Next.js project configured with the App Router and Tailwind CSS. It is the starting point for building a public portal that celebrates the achievements and impact of a senior lecturer. The portal allows visitors to browse positive testimonials and submit their own notes of appreciation or letters of recommendation, with moderation and admin capabilities.

## Features

- **Next.js App Router**: Organized under the `app` directory with separate pages for Home, About, Appreciation Wall, Submit, and Admin.
- **Tailwind CSS**: Rapidly style the UI with a restrained, dark aesthetic suitable for a sci‑fi instrument panel vibe.
- **Supabase Integration**: Placeholder code for connecting to a Supabase database. Real database credentials should be stored in environment variables.
- **SQL Schema**: The `sql/schema.sql` file defines the PostgreSQL tables for appreciation entries, letters of recommendation, endorsement categories, moderation status, and admin users.

## Setup

1. **Install dependencies** (requires Node.js and npm):

   ```bash
   npm install
   ```

2. **Configure environment variables** by creating a `.env.local` file in the project root with your Supabase credentials:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Apply the database schema**: Use the SQL editor in your Supabase dashboard to run the commands in `sql/schema.sql` to set up the tables.

5. **Develop features**: Implement authentication, data fetching, submission logic, and moderation flows using Supabase and Next.js server actions.

## Directory Structure

- `app/`
  - `layout.tsx` – Root layout with site header and global styles.
  - `page.tsx` – Home page.
  - `about/page.tsx` – Profile of Dr. Karla B. Schallies.
  - `wall/page.tsx` – Placeholder for the Appreciation Wall.
  - `submit/page.tsx` – Form for submitting appreciation notes.
  - `admin/page.tsx` – Admin dashboard placeholder.
- `lib/`
  - `supabaseClient.ts` – Exports a Supabase client. Update environment variables to match your Supabase project.
- `sql/`
  - `schema.sql` – SQL commands to create the necessary tables.
- `globals.css` – Global Tailwind CSS styles.
- `tailwind.config.js`, `postcss.config.js` – Configuration files for Tailwind and PostCSS.

## Next Steps

This project provides a foundation to build upon. To realize the full functionality:

- Implement authentication using Supabase and protect routes accordingly.
- Fetch data from the database and display approved entries on the Appreciation Wall.
- Add forms for uploading letters of recommendation, including file uploads via Supabase Storage.
- Build the admin dashboard with moderation queue, category management, and export functionality.
- Refine the design to match your desired futuristic instrument‑panel aesthetic, perhaps by introducing animations or custom components.

Contributions and improvements are welcome. Enjoy building!