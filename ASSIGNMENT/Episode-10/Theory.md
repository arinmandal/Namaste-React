# Episode 10 - Jo dikhta hai, Vo bikta hai
## Assignment
## Theory 📝

## Explore all the ways of writting CSS?

- [SCSS](https://sass-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Material UI](https://mui.com/material-ui/)
- [Bootstrap](https://getbootstrap.com/)
- [Ant Design](https://ant.design/)
## How do we configure tailwind?
- Install Tailwind CSS
Install `tailwindcss` via npm, and create your `tailwind.config.js` file.
```
npm install -D tailwindcss
npx tailwindcss init
```

- Configure your template paths
Add the paths to all of your template files in your `tailwind.config.js` file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
- Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
- [Other ways to install tailwind](https://tailwindcss.com/docs/installation)

## In tailwind.config.js, what does all the keys mean(content, theme, extend, plugins)? 
### [Content](https://tailwindcss.com/docs/content-configuration#configuring-source-paths)

This is where you specify the paths to your HTML, JavaScript, or other template files that contain Tailwind class names. Tailwind scans these files to generate the corresponding CSS for your project1.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
}
```
- Configuring source path
Tailwind CSS works by scanning all of your HTML, JavaScript components, and any other template files for class names, then generating all of the corresponding CSS for those styles.

In order for Tailwind to generate all of the CSS you need, it needs to know about every single file in your project that contains any Tailwind class names.

Configure the paths to all of your content files in the content section of your configuration file:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  // ...
}
```
Paths are configured as glob patterns, making it easy to match all of the content files in your project without a ton of configuration:

- Use * to match anything except slashes and hidden files
- Use ** to match zero or more directories
- Use comma separate values between {} to match against a list of options
Tailwind uses the fast-glob library under-the-hood — check out their documentation for other supported pattern features.

Paths are relative to your project root, not your tailwind.config.js file, so if your tailwind.config.js file is in a custom location, you should still write your paths relative to the root of your project.

## [Theme](https://tailwindcss.com/docs/theme)
This is where you customize the default Tailwind design system, such as colors, fonts, spacing, border radius, etc. You can override or extend any of the default values.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```
### [extend](https://tailwindcss.com/docs/configuration)
This is a special key under the `theme` key that lets you add new values to the existing theme without replacing them. For example, you can add new colors, font sizes, or breakpoints without losing the default ones.

## [plugins](https://tailwindcss.com/docs/configuration)

This is where you register any Tailwind plugins that add extra features or utilities to the framework. For example, you can use plugins to add animations, gradients, typography, or forms.


## Why do we have .postcssrc file?
The .postcssrc file is used to inform the bundler that we are using tailwindcss. PostCSS is a CSS parser, framework or API that allows us to use plugins which can do various tasks. We use PostCSS because tailwind is installed as a PostCSS plugin. While installing tailwind, install postcss as its peer dependency. To enable the tailwindcss plugin, create a '.postcssrc' file in project root.