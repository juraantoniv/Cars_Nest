import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @Length(2, 20)
  @Transform(({ value }) => value.trim())
  model: string;

  @IsString()
  @Length(2, 20)
  @Transform(({ value }) => value.trim())
  brand: string;

  @IsString()
  @Length(2, 20)
  @Transform(({ value }) => value.trim())
  brand2: string;

  @IsString()
  currency_type: string;

  @IsString()
  price: string;

  @IsString()
  description: string;
}
