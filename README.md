# [Slimefun Handbook](https://handbook.orchidmc.me)

Ever needed a complex guide to every single Slimefun item? Well, then the Slimefun Handbook is for you! 

# Why create this?

Slimefun is something that I'm heavily invested in. I understand the struggle of creating an item/machine and then realising it doesn't do what I want it to do. The Handbook stops this from happening to anyone else ever again. Another reason why I made this is because of the lack of documentation on certain Addons. My goal with the Handbook is to put all the information into one small space allowing people to have access to a large amount of Slimefun data with only a click of a button.

# Contrubition 

Contribution is always welcome and needed to include actually *every* item to the handbook. To contribute, follow the instructions below.

All information shown on the website is writtin in JSON files and then served to API endpoints. All the JSON files are under `knowledge` and seperated into categories. For example, Zinc Dust would be under `knowledge/items/base/zinc_dust.json` (`knowledge/[item/multiblock]/[id as in Slimefun].json`). When writing one of these files, use other ones for reference and try to verify your spelling, the item ID, and it's usage.

Here's some other things to keep in mind:
- All data is to be written in British English.
- Don't open a pull request if you aren't certain, always verify first.
- Write clear commits and descriptions.
- You *should* check how it appears on the site by running `npm run dev` and navigating to it's page, but you don't have to.

Once you're finished, make sure you add your Github username to the `"contributors"` array at the bottom of the file.

# Running Requirements

In order to run Slimefun Handbook, you need to have cloned the git repository and had ran `npm i` before running. You can start the server with `npm run dev` for development or `npm run preview` for preview. 

On Windows you have to run it with `npm run dev-win`, but the repository information will not work properly.