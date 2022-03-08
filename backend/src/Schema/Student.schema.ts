import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type StudentDocument = Student & Document;

@Schema()
export class Student {

    @Prop({ required: true })
    name : String;

    @Prop({ required: true })
    email : String;

    @Prop()
    phoneNumber : number;

    @Prop()
    address : String;


}

export const StudentSchema = SchemaFactory.createForClass(Student);