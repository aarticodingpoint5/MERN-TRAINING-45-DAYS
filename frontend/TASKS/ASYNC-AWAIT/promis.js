// Student Record Processing System

const students = {
  student1: {
    name: "Alice",
    marks: {
      math: 85,
      science: 90,
      english: 78
    }
  },

  student2: {
    name: "Bob",
    marks: {
      math: 75,
      science: 80,
      english: 88
    }
  },

  student3: {
    name: "Charlie",
    marks: {
      math: 95,
      science: 89,
      english: 92
    }
  },

  // Bonus: Missing marks to demonstrate error handling
  student4: {
    name: "David"
  }
};

// Function to process one student
async function processStudent(student) {
  console.log(`Processing student: ${student.name}...`);

  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      if (!student.marks) {
        reject(`Error: Marks not found for ${student.name}`);
        return;
      }

      let total = 0;
      let count = 0;

      for (let subject in student.marks) {
        total += student.marks[subject];
        count++;
      }

      const average = total / count;

      resolve({
        name: student.name,
        average: average.toFixed(2)
      });
    }, delay);
  });
}

// Function to process all students
async function processAllStudents() {
  const results = [];

  for (let key in students) {
    try {
      const result = await processStudent(students[key]);
      results.push(result);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("\n===== Final Results =====");

  for (let student of results) {
    const status = student.average >= 80 ? "Pass" : "Fail";

    console.log(
      `${student.name} has an average of ${student.average} - ${status}`
    );
  }
}

// Run the program
processAllStudents();