import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './Student/student.module';

@Module({
  imports: [StudentModule,
    MongooseModule.forRoot('mongodb+srv://salman:salman@cluster0.xeuk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    StudentModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
