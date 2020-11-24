exports.Instructor = require("./instructor");

//Creation of method on Model.
Instructor.create({ firstName: "Elie" })
    .then(newInst => {
        console.log(newInst);
    })
    .catch(err => {
        console.log("Error creating!");
    });

//Finding Multiple Records
Instructor.find({})
.then(instructors => {
        console.log(instructors);
    })
    .catch(err => {
        console.log("error!", err);
    });

//Finding Single Record
Instructor.findOne({ firstName: "Elie" })
.then(inst => {
        console.log(inst);
    })
    .catch(err => {
        console.log("error!", err);
    });

//Finding by id.
Instructor.findById(2)
.then(inst => {
        console.log(inst);
    })
    .catch(err => {
        console.log("error!", err);
    });

//Finding in a nested object.
const query = person.findOne({ "name.first": "Elie" });

query.select("name occupation");

query 
  .exec()
  .then(person => {
      console.log(person);
  })
  .catch(err => {
      console.log("ERROR!");
  });

//Update Multiple Records.
Instructor.update({}, { isHilarious: false })
  .then(insts => {
      console.log(insts);
  })
  .catch(err => {
      console.log("error!", err);
  });

//Update a single record.
Instructor.findOneAndUpdate({ firstName: "Elie" }, { firstName: "Bob" })
  .then(inst => {
    console.log(inst);
  })
  .catch(err => {
    console.log("error!", err);
  });

//Update A Single Record and Update by Id.
Instructor.findByIdAndUpdate(1, { firstName: "Bob" })
  .then(inst => {
    console.log(inst);
  })
  .catch(err => {
    console.log("error!", err);
  });

//Remove Multiple Records.
Instructor.remove({ isHilarious: false })
  .then(insts => {
    console.log(insts);
  })
  .catch(err => {
    console.log("error!", err);
  });

// Find and Remove.
Instructor.findOneAndRemove({ firstName: "Elie" })
  .then(inst => {
    console.log(inst);
  })
  .catch(err => {
    console.log("error!", err);
  });
    
//Find By Id and remove.
Instructor.findByIdAndRemove(1)
  .then(inst => {
    console.log(inst);
  })
  .catch(err => {
    console.log("error!", err);
  });




