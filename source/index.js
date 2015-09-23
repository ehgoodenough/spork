window.React = require("react")
window.Pixi = require("pixi.js")

window.Loop = require("<scripts>/utilities/Loop")
window.Input = require("<scripts>/utilities/Input")

window.WIDTH = 128
window.HEIGHT = 96
window.TILE = 8
window.TWIDTH = WIDTH / TILE
window.THEIGHT = HEIGHT / TILE
window.COLORS = {
    "brown1": "#EFE4B0",
    "brown2": "#B97A57",
    "green": "#22B14C",
    "blue": "#00A2E8",
    "gray1": "#C3C3C3",
    "gray2": "#7F7F7F",
    "white": "#FFFFFF",
    "black": "#111111",
}
window.TILES = {
    0: "#EFE4B0",
    1: "#B97A57",
    2: "#22B14C",
    3: "#00A2E8",
    4: "#C3C3C3",
    5: "#7F7F7F",
    6: "#FFFFFF",
    7: "#111111",
}
window.WORLD = {
    "tiles": {
        "1x1":{
            "position":{
                "tx":1,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":0
        },
        "2x1":{
            "position":{
                "tx":2,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":0
        },
        "3x1":{
            "position":{
                "tx":3,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":0
        },
        "4x1":{
            "position":{
                "tx":4,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":0
        },
        "5x1":{
            "position":{
                "tx":5,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":0
        },
        "6x1":{
            "position":{
                "tx":6,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":0
        },
        "7x1":{
            "position":{
                "tx":7,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":0
        },
        "7x2":{
            "position":{
                "tx":7,
                "ty":2
            },
            "color":"#B97A57",
            "chunk":0
        },
        "7x3":{
            "position":{
                "tx":7,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "7x4":{
            "position":{
                "tx":7,
                "ty":4
            },
            "color":"#B97A57",
            "chunk":0
        },
        "7x5":{
            "position":{
                "tx":7,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":0
        },
        "6x5":{
            "position":{
                "tx":6,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":0
        },
        "5x5":{
            "position":{
                "tx":5,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":0
        },
        "4x5":{
            "position":{
                "tx":4,
                "ty":5
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "3x5":{
            "position":{
                "tx":3,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":0
        },
        "2x5":{
            "position":{
                "tx":2,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":0
        },
        "1x5":{
            "position":{
                "tx":1,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":0
        },
        "1x4":{
            "position":{
                "tx":1,
                "ty":4
            },
            "color":"#B97A57",
            "chunk":0
        },
        "1x3":{
            "position":{
                "tx":1,
                "ty":3
            },
            "color":"#B97A57",
            "chunk":0
        },
        "1x2":{
            "position":{
                "tx":1,
                "ty":2
            },
            "color":"#B97A57",
            "chunk":0
        },
        "2x2":{
            "position":{
                "tx":2,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "2x3":{
            "position":{
                "tx":2,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "2x4":{
            "position":{
                "tx":2,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "3x4":{
            "position":{
                "tx":3,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "4x4":{
            "position":{
                "tx":4,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "5x4":{
            "position":{
                "tx":5,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "6x4":{
            "position":{
                "tx":6,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "6x3":{
            "position":{
                "tx":6,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "6x2":{
            "position":{
                "tx":6,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "5x2":{
            "position":{
                "tx":5,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "4x2":{
            "position":{
                "tx":4,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "3x2":{
            "position":{
                "tx":3,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "3x3":{
            "position":{
                "tx":3,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "4x3":{
            "position":{
                "tx":4,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "5x3":{
            "position":{
                "tx":5,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":0
        },
        "8x3":{
            "position":{
                "tx":8,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "8x1":{
            "position":{
                "tx":8,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":1
        },
        "8x2":{
            "position":{
                "tx":8,
                "ty":2
            },
            "color":"#B97A57",
            "chunk":1
        },
        "9x1":{
            "position":{
                "tx":9,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":1
        },
        "10x1":{
            "position":{
                "tx":10,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":1
        },
        "11x1":{
            "position":{
                "tx":11,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":1
        },
        "12x1":{
            "position":{
                "tx":12,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":1
        },
        "13x1":{
            "position":{
                "tx":13,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x1":{
            "position":{
                "tx":14,
                "ty":1
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x2":{
            "position":{
                "tx":14,
                "ty":2
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x3":{
            "position":{
                "tx":14,
                "ty":3
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x4":{
            "position":{
                "tx":14,
                "ty":4
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x5":{
            "position":{
                "tx":14,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x6":{
            "position":{
                "tx":14,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x7":{
            "position":{
                "tx":14,
                "ty":7
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x8":{
            "position":{
                "tx":14,
                "ty":8
            },
            "color":"#B97A57",
            "chunk":1
        },
        "14x9":{
            "position":{
                "tx":14,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":1
        },
        "13x9":{
            "position":{
                "tx":13,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":1
        },
        "12x9":{
            "position":{
                "tx":12,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":1
        },
        "11x9":{
            "position":{
                "tx":11,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":1
        },
        "10x9":{
            "position":{
                "tx":10,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":1
        },
        "9x9":{
            "position":{
                "tx":9,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":1
        },
        "8x9":{
            "position":{
                "tx":8,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":1
        },
        "8x8":{
            "position":{
                "tx":8,
                "ty":8
            },
            "color":"#B97A57",
            "chunk":1
        },
        "8x7":{
            "position":{
                "tx":8,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "8x6":{
            "position":{
                "tx":8,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":1
        },
        "8x5":{
            "position":{
                "tx":8,
                "ty":5
            },
            "color":"#B97A57",
            "chunk":1
        },
        "8x4":{
            "position":{
                "tx":8,
                "ty":4
            },
            "color":"#B97A57",
            "chunk":1
        },
        "9x8":{
            "position":{
                "tx":9,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "10x8":{
            "position":{
                "tx":10,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "11x8":{
            "position":{
                "tx":11,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "12x8":{
            "position":{
                "tx":12,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "13x8":{
            "position":{
                "tx":13,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "13x7":{
            "position":{
                "tx":13,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "13x6":{
            "position":{
                "tx":13,
                "ty":6
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "13x5":{
            "position":{
                "tx":13,
                "ty":5
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "13x4":{
            "position":{
                "tx":13,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "13x3":{
            "position":{
                "tx":13,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "13x2":{
            "position":{
                "tx":13,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "12x2":{
            "position":{
                "tx":12,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "11x2":{
            "position":{
                "tx":11,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "10x2":{
            "position":{
                "tx":10,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "9x2":{
            "position":{
                "tx":9,
                "ty":2
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "9x3":{
            "position":{
                "tx":9,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "9x4":{
            "position":{
                "tx":9,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "9x5":{
            "position":{
                "tx":9,
                "ty":5
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "9x6":{
            "position":{
                "tx":9,
                "ty":6
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "10x6":{
            "position":{
                "tx":10,
                "ty":6
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "10x7":{
            "position":{
                "tx":10,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "9x7":{
            "position":{
                "tx":9,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "11x7":{
            "position":{
                "tx":11,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "12x7":{
            "position":{
                "tx":12,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "12x6":{
            "position":{
                "tx":12,
                "ty":6
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "12x5":{
            "position":{
                "tx":12,
                "ty":5
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "12x4":{
            "position":{
                "tx":12,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "12x3":{
            "position":{
                "tx":12,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "11x3":{
            "position":{
                "tx":11,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "10x3":{
            "position":{
                "tx":10,
                "ty":3
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "10x4":{
            "position":{
                "tx":10,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "10x5":{
            "position":{
                "tx":10,
                "ty":5
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "11x5":{
            "position":{
                "tx":11,
                "ty":5
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "11x4":{
            "position":{
                "tx":11,
                "ty":4
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "11x6":{
            "position":{
                "tx":11,
                "ty":6
            },
            "color":"#EFE4B0",
            "chunk":1
        },
        "7x6":{
            "position":{
                "tx":7,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":2
        },
        "6x6":{
            "position":{
                "tx":6,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":2
        },
        "5x6":{
            "position":{
                "tx":5,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":2
        },
        "4x6":{
            "position":{
                "tx":4,
                "ty":6
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x6":{
            "position":{
                "tx":3,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":2
        },
        "2x6":{
            "position":{
                "tx":2,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x6":{
            "position":{
                "tx":1,
                "ty":6
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x7":{
            "position":{
                "tx":1,
                "ty":7
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x8":{
            "position":{
                "tx":1,
                "ty":8
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x9":{
            "position":{
                "tx":1,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x10":{
            "position":{
                "tx":1,
                "ty":10
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x11":{
            "position":{
                "tx":1,
                "ty":11
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x12":{
            "position":{
                "tx":1,
                "ty":12
            },
            "color":"#B97A57",
            "chunk":2
        },
        "1x13":{
            "position":{
                "tx":1,
                "ty":13
            },
            "color":"#B97A57",
            "chunk":2
        },
        "2x13":{
            "position":{
                "tx":2,
                "ty":13
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x13":{
            "position":{
                "tx":3,
                "ty":13
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "4x13":{
            "position":{
                "tx":4,
                "ty":13
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "5x13":{
            "position":{
                "tx":5,
                "ty":13
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x13":{
            "position":{
                "tx":6,
                "ty":13
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "7x13":{
            "position":{
                "tx":7,
                "ty":13
            },
            "color":"#B97A57",
            "chunk":2
        },
        "7x12":{
            "position":{
                "tx":7,
                "ty":12
            },
            "color":"#B97A57",
            "chunk":2
        },
        "7x11":{
            "position":{
                "tx":7,
                "ty":11
            },
            "color":"#B97A57",
            "chunk":2
        },
        "7x10":{
            "position":{
                "tx":7,
                "ty":10
            },
            "color":"#B97A57",
            "chunk":2
        },
        "7x9":{
            "position":{
                "tx":7,
                "ty":9
            },
            "color":"#B97A57",
            "chunk":2
        },
        "7x8":{
            "position":{
                "tx":7,
                "ty":8
            },
            "color":"#B97A57",
            "chunk":2
        },
        "7x7":{
            "position":{
                "tx":7,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x7":{
            "position":{
                "tx":6,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "5x7":{
            "position":{
                "tx":5,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "4x7":{
            "position":{
                "tx":4,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x7":{
            "position":{
                "tx":3,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "2x7":{
            "position":{
                "tx":2,
                "ty":7
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "2x8":{
            "position":{
                "tx":2,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "2x9":{
            "position":{
                "tx":2,
                "ty":9
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "2x10":{
            "position":{
                "tx":2,
                "ty":10
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "2x11":{
            "position":{
                "tx":2,
                "ty":11
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x11":{
            "position":{
                "tx":3,
                "ty":11
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "4x11":{
            "position":{
                "tx":4,
                "ty":11
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "5x11":{
            "position":{
                "tx":5,
                "ty":11
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x11":{
            "position":{
                "tx":6,
                "ty":11
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x10":{
            "position":{
                "tx":6,
                "ty":10
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x9":{
            "position":{
                "tx":6,
                "ty":9
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x8":{
            "position":{
                "tx":6,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "5x8":{
            "position":{
                "tx":5,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "4x8":{
            "position":{
                "tx":4,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x8":{
            "position":{
                "tx":3,
                "ty":8
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x9":{
            "position":{
                "tx":3,
                "ty":9
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x10":{
            "position":{
                "tx":3,
                "ty":10
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "4x10":{
            "position":{
                "tx":4,
                "ty":10
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "4x9":{
            "position":{
                "tx":4,
                "ty":9
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "5x9":{
            "position":{
                "tx":5,
                "ty":9
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "5x10":{
            "position":{
                "tx":5,
                "ty":10
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x12":{
            "position":{
                "tx":6,
                "ty":12
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "5x12":{
            "position":{
                "tx":5,
                "ty":12
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "4x12":{
            "position":{
                "tx":4,
                "ty":12
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "3x12":{
            "position":{
                "tx":3,
                "ty":12
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "2x12":{
            "position":{
                "tx":2,
                "ty":12
            },
            "color":"#EFE4B0",
            "chunk":2
        },
        "6x14":{
            "position":{
                "tx":6,
                "ty":14
            },
            "color":"#B97A57",
            "chunk":2
        },
        "5x14":{
            "position":{
                "tx":5,
                "ty":14
            },
            "color":"#B97A57",
            "chunk":2
        },
        "4x14":{
            "position":{
                "tx":4,
                "ty":14
            },
            "color":"#B97A57",
            "chunk":2
        },
        "3x14":{
            "position":{
                "tx":3,
                "ty":14
            },
            "color":"#B97A57",
            "chunk":2
        },
        "2x15":{
            "position":{
                "tx":2,
                "ty":15
            },
            "color":"#B97A57",
            "chunk":2
        }
    },
}

var HeroView = require("<scripts>/views/HeroView")
var WorldView = require("<scripts>/views/WorldView")
var WorldChunkView = require("<scripts>/views/WorldChunkView")
var FrameView = require("<scripts>/views/FrameView")
var EditorCursorView = require("<scripts>/views/EditorCursorView")
var CameraView = require("<scripts>/views/CameraView")

class Point {
    constructor(protopoint) {
        this.x = protopoint.x || protopoint.tx * TILE || 0
        this.y = protopoint.y || protopoint.ty * TILE || 0
    }
    get tx() {
        return Math.floor(this.x / TILE)
    }
    get ty() {
        return Math.floor(this.y / TILE)
    }
    set tx(tx) {
        this.x = tx * TILE
    }
    set ty(ty) {
        this.y = ty * TILE
    }
    get string() {
        return this.x + "x" + this.y
    }
    get tstring() {
        return this.tx + "x" + this.ty
    }
}

class Hero {
    constructor() {
        this.height = 8
        this.width = 8
        this.position = new Point({x: 14, y: 14})
    }
    get chunk() {
        var tile = game.world.tiles[this.position.tstring]
        return !!tile ? tile.chunk : undefined
    }
}

window.game = {
    "mode": "play",
    "world": WORLD,
    "hero": new Hero(),
    "editor": {
        "cursor": {
            "scale": 1,
            "position": {
                "tx": 0,
                "ty": 0,
            },
            "movement": {
                "x": 0,
                "y": 0,
            },
            "tile": 0,
            "chunk": 0,
        },
    },
}

var GameView = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio={WIDTH + "x" + HEIGHT}>
                <CameraView entity={game.hero}>
                    <WorldView world={game.world} hero={game.hero}/>
                    <HeroView entity={game.hero}/>
                    <EditorCursorView entity={game.editor.cursor}/>
                </CameraView>
            </FrameView>
        )
    },
    componentDidMount: function() {
        Loop(function(tick) {
            if(Input.isJustDown("<tab>")) {
                if(game.mode == "play") {
                    game.mode = "edit"
                    // todo: do not reposition the cursor if it is already on the screen
                    game.editor.cursor.position.tx = Math.round((game.hero.position.x - (game.hero.width / 2)) / TILE)
                    game.editor.cursor.position.ty = Math.round((game.hero.position.y - (game.hero.width / 2)) / TILE)
                } else if(game.mode == "edit") {
                    game.mode = "play"
                }
            }
            if(game.mode == "play") {
                if(Input.isDown("W")
                || Input.isDown("<up>")) {
                    game.hero.position.y -= 1
                } if(Input.isDown("S")
                || Input.isDown("<down>")) {
                    game.hero.position.y += 1
                } if(Input.isDown("A")
                || Input.isDown("<left>")) {
                    game.hero.position.x -= 1
                } if(Input.isDown("D")
                || Input.isDown("<right>")) {
                    game.hero.position.x += 1
                }
            } else if(game.mode == "edit") {
                var SPEED = 0.1
                if(Input.isJustDown("W")
                || Input.isJustDown("<up>")) {
                    game.editor.cursor.movement.y = -SPEED
                    game.editor.cursor.position.ty -= 1
                } else if(Input.isDown("W")
                || Input.isDown("<up>")) {
                    game.editor.cursor.movement.y += tick
                    if(game.editor.cursor.movement.y > SPEED) {
                        game.editor.cursor.movement.y -= SPEED
                        game.editor.cursor.position.ty -= 1
                    }
                } if(Input.isJustDown("S")
                || Input.isJustDown("<down>")) {
                    game.editor.cursor.movement.y = -SPEED
                    game.editor.cursor.position.ty += 1
                } else if(Input.isDown("S")
                || Input.isDown("<down>")) {
                    game.editor.cursor.movement.y += tick
                    if(game.editor.cursor.movement.y > SPEED) {
                        game.editor.cursor.movement.y -= SPEED
                        game.editor.cursor.position.ty += 1
                    }
                } if(Input.isJustDown("A")
                || Input.isJustDown("<left>")) {
                    game.editor.cursor.movement.x = -SPEED
                    game.editor.cursor.position.tx -= 1
                } else if(Input.isDown("A")
                || Input.isDown("<left>")) {
                    game.editor.cursor.movement.x += tick
                    if(game.editor.cursor.movement.x > SPEED) {
                        game.editor.cursor.movement.x -= SPEED
                        game.editor.cursor.position.tx -= 1
                    }
                } if(Input.isJustDown("D")
                || Input.isJustDown("<right>")) {
                    game.editor.cursor.movement.x = -SPEED
                    game.editor.cursor.position.tx += 1
                } else if(Input.isDown("D")
                || Input.isDown("<right>")) {
                    game.editor.cursor.movement.x += tick
                    if(game.editor.cursor.movement.x > SPEED) {
                        game.editor.cursor.movement.x -= SPEED
                        game.editor.cursor.position.tx += 1
                    }
                } if(Input.isDown("<space>")) {
                    var tx = game.editor.cursor.position.tx
                    var ty = game.editor.cursor.position.ty
                    for(var txi = tx; txi < tx + game.editor.cursor.scale; txi++) {
                        for(var tyi = ty; tyi < ty + game.editor.cursor.scale; tyi++) {
                            game.world.tiles[txi + "x" + tyi] = {
                                "position": {"tx": txi, "ty": tyi},
                                "color": TILES[game.editor.cursor.tile],
                                "chunk": game.editor.cursor.chunk
                            }
                        }
                    }
                } if(Input.isJustDown("=")) {
                    game.editor.cursor.tile++
                    if(game.editor.cursor.tile > Object.keys(TILES).length - 1) {
                        game.editor.cursor.tile = 0
                    }
                    console.log("Tile", game.editor.cursor.tile)
                } if(Input.isJustDown("-")) {
                    game.editor.cursor.tile--
                    if(game.editor.cursor.tile < 0) {
                        game.editor.cursor.tile = Object.keys(TILES).length - 1
                    }
                    console.log("Tile", game.editor.cursor.tile)
                } if(Input.isJustDown("[")) {
                    game.editor.cursor.chunk--
                    if(game.editor.cursor.chunk < 0) {
                        game.editor.cursor.chunk = 0
                    }
                    console.log("Chunk", game.editor.cursor.chunk)
                } if(Input.isJustDown("]")) {
                    game.editor.cursor.chunk++
                    console.log("Chunk", game.editor.cursor.chunk)
                }
            }
            this.forceUpdate()
        }.bind(this))
    }
})

React.render(<GameView/>, document.body)
