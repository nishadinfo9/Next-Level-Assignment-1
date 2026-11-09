function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === 0) {
    return 0;
  }
  if (multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    if (input === true) {
      return "Active";
    }
    return "Inactive";
  }
}

function formatCoordinate([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(course: Course[], minStudents: number): Course[] {
  return course.filter(
    (c) => c.isPublished === true && c.students >= minStudents,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age >= 18) {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
}
