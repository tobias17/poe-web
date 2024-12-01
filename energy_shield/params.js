
add_section(
    name="chestpiece",
    color="#f779f7",
    icon="path/to/icon.png",
    x=550,
    y=200,
    rows=[
        { "type":"text", "color":"#696969", "value":"Quality: ${quality}%" },
        { "type":"slider", "id":"quality", "min":0, "max":20, "default":20, "color": "#5bfee0" },
        { "type":"compute", "id":"quality_f", "func": (p) => (1.0 + p/100.0) },

        { "type":"text", "color":"#696969", "value":"Base Energy Shield: ${base_value}" },
        { "type":"slider", "id":"base_value", "min":12, "max":47, "default":36, "color":"#00ff00" },

        { "type":"text", "color":"#7171da", "value":"+${flat_add} to Maximum Energy Shield" },
        { "type":"slider", "id":"flat_add", "min":16, "max":30, "default":21, "color":"#fe3521" },

        { "type":"text", "color":"#7171da", "value":"${perc_incr}% Increased Energy Shield" },
        { "type":"slider", "id":"perc_incr", "min":20, "max":109, "default":54, "color":"#f2fc24" },
        { "type":"compute", "id":"perc_incr_f", "func": (p) => (1.0 + p/100.0) },
        
        { "type":"gap" },
        
        { "type":"text", "color":"#696969", "value":"(${base_value} + ${flat_add}) * ${perc_incr_f} * ${quality_f}" },
        { "type":"text", "color":"#696969", "value":"Item Energy Shield: ${chestpiece}" },
    ]
);

