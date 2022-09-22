import { useEffect, useState } from "react";
import Seo from "./Seo";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ response }) {
  // const fetch = async () => {
  //   console.log(response);
  // };
  // fetch();
  const [movies, setMovies] = useState(response);
  const router = useRouter();
  const onClick = (id, title, image) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title: title,
          image: `https://image.tmdb.org/t/p/w500/${image}`,
        },
      },
      `/movies/${id}`
    );
  };
  return (
    <div className="container">
      <Seo />
      {movies.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => {
            onClick(movie.id, movie.title, movie.poster_path);
          }}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link
            key={movie.id}
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.title,
                image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              },
            }}
            as={`/movies/${movie.id}`}
          >
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  let response = {};
  await axios.get("http://localhost:3000/api/movies").then((res) => {
    response = res.data.results;
  });

  return {
    props: {
      response,
    },
  };
}
