import Image from "next/image";
import Movie from "./Movie"
import Head from 'next/head'

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  return <main>
          <Head>
        <meta property="og:title" content="YS MovieDB" key="title" />
      </Head>
    <h1>YS MovieDB 🍿</h1>
    <div className="grid gap-16 grid-cols-fluid">
    {res.results.map((movie) => (
      <Movie 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
        />
    ))}
    </div>
    <body>

    </body>
  </main>;
}
