export enum ProcessingStage {
    NotStarted = 1,
    Queued = 10,
    Starting = 20,
    Parsing = 40,
    Processing = 60,
    FinalChecks = 95,
    Completed = 100
  }
  
export  enum Agents {
    Verifier = "Semantic Verifier",
    Checker = "Syntax Checker",
    Picker = "Picker",
    Migrator = "Migrator",
    Agents = "Agents"
  }