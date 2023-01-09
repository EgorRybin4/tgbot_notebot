import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Note, NoteSchema } from './modules/node.shema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/notebot'),MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
