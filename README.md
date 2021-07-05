# Triavia
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
![Azure Static Web Apps CI/CD](https://github.com/FBoucher/triavia/workflows/Azure%20Static%20Web%20Apps%20CI/CD/badge.svg?branch=dev)

## The **trivia** game for streamer

> Yes, it's spelled wrong on purpose ;p

This is a game to play with online players while streaming. The goal is to have multiple kinds of game. A lot of this project is done while streaming and you can see all those streams on [BehindMyCloud](https://behindmycloud.com/projects/#triavia) blog.  

## Brainstorm session & Data Diagram

We started by a big brainstorm with the Cloudies and ended up with these notes.

![Whiteboard Session][WhiteboardSession]

From there we thought about some data diagram, the kind of information and interaction we wanted.

![Data Diagram][DataDiagram]

### Tech & Architecture

Once the first draft of all that was fetched out it was now easier to think about what kind of technology would help us accomplish this.
It's still in motion more into the [Discussions tab](https://github.com/FBoucher/triavia/discussions) but here some that were selected:

- [Azure static webapp](https://azure.microsoft.com/services/app-service/static/?WT.mc_id=dotnet-0000-frbouche)
- [Azure Function](https://azure.microsoft.com/services/functions/?WT.mc_id=dotnet-0000-frbouche)
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)


Here what it looks like automatically deployed on Azure on the 2021-01-29

![Look_on_2021-01-29][Look_on_2021-01-29]

[WhiteboardSession]: medias/WhiteBoard.svg
[DataDiagram]: medias/triavia-data-diagram.png
[Look_on_2021-01-29]: medias/Look_on_2021-01-29.png

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://cloud5mins.com"><img src="https://avatars3.githubusercontent.com/u/2404846?v=4" width="100px;" alt=""/><br /><sub><b>Frank Boucher</b></sub></a><br /><a href="#ideas-fboucher" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/FBoucher/triavia/commits?author=fboucher" title="Code">💻</a> <a href="#video-fboucher" title="Videos">📹</a></td>
    <td align="center"><a href="http://www.jasonhand.com"><img src="https://avatars0.githubusercontent.com/u/1173344?v=4" width="100px;" alt=""/><br /><sub><b>Jason Hand</b></sub></a><br /><a href="#ideas-jasonhand" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/FBoucher/triavia/commits?author=jasonhand" title="Code">💻</a> <a href="#video-jasonhand" title="Videos">📹</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
