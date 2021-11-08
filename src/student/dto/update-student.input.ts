import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class StudentUpdateDTO {
    @Field()
    id: string
    @Field()
    name: string
    @Field()
    gender: string
    @Field()
    address: string
    @Field()
    mobileNumber: string
    @Field()
    dateOfBirth: string
    @Field()
    age: string
}