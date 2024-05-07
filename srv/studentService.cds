using { student as st } from '../db/data-model';

service studentService  {
  entity student as projection on st.Student;
  entity Address as projection on st.Address;
  entity Dept as projection on st.Dept;
}