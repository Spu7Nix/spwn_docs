Prism.languages.spwn = Prism.languages.extend("clike", {
  keyword:
    /\b(?:else|for|if|return|error|extract|in|let|type|import|impl|break|\=>|\->|continue|switch|case|null|sync)\b/,
  builtin: /\b(?:null|trigger|obj|\$|self)\b/,
  boolean: /\b(?:true|false)\b/,
  operator: /(==|!=|<=|>=|<|>|&&|\|\||!|=|\+\=|\-\=|\*\=|\/\=|\+|\-|\*|\/|%|\^|\.\.)/,
  number: /(?:\b\d+(\.\d+)?\b)|(\b([0-9]+|\?)[gbci]\b)/,
  string: /\"[^\n\r\"]*\"/,
  tag: /@([a-zA-Z_][a-zA-Z0-9_]*)/,
})
delete Prism.languages.spwn["class-name"]
