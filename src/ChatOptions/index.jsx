export const arrayItems = [
  {
    name: 'Explain Code',
    id: 'explainCode',
    description: 'Explain a complicated piece of code.',
    option: {
      model: 'gpt-4',
      messages: [],
      temperature: 0,
      max_tokens: 1024
    }
  },

  {
    name: 'Improve Code Efficiency',
    id: 'improveCodeEfficiency',
    description: 'Provide ideas for efficiency improvements to Python code.',
    option: {
      model: "gpt-4",
      messages: [],
      temperature: 0,
      max_tokens: 1024,
    }
  },

  {
    name: 'Python Bug Fixer',
    id: 'pythonBugFixer',
    description: 'Find and fix bugs in source code.',
    option: {
      model: "gpt-4",
      messages: [],
      temperature: 0,
      max_tokens: 1024,
    }
  },

  {
    name: 'Function from Specification',
    id: 'functionFromSpecification',
    description: 'Create a Python function from a specification.',
    option : {
      model: "gpt-4",
      messages: [],
      temperature: 0,
      max_tokens: 1024,
    }
  },

  {
    name: 'Natural Language to SQL',
    id: 'naturalLanguageToSQL',
    description: 'Convert natural language into SQL queries.',
    option: {
      model: "gpt-4",
      messages: [],
      temperature: 0,
      max_tokens: 1024,
    }
  },

  {
    name:'Single Page Website',
    id: 'singlePageWebsite',
    description: 'Create a single page website.',
    option: {
      model: "gpt-4",
      messages: [],
      temperature: 0,
      max_tokens: 2048,
    }
  }
];