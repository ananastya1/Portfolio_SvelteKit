import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-bcb86966.js';

const arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAABc1JHQgCuzhzpAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAZiS0dEAAAAAAAA+UO7fwAAAAd0SU1FB+cGDAsUEUpI08QAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMzowNjoxMiAxNDoyMDoxNpsUrc4AAAMJSURBVHhe7ZrBTiJBEIb1YjQRCVfPvoMnjRcFIz6DPpvEdzCeTBSjiTG+BCYeVdThsNNrWfUvS+9iDzOAPfB/Bys1dFdX1/8TSHCBEEIIIYQQQgghhBBCCCGEEELITOO+WFpKv9jYQG4vk5ICHYfqqi9sbqbpr08eH52TXP4iF3Z2bDkpCdBNdex0fF0lE90/DSAP7u+xwI/6+tubZGm6vW31SaSoTltb0O17XR8ezADPz8MWDm7odiWjEeIDuqhOr6/Z9Hx5MQOcnIQ2INIIcQEdsgqPqOtbLfusqFb1we1taCPioBF2d60fMiV07hC+2w3phdjXWahWrRy+NMAINzehQoi6/v1dMhph8uic8wovugp/Ce+DBTRCXGCuExPeBxtohJ8Fc8RcQ/NHzC28Dwo4JwXv7kIHI9IIxcDcRhW+r5NQQHgfLVirFTPC3p6VI0PQORUVvlazcuMHB2iD19dZG6QRvkfnErHwPnJ8mq6t5TPCx4dkNEIJhfeRdmiE0cG9RxW+P2fhB4X3kfZohDC4Z17hJZM5W7n4QIM0wiC4F+4ZmgdiaYT3QcN6gXY7dFHEQSPU61autOg95kh4H1xg3oygfc+x8D56oUpl1o2gfeYVvt2WbKaE99ELFjVCo2HlokH7qtcpfEb0wuU3gvZRVPhKxcrNHxhA2Yyg51L4sYGB6ICurkKDRJy2EfQcCj8xMKBiRjg4sHJjA3Up/JTAwPIZIUkkS9Nm08rlRutA+CQJnY+IviWj8AXAAIsZYX/fymVG9zUaFD4SMNB8RsBHw+GhlRuKrms2sS9UH5HCTwkMOJ8Rej154tzxsZX7g6xK06MjXcd3fPRg4CrA5WVIKD/qvqcnxNB6P1L4SIAAeY0waqTwkSISObe6qv8pc3EREnL0qHUlo/ARowKtrOg7tdXKLvD/o9Y5PZVM6toxpCyocPh17uxM479f8vR5r6fx/Fyexvij07hZtDg3iOTOLS9rtr6u+aLR6WhMEn2dEEIIIYQQQgghhBBCCCGEEEIIKSELC78BEsTuu8nSA7oAAAAASUVORK5CYII=";
const avatar = "/Portfolio_SvelteKit/_app/immutable/assets/avatar.0c9e779e.png";
const github_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADv0lEQVR4nO2ZW4iNURTHP4YMcs+4X3In8eASxgMpcosXhPJCcifhlTzILZdGKY/y4M0tdx5JeDAyDDMkxqUwjfu4HD8t1qnjtM/37X3Ot8+ZNP/adTrft9Ze/73XXpf9BUEj/lMAHYC5wB7gLFAJ1ALfdMjvB/pM3pkDtA8aAoAWwGLgIvATd4jMeWCR6AoKQKAlsBF4QXyoATYAxfkiMR2oxh+qgGm+3egg+cNR2fm4SXQBbpN/3ARK4iLRV7e7UHgkNuRKorOG0UKjGuiaLYniArlTmJu5h2jgMA0PZdmE2DBsUbcbDWwFnuZgnGT7zcBIrQ72Rbw/1SXZReWJngY3FEJfgSvAemAiMBBorWOQ/rcKOAV8BNYCRWm6Rloc/mgX04wdBWP2BZpbrVbIu0A3i/nX2yQ9m7Ij3kT1rw1dLeZ/HrorWgDaYIhHIqWWNiwMUyJVrA3meySy2tKGc5kUdHAoxbd7JHLE0oYfQFuTAmmKbPBeDqRHIkOB75a2zDYp2GspvM8XiSSA45a27DYJSwtqg7GBZwDzLG05bRKWRGPjl83yQGSwJZFKk/BbC8G3vkkIgF6WRN4E6dCbjijIO00CzwCGp3lBrY5fafbUm4STkWKS1jv9gI5Ad/2dHN6JpEJcWVODjCZaC/ZILqxJoE4f3gDuAI/V3V7p7+RYEHgGUBbiFZ9TjkGtSfihPryqpfQ6idNasY7QlvfPquSBSFOdqzcwTCIlMFMr5516FyZ4YBK+oA93aBm+HzgBXAPKdTfe6TlZ4nk36vVMPAEqgFvAGeCQ9kJ7M5YpUnZgj0+yUx5ILDcc6DBsMymZghu+AEvjcDVtH3Y5khBMNilrZRmC03Fdz1JRFgRa62KI27qiPmNflHJO0iF9yjJJQCGKXwPHgJWyUkB/oF2K7k7Sx8h1KLBJygttd7PF2bAVkpXNFPJKtQcXg23cToztkqK7RP+TZ3FgRlTYk0hhQrk+HwN8iCBRGjJHaQxkqsSWKL+V0JsJM1NKiAvqGsmPOM+Ay8Cs0An+yq/Ikchqq9sN4K6zXzpAdzbTHFG4Y12BAxOAhEFJIq78oUHBFQlgnOtEkkVNqNOLtZ6Rfhquf0AWRA5mM1FzrbtcUOSo3wWXXC4A0ydr6+LLWei3RUXOX4CBPsD9AhK5Jx1jTiRSJmwjlWYBiFyO/Vu8+nRZhmgWN5EEcMDrRQcwSvsDX0TKgfF+rDf30WvTvqPUZKHnZYq86FqTj+umTBlaWtCTyfLFUX62ys7IJSc1ohGBP/wGjidhuRxqAwcAAAAASUVORK5CYII=";
const tg_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKElEQVR4nO2a34tNURTHD+HOGGGIOxSFPHhSkj9AlIkRHjQxnsSTh+vH5EGKN3MpKUkevXmQuDQX4YEnEZIMd4YXFHORB7+Zj1a2nE77/Nj77nPPofnWrds9Z3/X+t6999prrXM8bxT/KYBpwDrgCHAJGADeAV/VR74/VtcOq3vbvTwAaAG2AFeBn5jjB3AZ6BEuLwMBrcAe4BXuIFy7hbtZItYAz0gPQ8DqtJfRMZqH08BE1yJmAfdoPu4AHa5EzFfTnRUGxYdGRcwEnpI9hqxnRkWmLJZTGO5ahWjgFPnDCZsQm1d0miypLDd3ks0fv8SAXvKPnUkOPZdpR1J8Bz4Z3P8yclZUAtgsjABVYAMwGRgHXDQYvzlKiGSxaeM9cBRYqLG/y4CnGlVPSFqdFh4A24G2iD+ybMAnvk7VkaxPwXkxVgFWAGNCl8JfH84Z8q/VkUhl5woSMA4As+OcD/jw0NBOWUciJWijuAl0A+NDHJ2rKsJuzbWxhpFLUNEZsU0OP6p0ZnHMv70V+CAzH3J9joXtAR3RW4sTdi8wPUZAB3BejemLuG+5hZA3OiLpdCTBFcl3ZClECVCcPap7IjgYc+82CyFfbIRIBFoZ57ziKgYi0L4EY0xCb6SQesygz8CiBA5tBIZ943oTijcNvYJh280us3JdkjZggWYvnAmkIKUkItT4mqvNbpLn/MEj4CxwQ5MV7DAQ0WbZ4KukfSDeSipC2V5maaesI5NerCs8ByYZCJEzxgZdOrJ2x0mjpBtLEgqRbNgUUsNMCSOUM8IlxNghYEKMkGsW3P1xB1gauB+VwgCvLTg3ZVXqyoG7P5hQqk6mKV4AhahZ9lRrP+1+7lKfvT4LjlKkiCa2g0bU2SMd92+GY2uJO47yfIL8YlUiET4xJ8kfjhuJ8G18Wc95we3YDR4hZgbwJGsF/C7iilYiAuFxMGMR8xoSEUjR5flEFsup6ESET0whg4ehrU5FBAR1przUasYhtgExLapKlK64KwhXKas3IAoq0axalgAypl8669ah1TWkoSy9WNUNqagXaOq+l2rq6rcL6p6u0HpiFN6/j19y2btcBwDRQQAAAABJRU5ErkJggg==";
const email_icon = "/Portfolio_SvelteKit/_app/immutable/assets/email-icon.9d024ab8.png";
const css$3 = {
  code: "body.svelte-1lue80c.svelte-1lue80c{margin:0;padding:0;background-color:#4c631d}h1.svelte-1lue80c.svelte-1lue80c{text-align:center;font-size:50px;margin:0;letter-spacing:5px}h2.svelte-1lue80c.svelte-1lue80c{font-weight:lighter}div.svelte-1lue80c.svelte-1lue80c{font-family:Montserrat, sans-serif;background-color:#4c631d;color:white;margin:0}#arrow-top.svelte-1lue80c.svelte-1lue80c{text-align:center;margin:40px auto;padding:0;background-color:#4c631d}#photo.svelte-1lue80c.svelte-1lue80c{text-align:center;padding:20px}.profile-pic.svelte-1lue80c.svelte-1lue80c{display:flex;justify-content:center;align-items:center;width:350px;height:350px;overflow:hidden;margin:30px auto}.profile-pic.svelte-1lue80c img.svelte-1lue80c{width:100%;height:auto}#gh-link.svelte-1lue80c img.svelte-1lue80c,#tg-link.svelte-1lue80c img.svelte-1lue80c,#email.svelte-1lue80c img.svelte-1lue80c{height:50px;width:50px}ul.svelte-1lue80c.svelte-1lue80c{list-style-type:none;padding:0;display:flex;justify-content:center}li.svelte-1lue80c.svelte-1lue80c{margin:0 10px}a.svelte-1lue80c.svelte-1lue80c{color:white;text-decoration:none}a.svelte-1lue80c.svelte-1lue80c:hover{color:lightgray}",
  map: null
};
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<body class="svelte-1lue80c"><div class="svelte-1lue80c"><div class="profile-pic svelte-1lue80c"><img${add_attribute("src", avatar, 0)} alt="Avatar" class="svelte-1lue80c"></div> <div id="photo" class="svelte-1lue80c"><h1 class="svelte-1lue80c" data-svelte-h="svelte-1pr4vr2">Anastasia Barabanova</h1> <h2 class="svelte-1lue80c" data-svelte-h="svelte-im3rtm">Innopolis University. Software Developer</h2> <ul class="svelte-1lue80c"><li id="gh-link" class="svelte-1lue80c"><a href="https://github.com/ananastya1" class="svelte-1lue80c"><img${add_attribute("src", github_icon, 0)} alt="Github Icon" class="svelte-1lue80c"></a></li> <li id="tg-link" class="svelte-1lue80c"><a href="https://t.me/@a_n_a_s_t_a_s_i_a10" class="svelte-1lue80c"><img${add_attribute("src", tg_icon, 0)} alt="Telegram Icon" class="svelte-1lue80c"></a></li> <li id="email" class="svelte-1lue80c"><a href="mailto:nastya10_tv@mail.ru" class="svelte-1lue80c"><img${add_attribute("src", email_icon, 0)} alt="Email Icon" class="svelte-1lue80c"></a></li></ul></div> <div id="arrow-top" class="svelte-1lue80c"><a href="#about-me" class="svelte-1lue80c"><img${add_attribute("src", arrow, 0)} alt="Arrow Icon"></a></div></div> </body>`;
});
const myphoto = "/Portfolio_SvelteKit/_app/immutable/assets/myphoto.22acaa66.png";
const css$2 = {
  code: "body.svelte-19cekz4.svelte-19cekz4{margin:0;padding:0;background-color:#4c631d}h1.svelte-19cekz4.svelte-19cekz4{text-align:center;font-size:50px;margin:0;letter-spacing:5px}section.svelte-19cekz4.svelte-19cekz4{font-family:Montserrat, sans-serif;background-color:#4c631d;color:white;margin:0}#arrow-about.svelte-19cekz4.svelte-19cekz4{text-align:center;margin:40px auto;padding:0;background-color:#4c631d}#about-p.svelte-19cekz4.svelte-19cekz4{text-align:left;font-size:20px;margin:50px;padding:10px 10%;line-height:2}#about-me.svelte-19cekz4.svelte-19cekz4{text-align:center}#about-me-h.svelte-19cekz4.svelte-19cekz4{font-weight:lighter;letter-spacing:3px}.content.svelte-19cekz4.svelte-19cekz4{display:flex}.left-side.svelte-19cekz4.svelte-19cekz4{width:50%;padding:10px}.right-side.svelte-19cekz4.svelte-19cekz4{width:40%;padding:30px}.right-side.svelte-19cekz4 img.svelte-19cekz4{width:450px;height:550px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<body class="svelte-19cekz4"><section id="about-me" class="svelte-19cekz4"><div class="content svelte-19cekz4"><div class="left-side svelte-19cekz4" data-svelte-h="svelte-5lqlq1"><h1 id="about-me-h" class="svelte-19cekz4">—About me—</h1> <p id="about-p" class="svelte-19cekz4">Hi there! I am Anastasia Barabanova, a 20 year old software developer at the Innopolis
					University. During the learning process, I received basic knowledge for work in the field
					of IT, also participated in the development of several projects. I am interested in the
					development of web applications. I am looking for an internship in the field of web
					development, where I can apply my knowledge and gain new experience.</p></div> <div class="right-side svelte-19cekz4"><img${add_attribute("src", myphoto, 0)} alt="Me" class="svelte-19cekz4"></div></div></section> <div id="arrow-about" class="svelte-19cekz4"><a href="#skills"><img${add_attribute("src", arrow, 0)} alt="Arrow Icon"></a></div> </body>`;
});
const python_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKElEQVR4nO2ayWsUQRSH6xB1QCEBo5P4J6gXB5OcvYgR9eAGSo7uiZ7EBbx4Vg8injWKBxGXkxvGg3p0FzeMF3OYuGQ0ikYF88lzXpMm6empmt4mMR80pLuqXv1+mZqpV1VtzDRTGKAAHAQuA6+AQWBEL/n7NXAFOAR0mHoDWAM8xJ1nwLp6MDAD6PUJew+cADYDC4E8kNMrr882AceBoq/deWBmlkbOqZBhoNtFDNAAbAU+a4wLyaqtLGS1ChAhSyLEWQwMaay18aq0E3BdO+/R+5XAgF6djrF2aKwbiQkO6byknTfrvRjweOcYq1nblRITHNL5P3z3NRsJipelkU4xoNeKqPFSI+6OMzdii208kzZTxogtmRqhPOvuBO75Zt5I2BqpgGi4q/NNg62JBcAjYiaiET+SnLZWCzYHeKkN3gDrgUaTAp5KE1zWCGwA+rXaC9EaFuyYVnwOzE1SuIsRD9Gk2oSjJgigCfgB/AGWmpSxMSIAbcCoap04WjSlFm6ZDLA1IgB9Wn2LGY9vgbTLpIz+wAjDlvVl7SOcDiqUZafQloTYKsIOuIwGoEPrPwkqlGWqkE9CbMgnsR/4pX13WrZr0fqDQYU/tTDnKGY5cBP4RDQOO/QpewDCSCxGdFsnCl9lONWwosyFGXEaWsAyrf8b2AvMNynB2NAqBhU+1cJ2y2DynxT2JSHW8sv+OOzntzs0ylj9b1o/1QxAkA0P7fuUCZkQ+4wF3iA3GQDcDpsQvRRl1GYuycoI0K4av1dMaCURs00aszBCedtIMl/hSLU03qvYr6lzU9ZGKI+WjcBb7VY0zq7WqNVlZ91CRNzcr7qwGrfU3Q7c8e0oZmmkpFq2WS91bXE1YuoVEvpETNr8d0ZsmXRGqHCOMhmNDAQdP2RppKR9z4tqRJYAej+UmOAQQdf8R28O7SacowB7NNbVxARbHIZ+iXgYWtBTYWFVvCrtRZz1LVl7HI+nZwG7ta1wJlm11VMZ/wsDH4CTQBewSJek3gsDLfqsS+t89LXrjT31iDDManmF44G0NXX8Us0l3dUv+l6qKeqzi1qnkLXeaUyC/AWaYtfl3xvwIgAAAABJRU5ErkJggg==";
const js_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO2aOUsDQRiGB8/KA/EAMXiArYj4A7QQFDuPRhslgmJlIwhapdFKxEYLsbEyCh74AwQbbSz8B8ELL4gkpPB6ZGXEZdhkV2WTWZ2nnNn35Xv3Y4YZdoUwGAzfAqgCtoEk+pGUtVV6CWI9qDtRL0F07IRKwkuQQCBMEM0QpiOaIUxHNEOYjmiGMB3RDGE6ohnCdEQzhOnID/B419kBeuQVuwCoBXqB3e94+3qxcvF+BUZdagnL57QOsuhajPjQzOsc5A0IKXMTwAYwBeTLsTrgQOcgN8p4pyJdBSaBR6/euQpyqYx3/NY7V0GegVJlbg5IBS2IRdhhvgaIAPdBCnILNKWpoQSYAeJBCGJxZy30DLU0A2dBCPK5Fe8BbWnqqQBiQQhi5xDoctCN5zLIyy+8I4quIRtBUnLrXFHGY4pvscNiHwS2HDzjirbI7yD7QKPUWSfXBVngAzCi+NbbdFHrtCvHy4FTxfdI0Vb7HaTP1fDLd9im63fo1hiwDExbC1yZH/A7yNVnR1w884ATm+5aPTRm0BY6dMyXNXIBtLqEWHLQnQMtLrWUpFlDvu1aT8CaPPyVy7cYAoaAYxfdOtAtjyf5QBnQDszKl0Q2g2Qd8Z8+hm7xRz5PV8owCfQjAWx6+mHAYDAIO++la5GGhuSgzAAAAABJRU5ErkJggg==";
const bd_icon = "data:image/png;base64,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";
const git_icon = "data:image/png;base64,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";
const stars3_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAYCAYAAAAGcjT5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB7ZmBdYIwEIaPvg7QEegEukEZwRHcQDfoCB1BO0HbCRxBNoBOABtcLyagTZO+QNI0xvvf+x9PuNwncDkiArBYqQgRG2H4JzE/Yz4lXuNZa4gs5mfOV9U7KPosYr7sHuRDdnytegdVEEnMH/liW2XH12bvoANEEvO/r31QdpE8+GievdFmMfPP3cOwr4I/li+/MCQsabMkP5AX5BW5tIxvye/kT3ItPhdF0YKHmG/kA+V91OKGjpI+n4I3qg12GEZH8gu4nxTzzfxO5VoZxqzVsaT5hQruQFZsSLV61dvE/JEvusEHuSfXrt0IZdcRFp3nCWTXSYdPAUsMN3uHyl+Co5g/8huUN2uWxFg8d6K0+BcHfdXM+ZLMH/n5jkf/i9xgmBlw6/xJedCzOKLycf5FbnxOjvk/+E75MFBxReWjfCZPlfMzn/nO/K1D7DZl/p1lXOhfVFPFfKnaIbaF8ArGtxXYnNkQbAYxf8zlcoNrbUxSfFuBlTBdIU+whOnKjd/Te6R+2EGPoAfyM3mHF2sd9a6qT5V/bwEsYLrmjAmZKzf+qTOIG0ubDVmsh4ZHV0X797R9VTe4hWvio/ml4wHlLwbhveF4B4HE/BN/h7JjdL/wG5R/2eyvho+yFeoXtjLECdCbFuu9OGZ+5nwFaGyJDfGiXR7VmFAnyPwb5bNYLFY6+gLlddHd9NppIgAAAABJRU5ErkJggg==";
const stars4_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAYCAYAAAAGcjT5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgB7ZmBcYMwDEVFrwN0hHSCsEEZISOwQbJBR+gISSdoOwEjhA1MJ4ANVLk2l5SziQ0uUVP9u38cIPnFd7IMBEAk4iJEVNpwJQn/hvk0cIknlbCwhH/jfFu9vRZfRcJnwdeukvMH1durgIUkfDZ8fSyS8werp1cFC0n4LPjq7LxKxkf36llsFQmfDb90XCsu5WeOAVd0yMkP5DV5Q1558hvyO/mTXOvzLMsamCHhs+QDjfs4iOs72mU+BW/RtMEW0+hIfoHwSQmfJ7+1Y20cOaW9N8rPbHALpmJTqhlWvU/CZ8PX3eiD3JHr0G6Iputp6873BKbrnfgUkGO61dNXfg6BEj4bvkJTLJOkc/HUCXPfzblSU36k8Nnwfy8f509SYZoVIPzr8qPGicrD6ZNUcyYnfHb8oPFwSlGi2ZNjFbznC//P8HcBsbsx/p0nL/UbTayEz4NfB8Q2Yzd9BTZlNSRbQcJnww8psHqQ80O+AltBvFJOcAXxEn5afkffsbr+Am2BD+Rn8h7PnrXst7LOx7/3ANYQryk5KccSflr+d2fShUWHLVk/j/VbZ0HXD3R8tQXWQAwf3R/9KjRvDNoHx/0WEkn4LPh7NB2rHeErNH8ZHYL5aFrhcGKFI06D3gaxsx9OhX/jfAtQvoEd8bpdHm1OqgkK/5/yRSKRiI++AAA4puVUC3UoAAAAAElFTkSuQmCC";
const css$1 = {
  code: "body.svelte-c4ope4.svelte-c4ope4{margin:0;padding:0;background-color:#4c631d}h1.svelte-c4ope4.svelte-c4ope4{text-align:center;font-size:50px;margin:0;letter-spacing:5px}section.svelte-c4ope4.svelte-c4ope4{font-family:Montserrat, sans-serif;background-color:#4c631d;color:white;margin:0}#arrow-skills.svelte-c4ope4.svelte-c4ope4{text-align:center;margin:40px auto;padding:0;background-color:#4c631d}#skills.svelte-c4ope4 li.svelte-c4ope4{display:flex;flex-direction:column;align-items:center}#skills.svelte-c4ope4 .app-icon.svelte-c4ope4{width:100px;height:100px}#skills.svelte-c4ope4 .rating-icon.svelte-c4ope4{width:152px;height:24px}#skills.svelte-c4ope4 span.svelte-c4ope4{font-size:30px;margin:10px 0}#skills-list.svelte-c4ope4 li.svelte-c4ope4{margin:5%}ul.svelte-c4ope4.svelte-c4ope4{list-style-type:none;padding:0;display:flex;justify-content:center}li.svelte-c4ope4.svelte-c4ope4{margin:0 10px}a.svelte-c4ope4.svelte-c4ope4{color:white;text-decoration:none}a.svelte-c4ope4.svelte-c4ope4:hover{color:lightgray}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-c4ope4"><section id="skills" class="svelte-c4ope4"><h1 id="skills-h" class="svelte-c4ope4" data-svelte-h="svelte-4zwbqd">—Skills—</h1> <ul id="skills-list" class="svelte-c4ope4"><li class="svelte-c4ope4"><img class="app-icon svelte-c4ope4"${add_attribute("src", python_icon, 0)} alt="Python Icon"> <span class="svelte-c4ope4" data-svelte-h="svelte-1x883d4">Python</span> <img class="rating-icon svelte-c4ope4"${add_attribute("src", stars4_5, 0)} alt="Rating Icon"></li> <li class="svelte-c4ope4"><img class="app-icon svelte-c4ope4"${add_attribute("src", js_icon, 0)} alt="JS Icon"> <span class="svelte-c4ope4" data-svelte-h="svelte-a4515h">JavaScript</span> <img class="rating-icon svelte-c4ope4"${add_attribute("src", stars3_5, 0)} alt="Rating Icon"></li> <li class="svelte-c4ope4"><img class="app-icon svelte-c4ope4"${add_attribute("src", bd_icon, 0)} alt="SQL Icon"> <span class="svelte-c4ope4" data-svelte-h="svelte-atzmnu">SQL</span> <img class="rating-icon svelte-c4ope4"${add_attribute("src", stars3_5, 0)} alt="Rating Icon"></li> <li class="svelte-c4ope4"><img class="app-icon svelte-c4ope4"${add_attribute("src", git_icon, 0)} alt="Git Icon"> <span class="svelte-c4ope4" data-svelte-h="svelte-1cxczku">Git</span> <img class="rating-icon svelte-c4ope4"${add_attribute("src", stars4_5, 0)} alt="Rating Icon"></li></ul></section> <div id="arrow-skills" class="svelte-c4ope4"><a href="#projects" class="svelte-c4ope4"><img${add_attribute("src", arrow, 0)} alt="Arrow Icon"></a></div> </body>`;
});
const film_project = "/Portfolio_SvelteKit/_app/immutable/assets/film-project.47cf778c.png";
const tree_project = "/Portfolio_SvelteKit/_app/immutable/assets/tree-project.04424890.png";
const css = {
  code: "body.svelte-3v432g.svelte-3v432g{margin:0;padding:0;background-color:#4c631d}h1.svelte-3v432g.svelte-3v432g{text-align:center;font-size:50px;margin:0;letter-spacing:5px}section.svelte-3v432g.svelte-3v432g{font-family:Montserrat, sans-serif;background-color:#4c631d;color:white;margin:0}.name-project.svelte-3v432g.svelte-3v432g{font-weight:300;text-align:center;font-size:28px}.description-project.svelte-3v432g.svelte-3v432g{font-size:20px;margin:10px;padding:0}#projects.svelte-3v432g .project-container.svelte-3v432g{display:flex;flex-wrap:wrap;justify-content:space-between;padding:0 100px}#projects.svelte-3v432g article.svelte-3v432g{flex:1 1 45%;margin:10px}#projects.svelte-3v432g .project-img-film.svelte-3v432g{display:block;margin:auto;width:500px;height:300px}#projects.svelte-3v432g .project-img-tree.svelte-3v432g{display:block;margin:auto;width:300px;height:300px}a.svelte-3v432g.svelte-3v432g{color:white;text-decoration:none}a.svelte-3v432g.svelte-3v432g:hover{color:lightgray}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-3v432g"><section id="projects" class="svelte-3v432g"><h1 id="projects-h" class="svelte-3v432g" data-svelte-h="svelte-1au4iut">—Projects—</h1> <div class="project-container svelte-3v432g"><article class="svelte-3v432g"><img class="project-img-film svelte-3v432g"${add_attribute("src", film_project, 0)} alt="Film project"> <h2 class="name-project svelte-3v432g" data-svelte-h="svelte-1iwxd5g"><a href="https://github.com/ananastya1/Streaming-service" class="svelte-3v432g">Application to show and filter list of films</a></h2> <p class="description-project svelte-3v432g" data-svelte-h="svelte-182bqmr">This is a training project with which I learned how to work with Docker, Git, GitHub
					Actions, PostgreSQL. I wrote frontend part of the project, deployed the application.</p></article> <article class="svelte-3v432g"><img class="project-img-tree svelte-3v432g"${add_attribute("src", tree_project, 0)} alt="Student icon"> <h2 class="name-project svelte-3v432g" data-svelte-h="svelte-8j4rjt"><a href="https://github.com/InnoSWP/syntax-tree-visualization" class="svelte-3v432g">Syntax tree visualizator</a></h2> <p class="description-project svelte-3v432g" data-svelte-h="svelte-qijqwd">Syntax Tree Visualizer provides interactive environment for exploration of abstract syntax
					tree and syntax array. It is written with TypeScript, Node.js, Yarn. My part of the
					project is frontend.</p></article></div></section> </body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-sjsqw_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-sjsqw_END -->`, ""} ${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-970c0e94.js.map