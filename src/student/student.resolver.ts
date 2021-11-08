import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { StudentCreateDTO } from './dto/create-student.input';
import { StudentUpdateDTO } from './dto/update-student.input';
import { Student } from './entities/student.entity';
import { StudentService } from './student.service';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Query(() => [Student], { name: 'getAllStudents' })
  findAll() {
    return this.studentService.findAll();
  }

  @Mutation(() => Student, { name: 'createStudent' })
  create(@Args('studentInput') student: StudentCreateDTO) {
    return this.studentService.create(student);
  }
  @Mutation(() => Student, { name: 'updateStudent' })
  update(@Args('id') id: string,@Args('student') student: StudentUpdateDTO) {
    return this.studentService.update(id, student);
  }
  @Query(() => Student)
  findOne(@Args('id') id: string) {
    return this.studentService.findOne(id);
  }
  @Mutation(() => Student, { name: 'removeStudent' })
  removeStudent(@Args('id') id: string) {
    return this.studentService.remove(id);
  }
}
