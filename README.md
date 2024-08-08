# Multi-Step Form

You can run the project with `bun dev`, but I assume any other package manager would also be fine except for tests, which require `bun test`

## Used Technologies

- Bun: Comes with with a fast package manager and a lot of functionalities out of the box, including a test runner compatible with React Testing Library. Wouldn't use it in production yet but it is more than enough for a demo.

- Tailwind and DaisyUI: Choose Tailwind because I saw it in Bueno's stack. DaisyUI is one of the UI libraries built on top of Tailwind.

- Framer Motion: Seems to be the default choice for animations. A lot of resources on it.

- React Hook Form: Validations are easy (even easier with Zod) and I don't have to write boilerplate for context (or a state library) since it provides a form context.

## What to improve

- I didn't want to spend too much time on getting the validation rules exactly correct. If I wanted to take this to prod, I would probably define the schema a lot more in detail. Validation logic is already there, just more rules are needed. Possibly a library like libphonenumber could be used.

- Useful tests with React Testing Library or maybe Playwright/Cypress could be added to test the whole process.

- State of the steps could be saved on the URL path, if a routing library was available

- Investigage a bug where isValid from hook-form not being rendered correctly and the workaround only works when the fiels are followed with a watch()
