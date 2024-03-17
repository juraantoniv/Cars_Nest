import { Transform } from 'class-transformer';
import { IsOptional, IsString, Length } from 'class-validator';

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
  currency_type: string;

  @IsString()
  price: string;

  @IsString()
  description: string;
}
