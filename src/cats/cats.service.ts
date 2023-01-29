import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat, CatDocument } from './entities/cat.entity';

@Injectable()
export class CatsService {
  //inject the mongoose model
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  create(createCatInput: CreateCatInput) {
    return 'This action adds a new cat';
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find(); 
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatInput: UpdateCatInput) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
