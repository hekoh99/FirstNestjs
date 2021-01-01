import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
//partialtype을 상속하여 CreateMovieDto의 readonly가 필수가 아닌 형식으로 UpdateMovieDto가 만들어지게 된다.
