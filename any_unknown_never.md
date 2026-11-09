# How Do any, unknown, and never Work in TypeScript?

## Introduction

In TypeScript, we have different types to work with different kinds of values. Three interesting types are any, unknown, and never. At first, they look similar, but they work differently. Let's understand them with some simple examples.

any, unknown, and never

First, let's talk about any. Think of any as a box where you can put anything. TypeScript won't stop you from using it in any way.

let value: any = "Hello";
value.toFixed(); // No error

Here, TypeScript doesn't check whether toFixed() is correct. This can cause problems later.

Now, let's look at unknown. It also accepts any value, but there is one big difference. Before using the value, you must check its type.

let value: unknown = "Nishad";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

See? 
We first check if the value is a string. Then we use it.

Finally, we have never. It means something that never happens. For example, a function that always throws an error.

function error(): never {
  throw new Error("Internal server error");
}

Why Is unknown Better Than any?

Both accept any value, but unknown gives us more safety. It asks to check the value before using it. On the other hand, any allows to do almost anything without checking.

# Conclusion

So, use any only when really needed, prefer unknown when you don't know the type, and use never when something should never happen. These small things can helps to write safer TypeScript code.