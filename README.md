# Clamp Generator

This app is live in:

https://clamp-generator.netlify.app/

## Objective

<br>

This app was built to facilitate the use of the **CLAMP()** function in CSS for fluid typography and for better responsiveness in web development.

Its main application has been focused in E-Commerce web sites and experience has shown that applying the **CLAMP()** function inside a **CALC()** function is more resilient for projects with several developers, so it's been added as an optional shortcut.

Differently from other apps that help to generate the **CLAMP** function, it's easier to select different viewport widths breakpoints, the same way as it's easier to apply for projects that use different default rem values (the default value is 16px, but this can be adjusted).

## How to use

<br>

**Minimum Value**: The minimum value it's desired to be implemented on the minimum viewport width.

For example: It's desired to be displayed a minimum value of 16px for the font size of an element.

**Maximum Value**: The maximum value it's desired to be implemented on the maximum viewport width.

For example: It's desired to be displayed a maximum value of 32px for the font size of an element.

**Minimum Viewport Width**: The viewport width value in which the minimum value is going to be displayed.

**Maximum Viewport Width**: The viewport width value in which the maximum value is going to be displayed.

**Default Rem Value**: The default value for 1rem in the project - normally the default value is 16px.

<br>

## References:

<br>

This project was mainly based in the discussion and explanations from Adrian Bece's article in https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/. It's recommended to read the article for a deeper understanding of this topic.
