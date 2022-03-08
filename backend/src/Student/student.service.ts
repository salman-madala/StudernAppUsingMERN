import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from 'src/Schema/Student.schema';
import { Model,Connection } from 'mongoose';
import { StudentDto } from './dto/Student.dto';

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private readonly studnetModel: Model<StudentDocument>){  }

    async create(studentdto:StudentDto):Promise<Student>{
        const newStudent =new this.studnetModel(studentdto)
        return newStudent.save(); 
    }

    async getAll():Promise<Student[]>{
        const allStuents =  await this.studnetModel.find();
        return allStuents;
    }

    async getStudentById(id:String):Promise<Student> {
        const student = await this.studnetModel.findById(id);
        return student;
    }

    async update(id:String,stu:StudentDto):Promise<Student>{
        const upateStudent = await this.studnetModel.findByIdAndUpdate(id,stu);
        return upateStudent;
    }

    async deleteStu(id:String):Promise<String> {
        await this.studnetModel.findByIdAndDelete(id);
        return "Student Deleted Succesfully";
    }

}
