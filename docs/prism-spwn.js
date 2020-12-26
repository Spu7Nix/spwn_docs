Prism.languages.spwn = Prism.languages.extend("clike", {
  keyword: /\b(?:else|for|if|return|error|extract|in|let|type|import|impl|break|\=>|\->)\b/,
  builtin: /\b(?:null|trigger|obj|\$|self)\b/,
  boolean: /\b(?:_|iota|nil|true|false)\b/,
  operator: /(==|!=|<=|>=|<|>|&&|\|\||!|=|\+\=|\-\=|\*\=|\/\=|\+|\-|\*|\/|%|\^|\.\.)/,
  number: /(?:\b\d+(\.\d+)?\b)/i,
  string: /\"[^\n\r\"]*\"/,
  type: /(?<=@)([a-zA-Z_][a-zA-Z0-9_]*)/i,
  ids: /\b[0-9?]+[gbci]/,
})
delete Prism.languages.spwn["class-name"]
