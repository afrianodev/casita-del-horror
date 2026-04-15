CREATE TABLE IF NOT EXISTS public.users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.movies (
  id BIGSERIAL PRIMARY KEY,
  external_id TEXT UNIQUE,
  title TEXT NOT NULL,
  overview TEXT,
  poster_path TEXT,
  release_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.user_favorites (
  user_id BIGINT NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  movie_id BIGINT NOT NULL REFERENCES public.movies(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, movie_id)
);
