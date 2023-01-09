import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './modules/node.shema';

@Injectable()

export class AppService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(){
    const testNote = {note:"privet",tag:"test",user:"egor"}
    const createdCat = new this.noteModel(testNote);
    createdCat.save()
    return " ";
  }
  webhookUpdate(params): string {
    return '1000-7?';
  }

}
