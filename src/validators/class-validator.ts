import {
  IsOptional,
  ValidateNested,
  IsString,
  IsUUID,
} from 'class-validator'

class UserAddress {
  @IsString()
    line1: string

  @IsString()
    line2: string
}

export class User {
  @IsUUID()
    id: string

  @IsString()
    name: string

  @IsOptional()
  @ValidateNested()
    address: UserAddress
}
