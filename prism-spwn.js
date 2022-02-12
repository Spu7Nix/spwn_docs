Prism.languages.spwn = Prism.languages.extend("clike", {
  keyword:
    /\b(?:else|for|if|return|error|extract|let|type|import|impl|break|\=>|\->|continue|match|null|sync|throw|while|as|in|is)\b/,
  builtin: /\b(?:null|trigger|obj|\$|self)\b/,
  boolean: /\b(?:true|false)\b/,
  operator:
    /(==|!=|<=|>=|<|>|&&|\|\||!|=|\+\=|\-\=|\*\=|\/\=|\+|\-|\*|\/|%|\^|\.\.|\-\-|\+\+|\/\%|\/\%=|\^=|<=>|\||\&)/,
  number: /(?:\b\d+(\.\d+)?\b)|(\b([0-9]+|\?)[gbci]\b)/,
  string: /[a-z]?"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*'/,
  tag: /@([a-zA-Z_][a-zA-Z0-9_]*)/,
})
delete Prism.languages.spwn["class-name"]
