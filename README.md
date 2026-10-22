# Ahmed Elsharkawy — Personal Portfolio

A responsive, dark portfolio website built with HTML5, CSS3, and vanilla JavaScript. It uses a charcoal palette with restrained lime accents, motion effects, and your supplied portrait photo.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or open the folder in VS Code and run it with the Live Server extension.
3. Internet is only needed for the optional Google Fonts; the rest of the site is local.

## Replace your portrait
Replace `assets/images/ahmed-portrait.jpeg` with your chosen image. Keep the same filename, or update `portfolioConfig.personal.portrait` and the `<img>` path in `index.html` if you use a different filename.

## Add skills
Edit the `skills` array in `js/script.js`. Each entry uses:
```js
{ icon: "</>", category: "Programming", description: "Your confirmed skills here." }
```
Only add skills you want to claim publicly.

## Add projects
Add objects to the `projects` array in `js/script.js`. Example:
```js
{
  title: "Your project",
  category: "AI / ML",
  description: "A short and accurate project description.",
  technologies: ["Python", "Pandas"],
  image: "assets/images/projects/your-project.jpg",
  github: "https://github.com/your-user/your-repository",
  demo: "https://example.com"
}
```
Place project screenshots inside `assets/images/projects/`. GitHub and demo links are optional; absent links will not render buttons.

## Update contact details
Edit the `personal` and `social` values near the top of `js/script.js`. The WhatsApp value must be international digits only: Egypt country code `20` followed by the number without its leading zero.

## Deploy
This is a static website and can be deployed to GitHub Pages, Netlify, or any static web host. Upload the contents of this folder (not the ZIP itself) to the hosting provider.

## Notes
- Skills are intentionally editable placeholders; no unconfirmed proficiency levels are shown.
- The projects section displays a “coming soon” message until real projects are added.
- No contact form is included, so the website does not imply a form is sending messages.
- The profile image in this package is the portrait supplied for this request.
