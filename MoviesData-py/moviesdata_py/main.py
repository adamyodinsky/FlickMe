import tmdbsimple as tmdb
import os

tmdb.API_KEY = os.environ.get("API_KEY")

print(tmdb.API_KEY)