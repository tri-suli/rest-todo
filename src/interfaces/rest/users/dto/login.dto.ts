import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'User email',
    required: true,
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'secret',
    description: 'User password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
