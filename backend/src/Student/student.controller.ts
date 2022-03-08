import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentDto } from './dto/Student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private _stuSer:StudentService){    }

    @Post('create')
    async Create(@Body() studentDto: StudentDto){
        return  await this._stuSer.create(studentDto)
    }

    @Get('getall')
    async getAllStudents(){
        return  await this._stuSer.getAll()
    }

    @Get(':id')
    async getStudent(@Param('id') id: string){
        return  await this._stuSer.getStudentById(id)
    }


    @Put("update/:id")
    async updateStudent(@Param('id') id,@Body() studentDto:StudentDto){
        return await this._stuSer.update(id,studentDto)
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string){
        return  await this._stuSer.deleteStu(id)
    }

}
