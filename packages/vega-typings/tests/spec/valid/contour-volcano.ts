import { Spec } from 'vega';

// https://vega.github.io/editor/#/examples/vega/bar-chart
export const spec: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 960,
  "height": 673,
  "autosize": "none",

  "data": [
    {
      "name": "contours",
      "transform": [
        {
          "type": "contour",
          "values": {"signal": "volcano.values"},
          "size": [
            {"signal": "volcano.width"},
            {"signal": "volcano.height"}
          ],
          "smooth": {"signal": "smooth"},
          "thresholds": {"signal": "sequence(90, 195, 5)"}
        }
      ]
    }
  ],

  "projections": [
    {
      "name": "projection",
      "type": "identity",
      "scale": {"signal": "width / volcano.width"}
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "linear",
      "domain": [90, 190],
      "range": "heatmap"
    }
  ],

  "marks": [
    {
      "type": "path",
      "from": {"data": "contours"},
      "encode": {
        "enter": {
          "stroke": {"value": "#777"},
          "strokeWidth": {"value": 1},
          "fill": {"scale": "color", "field": "value"}
        }
      },
      "transform": [
        {
          "type": "geopath",
          "field": "datum",
          "projection": "projection"
        }
      ]
    }
  ],

  "signals": [
    {
      "name": "volcano",
      "value": {
        "width": 87,
        "height": 61,
        "values": [
          103,104,104,105,105,106,106,106,107,107,106,106,105,105,104,104,104,104,105,107,107,106,105,105,107,108,109,110,110,110,110,110,110,109,109,109,109,109,109,108,107,107,107,107,106,106,105,104,104,104,104,104,104,104,103,103,103,103,102,102,101,101,100,100,100,100,100,99,98,97,97,96,96,96,96,96,96,96,95,95,95,94,94,94,94,94,94,
          104,104,105,105,106,106,107,107,107,107,107,107,107,106,106,106,106,106,106,108,108,108,106,106,108,109,110,110,112,112,113,112,111,110,110,110,110,109,109,109,108,107,107,107,107,106,106,105,104,104,104,104,104,104,104,103,103,103,103,102,102,101,101,100,100,100,100,99,99,98,97,97,96,96,96,96,96,96,96,95,95,95,94,94,94,94,94,
          104,105,105,106,106,107,107,108,108,108,108,108,108,108,108,108,108,108,108,108,110,110,110,110,110,110,110,111,113,115,116,115,113,112,110,110,110,110,110,110,109,108,108,108,108,107,106,105,105,105,105,105,105,104,104,104,104,103,103,103,102,102,102,101,100,100,100,99,99,98,97,97,96,96,96,96,96,96,96,96,95,95,94,94,94,94,94,
          105,105,106,106,107,107,108,108,109,109,109,109,109,110,110,110,110,110,110,110,111,112,115,115,115,115,115,116,116,117,119,118,117,116,114,113,112,110,110,110,110,110,110,109,109,108,107,106,106,106,106,106,105,105,105,104,104,104,103,103,103,102,102,102,101,100,100,99,99,98,97,97,96,96,96,96,96,96,96,96,95,95,94,94,94,94,94,
          105,106,106,107,107,108,108,109,109,110,110,110,110,111,110,110,110,110,111,114,115,116,121,121,121,121,121,122,123,124,124,123,121,119,118,117,115,114,112,111,110,110,110,110,110,110,109,109,108,109,107,107,106,106,105,105,104,104,104,104,103,103,102,102,102,101,100,100,99,99,98,97,96,96,96,96,96,96,96,96,95,95,94,94,94,94,94,
          106,106,107,107,107,108,109,109,110,110,111,111,112,113,112,111,111,112,115,118,118,119,126,128,128,127,128,128,129,130,129,128,127,125,122,120,118,117,115,114,112,110,110,110,110,110,111,110,110,110,109,109,108,107,106,105,105,105,104,104,104,103,103,102,102,102,101,100,99,99,98,97,96,96,96,96,96,96,96,96,95,95,94,94,94,94,94,
          106,107,107,108,108,108,109,110,110,111,112,113,114,115,114,115,116,116,119,123,125,130,133,134,134,134,134,135,135,136,135,134,132,130,128,124,121,119,118,116,114,112,111,111,111,112,112,111,110,110,110,109,108,108,107,108,107,106,105,104,104,104,103,103,103,102,101,100,99,99,98,97,96,96,96,96,96,96,96,96,95,95,95,94,94,94,94,
          107,107,108,108,109,109,110,110,112,113,114,115,116,117,117,120,120,121,123,129,134,136,138,139,139,139,140,142,142,141,141,140,137,134,131,127,124,122,120,118,117,115,113,114,113,114,114,113,112,111,110,110,109,108,107,106,105,105,105,104,104,104,103,103,103,101,100,100,99,99,98,97,96,96,96,96,96,96,96,96,96,95,95,94,94,94,94,
          107,108,108,109,109,110,111,112,114,115,116,117,118,119,121,125,125,127,131,136,140,141,142,144,144,145,148,149,148,147,146,144,140,138,136,130,127,125,123,121,119,118,117,117,116,116,116,115,114,113,113,111,110,109,108,107,106,105,105,103,103,102,102,102,103,101,100,100,100,99,98,98,97,96,96,96,96,96,96,96,96,95,95,95,94,94,94,
          107,108,109,109,110,110,110,113,115,117,118,119,120,123,126,129,131,134,139,142,144,145,147,148,150,152,154,154,153,154,151,149,146,143,140,136,130,128,126,124,122,121,120,119,118,117,117,117,116,116,115,113,112,110,109,108,107,106,106,105,104,103,102,101,101,100,100,100,100,99,99,98,97,96,96,96,96,96,96,96,96,95,95,95,94,94,94,
          107,108,109,109,110,110,110,112,115,117,119,122,125,127,130,133,137,141,143,145,148,149,152,155,157,159,160,160,161,162,159,156,153,149,146,142,139,134,130,128,126,125,122,120,120,120,119,119,119,118,117,115,113,111,110,110,109,108,107,106,106,105,104,104,103,102,100,100,100,99,99,98,97,96,96,96,96,96,96,96,96,95,95,95,95,94,94,
          108,108,109,109,110,110,110,112,115,118,121,125,128,131,134,138,141,145,147,149,152,157,160,161,163,166,169,170,170,171,168,162,158,155,152,148,144,140,136,132,129,127,124,122,121,120,120,120,120,120,119,117,115,113,110,110,110,110,109,108,108,107,107,106,105,104,102,100,100,100,99,98,97,96,96,96,96,96,96,96,96,96,95,95,95,94,94,
          108,109,109,110,110,111,112,114,117,120,124,128,131,135,138,142,145,149,152,155,158,163,166,167,170,173,175,175,175,173,171,169,164,160,156,153,149,144,140,136,131,129,126,124,123,123,122,121,120,120,120,119,117,115,111,110,110,110,110,110,109,109,110,109,108,106,103,101,100,100,100,98,97,96,96,96,96,96,96,96,96,96,95,95,95,95,94,
          108,109,110,110,110,113,114,116,119,122,126,131,134,138,141,145,149,152,156,160,164,169,171,174,177,175,178,179,177,175,174,172,168,163,160,157,151,147,143,138,133,130,128,125,125,124,123,122,121,121,120,120,118,116,115,111,110,110,110,110,113,114,113,112,110,107,105,102,100,100,100,98,97,96,96,96,96,96,96,96,96,96,96,95,95,95,94,
          108,109,110,110,112,115,116,118,122,125,129,133,137,140,144,149,152,157,161,165,169,173,176,179,179,180,180,180,178,178,176,175,171,165,163,160,153,148,143,139,135,132,129,128,127,125,124,124,123,123,122,122,120,118,117,118,115,117,118,118,119,117,116,115,112,109,107,105,100,100,100,100,97,96,96,96,96,96,96,96,96,96,96,95,95,95,95,
          108,109,110,111,114,116,118,122,127,130,133,136,140,144,148,153,157,161,165,169,173,177,180,180,180,180,181,180,180,180,179,178,173,168,165,161,156,149,143,139,136,133,130,129,128,126,126,125,125,125,125,124,122,121,120,120,120,120,121,122,123,122,120,117,114,111,108,106,105,100,100,100,100,96,96,96,96,96,96,96,96,96,96,96,95,95,95,
          107,108,110,113,115,118,121,126,131,134,137,140,143,148,152,157,162,165,169,173,177,181,181,181,180,181,181,181,180,180,180,178,176,170,167,163,158,152,145,140,137,134,132,130,129,127,127,126,127,128,128,126,125,125,125,123,126,128,129,130,130,125,124,119,116,114,112,110,107,106,105,100,100,100,96,96,96,96,96,96,96,96,96,96,96,95,95,
          107,109,111,116,119,122,125,130,135,137,140,144,148,152,156,161,165,168,172,177,181,184,181,181,181,180,180,180,180,180,180,178,178,173,168,163,158,152,146,141,138,136,134,132,130,129,128,128,130,130,130,129,128,129,129,130,132,133,133,134,134,132,128,122,119,116,114,112,108,106,105,105,100,100,100,97,97,97,97,97,97,97,96,96,96,96,95,
          108,110,112,117,122,126,129,135,139,141,144,149,153,156,160,165,168,171,177,181,184,185,182,180,180,179,178,178,180,179,179,178,176,173,168,163,157,152,148,143,139,137,135,133,131,130,130,131,132,132,132,131,132,132,133,134,136,137,137,137,136,134,131,124,121,118,116,114,111,109,107,106,105,100,100,100,97,97,97,97,97,97,97,96,96,96,96,
          108,110,114,120,126,129,134,139,142,144,146,152,158,161,164,168,171,175,181,184,186,186,183,179,178,178,177,175,178,177,177,176,175,173,168,162,156,153,149,145,142,140,138,136,133,132,132,132,134,134,134,134,135,136,137,138,140,140,140,140,139,137,133,127,123,120,118,115,112,108,108,106,106,105,100,100,100,98,98,98,98,98,98,97,96,96,96,
          108,110,116,122,128,133,137,141,143,146,149,154,161,165,168,172,175,180,184,188,189,187,182,178,176,176,175,173,174,173,175,174,173,171,168,161,157,154,150,148,145,143,141,138,135,135,134,135,135,136,136,137,138,139,140,140,140,140,140,140,140,139,135,130,126,123,120,117,114,111,109,108,107,106,105,100,100,100,99,99,98,98,98,98,97,97,96,
          110,112,118,124,130,135,139,142,145,148,151,157,163,169,172,176,179,183,187,190,190,186,180,177,175,173,170,169,169,170,171,172,170,170,167,163,160,157,154,152,149,147,144,140,137,137,136,137,138,138,139,140,141,140,140,140,140,140,140,140,140,138,134,131,128,124,121,118,115,112,110,109,108,107,106,105,100,100,100,99,99,99,98,98,98,97,97,
          110,114,120,126,131,136,140,143,146,149,154,159,166,171,177,180,182,186,190,190,190,185,179,174,171,168,166,163,164,163,166,169,170,170,168,164,162,161,158,155,153,150,147,143,139,139,139,139,140,141,141,142,142,141,140,140,140,140,140,140,140,137,134,131,128,125,122,119,116,114,112,110,109,109,108,107,105,100,100,100,99,99,99,98,98,97,97,
          110,115,121,127,132,136,140,144,148,151,157,162,169,174,178,181,186,188,190,191,190,184,177,172,168,165,162,159,158,158,159,161,166,167,169,166,164,163,161,159,156,153,149,146,142,142,141,142,143,143,143,143,144,142,141,140,140,140,140,140,140,138,134,131,128,125,123,120,117,116,114,112,110,109,108,107,106,105,102,101,100,99,99,99,98,98,97,
          110,116,121,127,132,136,140,144,148,154,160,166,171,176,180,184,189,190,191,191,191,183,176,170,166,163,159,156,154,155,155,158,161,165,170,167,166,165,163,161,158,155,152,150,146,145,145,145,146,146,144,145,145,144,142,141,140,140,140,140,138,136,134,131,128,125,123,121,119,117,115,113,112,111,111,110,108,106,105,102,100,100,99,99,99,98,98,
          110,114,119,126,131,135,140,144,149,158,164,168,172,176,183,184,189,190,191,191,190,183,174,169,165,161,158,154,150,151,152,155,159,164,168,168,168,167,165,163,160,158,155,153,150,148,148,148,148,148,147,146,146,145,143,142,141,140,139,138,136,134,132,131,128,126,124,122,120,118,116,114,113,113,112,111,108,107,106,105,104,102,100,99,99,99,99,
          110,113,119,125,131,136,141,145,150,158,164,168,172,177,183,187,189,191,192,191,190,183,174,168,164,160,157,153,150,149,150,154,158,162,166,170,170,168,166,164,162,160,158,155,152,151,151,151,151,151,149,148,147,146,145,143,142,140,139,137,135,134,132,131,129,127,125,123,121,119,117,116,114,114,113,112,110,108,107,105,103,100,100,100,100,99,99,
          110,112,118,124,130,136,142,146,151,157,163,168,174,178,183,187,189,190,191,192,189,182,174,168,164,160,157,153,149,148,149,153,157,161,167,170,170,170,168,166,165,163,159,156,154,153,155,155,155,155,152,150,149,147,145,143,141,140,139,138,136,134,133,131,130,128,126,124,122,120,119,117,116,115,114,113,111,110,107,106,105,105,102,101,100,100,100,
          110,111,116,122,129,137,142,146,151,158,164,168,172,179,183,186,189,190,192,193,188,182,174,168,164,161,157,154,151,149,151,154,158,161,167,170,170,170,170,169,168,166,160,157,156,156,157,158,159,159,156,153,150,148,146,144,141,140,140,138,136,135,134,133,131,129,127,125,123,122,120,118,117,116,115,114,112,111,110,108,107,106,105,104,102,100,100,
          108,110,115,121,131,137,142,147,152,159,163,167,170,177,182,184,187,189,192,194,189,183,174,169,165,161,158,156,154,153,154,157,160,164,167,171,172,174,174,173,171,168,161,159,158,158,159,161,161,160,158,155,151,149,147,144,142,141,140,138,137,136,135,134,132,130,128,126,125,123,121,119,118,117,116,115,113,112,112,111,110,109,108,107,105,101,100,
          108,110,114,120,128,134,140,146,152,158,162,166,169,175,180,183,186,189,193,195,190,184,176,171,167,163,160,158,157,156,157,159,163,166,170,174,176,178,178,176,172,167,164,161,161,160,161,163,163,163,160,157,153,150,148,146,144,142,141,140,139,138,136,135,134,133,129,127,126,124,122,121,119,118,117,116,114,113,112,111,110,110,109,109,107,104,100,
          107,110,115,119,123,129,135,141,146,156,161,165,168,173,179,182,186,189,193,194,191,184,179,175,170,166,162,161,160,160,161,162,165,169,172,176,178,179,179,176,172,168,165,163,163,163,163,165,166,164,161,158,155,152,150,147,146,144,143,142,141,139,139,138,137,135,131,128,127,125,124,122,121,119,118,116,115,113,112,111,111,110,110,109,109,105,100,
          107,110,114,117,121,126,130,135,142,151,159,163,167,171,177,182,185,189,192,193,191,187,183,179,174,169,167,166,164,164,165,166,169,171,174,178,179,180,180,178,173,169,166,165,165,166,165,168,169,166,163,159,157,154,152,149,148,147,146,145,143,142,141,140,139,138,133,130,128,127,125,124,122,120,118,117,115,112,111,111,111,111,110,109,108,106,100,
          107,109,113,118,122,126,129,134,139,150,156,160,165,170,175,181,184,188,191,192,192,189,185,181,177,173,171,169,168,167,169,170,172,174,176,178,179,180,180,179,175,170,168,166,166,168,168,170,170,168,164,160,158,155,152,151,150,149,149,148,147,145,144,143,142,141,136,133,130,129,127,125,123,120,119,118,115,112,111,111,111,110,109,109,109,105,100,
          105,107,111,117,121,124,127,131,137,148,154,159,164,168,174,181,184,187,190,191,191,190,187,184,180,178,175,174,172,171,173,173,173,176,178,179,180,180,180,179,175,170,168,166,168,169,170,170,170,170,166,161,158,156,154,153,151,150,150,150,150,148,147,146,145,143,139,135,133,131,129,126,124,121,120,118,114,111,111,111,110,110,109,107,106,104,100,
          104,106,110,114,118,121,125,129,135,142,150,157,162,167,173,180,183,186,188,190,190,190,189,184,183,181,180,179,179,176,177,176,176,177,178,179,180,180,179,177,173,169,167,166,167,169,170,170,170,170,167,161,159,157,155,153,151,150,150,150,150,150,150,149,147,145,141,138,135,133,130,127,125,123,121,118,113,111,110,110,109,109,107,106,105,103,100,
          104,106,108,111,115,119,123,128,134,141,148,154,161,166,172,179,182,184,186,189,190,190,190,187,185,183,180,180,180,179,179,177,176,177,178,178,178,177,176,174,171,168,166,164,166,168,170,170,170,170,168,162,159,157,155,153,151,150,150,150,150,150,150,150,150,148,144,140,137,134,132,129,127,125,122,117,111,110,107,107,106,105,104,103,102,101,100,
          103,105,107,110,114,118,122,127,132,140,146,153,159,165,171,176,180,183,185,186,189,190,188,187,184,182,180,180,180,179,178,176,176,176,176,174,174,173,172,170,168,167,165,163,164,165,169,170,170,170,166,162,159,157,155,153,151,150,150,150,150,150,150,150,150,150,146,142,139,136,133,131,128,125,122,117,110,108,106,105,104,103,103,101,101,101,101,
          102,103,106,108,112,116,121,125,130,138,145,151,157,163,170,174,178,181,181,184,186,186,187,186,184,181,180,180,180,179,178,174,173,173,171,170,170,169,168,167,166,164,163,162,161,164,167,169,170,168,164,160,158,157,155,153,151,150,150,150,150,150,150,150,150,150,147,144,141,138,135,133,128,125,122,116,109,107,104,104,103,102,101,101,101,101,101,
          101,102,105,107,110,115,120,124,129,136,143,149,155,162,168,170,174,176,178,179,181,182,184,184,183,181,180,180,179,177,174,172,170,168,166,165,164,164,164,164,162,160,159,159,158,160,162,164,166,166,163,159,157,156,155,153,151,150,150,150,150,150,150,150,150,150,149,146,143,140,137,133,129,124,119,112,108,105,103,103,102,101,101,101,101,100,100,
          101,102,104,106,109,113,118,122,127,133,141,149,155,161,165,168,170,172,175,176,177,179,181,181,181,180,180,179,177,174,171,167,165,163,161,160,160,160,160,160,157,155,155,154,154,155,157,159,161,161,161,159,156,154,154,153,151,150,150,150,150,150,150,150,150,150,149,147,144,141,137,133,129,123,116,110,107,104,102,102,101,101,101,100,100,100,100,
          102,103,104,106,108,112,116,120,125,129,137,146,154,161,163,165,166,169,172,173,174,175,177,178,178,178,178,177,174,171,168,164,160,158,157,157,156,156,156,155,152,151,150,150,151,151,152,154,156,157,157,156,155,153,152,152,151,150,150,150,150,150,150,150,150,150,150,147,144,141,138,133,127,120,113,109,106,103,101,101,101,100,100,100,100,100,100,
          103,104,105,106,108,110,114,118,123,127,133,143,150,156,160,160,161,162,167,170,171,172,173,175,175,174,174,173,171,168,164,160,156,155,154,153,153,152,152,150,149,148,148,148,148,148,149,149,150,152,152,152,152,151,150,150,150,150,150,150,150,150,150,150,150,150,149,147,144,141,138,132,125,118,111,108,105,103,102,101,101,101,100,100,100,100,100,
          104,105,106,107,108,110,113,117,120,125,129,138,145,151,156,156,157,158,160,164,166,168,170,171,172,171,171,169,166,163,160,156,153,151,150,150,149,149,149,148,146,146,146,146,146,146,146,147,148,148,149,149,149,148,148,148,148,149,149,150,150,150,150,150,150,150,148,146,143,141,136,129,123,117,110,108,105,104,103,102,102,101,101,100,100,100,100,
          103,104,105,106,107,109,111,115,118,122,127,133,140,143,150,152,153,155,157,159,162,164,167,168,168,168,167,166,163,160,157,153,150,148,148,147,147,147,145,145,144,143,143,143,144,144,144,144,145,145,145,145,146,146,146,146,146,147,147,148,149,150,150,150,150,149,147,145,143,141,134,127,123,117,111,108,105,105,104,104,103,103,102,101,100,100,100,
          102,103,104,105,106,107,109,113,116,120,125,129,133,137,143,147,149,151,152,154,158,161,164,165,164,164,163,163,160,157,154,151,149,147,145,145,144,143,141,140,141,141,141,141,141,142,142,142,142,142,142,142,143,143,143,144,144,145,146,146,146,147,148,148,148,148,145,143,142,140,134,128,123,117,112,108,106,105,105,104,104,103,102,101,100,100,99,
          102,103,104,105,105,106,108,110,113,118,123,127,129,132,137,141,142,142,145,150,154,157,161,161,160,160,160,159,157,154,151,148,146,145,143,142,142,139,137,136,137,137,138,138,139,139,139,139,139,139,139,139,140,140,141,142,142,143,144,144,144,145,145,145,145,145,144,142,140,139,136,129,124,119,113,109,106,106,105,104,103,102,101,101,100,99,99,
          102,103,104,104,105,106,107,108,111,116,121,124,126,128,131,134,135,137,139,143,147,152,156,157,157,157,156,155,153,151,148,146,143,142,141,140,138,135,133,132,132,133,133,133,134,135,135,135,135,136,136,137,137,138,138,139,140,141,141,142,142,143,142,142,141,141,140,139,137,134,133,129,125,121,114,110,107,106,106,104,103,102,101,100,99,99,99,
          102,103,104,104,105,105,106,108,110,113,118,121,124,126,128,130,132,134,136,139,143,147,150,154,154,154,153,151,149,148,146,143,141,139,137,136,132,130,128,128,128,129,129,130,130,131,132,132,132,133,134,134,135,135,136,137,138,139,139,140,140,140,139,139,138,137,137,135,132,130,129,127,124,120,116,112,109,106,105,103,102,101,101,100,99,99,99,
          101,102,103,104,104,105,106,107,108,110,114,119,121,124,126,128,129,132,134,137,140,143,147,149,151,151,151,149,147,145,143,141,138,136,134,131,128,126,124,125,125,126,126,127,128,128,129,129,130,130,131,131,132,132,133,134,135,135,136,136,137,137,136,136,135,134,133,131,129,128,127,126,123,119,115,111,109,107,105,104,103,102,101,100,100,100,99,
          101,102,103,103,104,104,105,106,108,110,112,116,119,121,124,125,127,130,132,135,137,140,143,147,149,149,149,147,145,143,141,139,136,133,131,128,125,122,121,122,122,122,123,125,125,126,127,127,127,128,128,128,129,129,130,131,131,132,132,133,133,133,132,132,131,131,130,129,128,126,125,124,121,117,111,109,108,106,105,104,103,102,101,101,100,100,100,
          100,101,102,103,103,104,105,106,107,108,110,114,117,119,121,123,126,128,130,133,136,139,141,144,146,147,146,145,143,141,138,136,133,130,127,124,121,120,120,120,120,120,121,122,123,124,124,125,125,126,126,125,126,126,126,125,126,127,128,128,129,129,128,128,128,128,128,128,126,125,123,122,119,114,109,108,107,106,105,104,103,103,102,102,101,100,100,
          100,101,102,103,104,105,106,107,108,109,110,112,115,117,120,122,125,127,130,132,135,137,139,142,144,144,144,142,140,138,136,132,129,126,123,120,120,119,119,118,119,119,120,120,120,121,122,122,123,123,123,123,122,123,122,122,121,122,122,122,123,123,123,124,125,125,126,126,125,124,122,120,116,113,109,107,106,105,104,104,103,102,102,101,101,100,100,
          100,101,102,103,104,105,106,107,108,109,110,112,114,117,119,122,124,127,129,131,134,136,138,140,142,142,142,140,138,136,133,129,125,122,120,119,118,118,117,116,117,117,118,119,119,120,120,120,121,121,121,122,121,120,120,120,119,119,120,120,120,120,120,120,123,123,124,124,124,123,121,119,114,112,108,106,106,104,104,103,102,102,101,101,100,100,99,
          101,102,103,104,105,106,107,108,109,110,111,113,114,116,119,121,124,126,128,130,133,135,137,138,140,140,139,137,135,133,131,127,122,120,118,118,117,117,116,115,116,116,117,118,118,118,119,119,120,120,121,121,120,119,119,118,117,117,118,119,118,118,118,119,120,122,123,123,123,122,120,117,113,110,108,106,105,104,103,103,102,101,101,100,100,99,99,
          101,102,103,104,105,106,107,108,109,110,111,111,113,115,118,121,123,125,127,129,131,133,135,137,138,138,137,134,132,130,127,122,120,118,116,116,116,116,115,113,114,115,116,117,117,118,118,119,119,119,120,120,119,118,117,117,116,116,117,117,117,118,119,119,119,120,121,121,121,121,119,116,113,110,107,105,105,103,103,103,102,101,100,100,99,99,99,
          101,102,103,104,105,106,107,108,109,110,111,112,114,116,117,120,122,124,126,129,130,132,133,135,136,136,134,132,129,126,122,120,118,116,114,114,114,114,114,113,113,114,115,116,116,117,117,117,118,118,119,119,118,117,116,116,115,115,116,116,116,117,117,118,118,119,120,120,120,120,119,116,113,109,106,104,104,103,102,102,101,101,100,99,99,99,98,
          101,102,103,104,105,106,107,108,109,110,111,113,115,117,117,118,121,123,126,128,130,130,131,132,133,134,131,129,125,122,120,118,116,114,113,112,112,113,112,112,111,112,113,113,114,115,116,116,117,117,118,118,116,116,115,115,115,114,114,115,116,116,117,117,118,118,119,119,120,120,117,115,112,108,106,104,103,102,102,102,101,100,99,99,99,98,98,
          101,102,103,104,105,105,106,107,108,109,110,111,113,115,117,118,120,122,125,126,127,128,129,130,131,131,128,125,121,120,118,116,114,113,113,111,111,111,111,110,109,110,111,112,113,113,114,115,115,116,117,117,116,115,114,114,113,113,114,114,115,115,116,116,117,118,118,119,119,118,116,114,112,108,105,103,103,102,101,101,100,100,99,99,98,98,97,
          100,101,102,103,104,105,106,107,108,109,110,110,111,113,115,118,120,121,122,124,125,125,126,127,128,127,124,121,120,118,116,114,113,112,112,110,109,109,108,108,108,109,110,111,112,112,113,114,114,115,116,116,115,114,113,112,112,113,113,114,114,115,115,116,116,117,117,118,118,117,115,113,111,107,105,103,102,101,101,100,100,100,99,99,98,98,97,
          100,101,102,103,104,105,105,106,107,108,109,110,110,111,114,116,118,120,120,121,122,122,123,124,123,123,120,118,117,115,114,115,113,111,110,109,108,108,107,107,107,108,109,110,111,111,112,113,113,114,115,115,114,113,112,111,111,112,112,112,113,114,114,115,115,116,116,117,117,116,114,112,109,106,104,102,101,100,100,99,99,99,99,98,98,97,97
        ]
      }
    },
    {
      "name": "smooth", "value": true,
      "bind": {"input": "radio", "options": [true, false]}
    }
  ]
};
