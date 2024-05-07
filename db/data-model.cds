namespace student;

entity Student {
    key id     : Integer;
        name   : String;
        age    : Integer;
        branch : String;
        city   : String;
        address:Composition of many Address on address.stud=$self;
        dept:Association to Dept
       
}
entity Address{
    key id:Integer;
        street:String;
        city:String;
        stud:Association to Student
}
entity Dept{
  key id:Integer;
      subject:String
      
}