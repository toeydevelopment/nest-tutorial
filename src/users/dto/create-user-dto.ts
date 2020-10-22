import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    name: 'firstname',
    description: 'name of user',
    example: 'Anirut',
  })
  @IsString()
  @IsNotEmpty({
    message: 'สัสส่งมา',
  })
  firstname: string;
}
