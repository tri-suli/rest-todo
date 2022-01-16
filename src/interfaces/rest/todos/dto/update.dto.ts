import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateTodoDto } from './create.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'User email',
    required: true,
  })
  owner: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    example: '2022-01-15T15:40:57.904Z',
    description: 'The todo complete date.',
  })
  done_at: string;
}
