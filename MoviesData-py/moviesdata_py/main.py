import tmdbsimple as tmdb
import os

tmdb.API_KEY = os.environ.get("API_KEY")


movie = tmdb.Movies(603)
response = movie.info()
print(movie.title)

