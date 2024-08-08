# Multi-Step Form

You can run the project with `bun dev`, but I assume any other package manager would also be fine except for tests, which require `bun test`

## Used Technologies

- Bun: Comes with with a fast package manager and a lot of functionalities out of the box, including a test runner compatible with React Testing Library. Wouldn't use it in production yet but it is more than enough for a demo.

- Tailwind and DaisyUI: Choose Tailwind because I saw it in Bueno's stack. DaisyUI is one of the UI libraries built on top of Tailwind.

- Framer Motion: Seems to be the default choice for animations. A lot of resources on it.

- React Hook Form: Validations are easy (even easier with Zod) and I don't have to write boilerplate for context (or a state library) since it provides a form context.
