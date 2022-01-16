import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'User email',
    required: true,
  })
  owner: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'My Todo',
    description: 'The title of todo',
    required: true,
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'This is my first todo',
    description: 'The description of todo',
    required: true,
  })
  description: string;
}
