import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`id not found ${id}`);
    }
    return movie;
  }

  remove(id: number) {
    this.getOne(id); // 해당 ID의 무비가 있는지 확인(없으면 getOne의 예외처리로 처리)
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(movieId: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(movieId);
    this.remove(movieId);
    this.movies.push({ ...movie, ...updateData });
  }
}
