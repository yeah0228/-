create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz default now()
);

create table if not exists interviews (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text,
  interviewee text,
  locations text,
  cover_url text,
  category_id uuid references categories(id) on delete set null,
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists interview_questions (
  id uuid primary key default gen_random_uuid(),
  interview_id uuid not null references interviews(id) on delete cascade,
  sort_order integer not null default 0,
  category text,
  question text not null,
  answer text not null
);

create table if not exists highlights (
  id uuid primary key default gen_random_uuid(),
  interview_id uuid not null references interviews(id) on delete cascade,
  sort_order integer not null default 0,
  title text not null,
  text text not null
);

alter table categories enable row level security;
alter table interviews enable row level security;
alter table interview_questions enable row level security;
alter table highlights enable row level security;

create policy "published interviews are public"
on interviews for select
using (status = 'published');

create policy "questions of published interviews are public"
on interview_questions for select
using (exists (
  select 1 from interviews
  where interviews.id = interview_questions.interview_id
  and interviews.status = 'published'
));

create policy "highlights of published interviews are public"
on highlights for select
using (exists (
  select 1 from interviews
  where interviews.id = highlights.interview_id
  and interviews.status = 'published'
));