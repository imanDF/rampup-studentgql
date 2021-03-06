import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { getConnection, Repository } from 'typeorm';
import { resourceLimits } from 'worker_threads';
import { StudentCreateDTO } from './dto/create-student.input';
import { StudentUpdateDTO } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async findOne(id: string) {
    return this.studentRepository.findOne(id);
  }

  async create(student: StudentCreateDTO): Promise<Student> {
    let stud = this.studentRepository.create(student);
    return this.studentRepository.save(stud);
  }

  async saveList(students: StudentCreateDTO[]): Promise<Student[]> {
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Student)
        .values(students)
        .execute();
      return result.identifiers as Student[];
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, student: StudentUpdateDTO) {
    let stud = this.studentRepository.create(student);
    stud.id = id;
    return this.studentRepository.save(stud);
  }
  async remove(id: string) {
    let stud = this.findOne(id);
    if (stud) {
      let ret = await this.studentRepository.delete(id);
      if (ret.affected === 1) {
        return stud;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }
}
